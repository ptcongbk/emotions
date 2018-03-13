require 'torch'
require 'image'
local tds = require 'tds'
--local debugger = require('fb.debugger')


local data = {}
setmetatable(data,{
__call = function(self, image_dim)
  image_dim = image_dim or 320

  local function load_image_path(dirpath)
    local img, cat = tds.Hash(), tds.Vec()
    for class in paths.iterdirs(dirpath) do
      cat:insert(class)
      local imgpath = tds.Hash()
      local dirname = dirpath .. '/' .. class
      for image in paths.files(dirname, 'jpg') do
        imgpath[#imgpath+1] = dirname .. '/' .. image
      end
      img[#cat] = imgpath
    end
    return img, cat
  end

  local function split(tab, train_rate, valid_rate)
    if (train_rate+valid_rate) ~= 1 then
      error("split ratios not equal to 1")
    end
    local s = tds.Hash()
    for i=1,#tab do
      local size = #tab[i]
      local nvalid = math.floor(size*valid_rate)
      local ntrain = size-nvalid
      local rand = torch.randperm(size)
      s[i] = tds.Hash()
      if nvalid>0 then
        s[i].valid = rand:narrow(1,1,nvalid)
      end
      s[i].train = rand:narrow(1,1+nvalid,ntrain)
    end
    return s
  end

  -- Some definitions copied from the TensorFlow model
  -- input subtraction
  local input_sub = 128
  -- Scale input image
  local input_scale = 0.0078125
  -- input dimension
  local input_dim = 299
  -- define tensor for training
  local x = torch.FloatTensor(1, 3, input_dim, input_dim)
  local y = torch.FloatTensor(1)

  local function load_image(path, distortion)
    distortion = distortion or false -- no distortion by default
    local img = image.load(path, 3, 'float')
    -- find the smaller dimension, and resize it to input_dim (while keeping aspect ratio)
    if img:size(3) < img:size(2) then
       img = image.scale(img, image_dim, image_dim * img:size(2) / img:size(3))
    else
       img = image.scale(img, image_dim * img:size(3) / img:size(2), image_dim)
    end
    local iW, iH  = img:size(3), img:size(2)
    if distortion then
      -- do random crop
      local oW = input_dim
      local oH = input_dim
      local h1 = math.ceil(torch.uniform(1e-2, iH-oH))
      local w1 = math.ceil(torch.uniform(1e-2, iW-oW))
      img = image.crop(img, w1, h1, w1 + oW, h1 + oH)
      assert(img:size(3) == oW)
      assert(img:size(2) == oH)
      -- do hflip with probability 0.5
      if torch.uniform() > 0.5 then
        img = image.hflip(img)
      end
    else
      local min = math.min(iW, iH)
      img = image.crop(img, 'c', min, min)
      img = image.scale(img, input_dim)
    end
    -- normalize image
    img:mul(255):add(-input_sub):mul(input_scale)
    return img
  end
  ------------------------------------------------------------------------------
  -- public methods
  local methods = {}

  -- loading train set
  local cat, sample, traindata, testdata
  function methods:load_train(dirpath, valid_rate)
    valid_rate = valid_rate or 0.1
    traindata, cat = load_image_path(dirpath)
    sample = split(traindata, 1-valid_rate, valid_rate)
  end
  -- loading test set
  function methods:load_test(dirpath)
    testdata, cat = load_image_path(dirpath)
  end

  -- get a batch of train samples
  function methods:train_sample(bsz)
    x:resize(bsz, 3, input_dim, input_dim)
    y:resize(bsz)
    -- populate training tensors
    for i=1,bsz do
      local class = torch.random(#traindata)
      y[i] = class
      local cat = traindata[class]
      local img_path = cat[sample[class].train[torch.random(sample[class].train:size(1))]]
      local ok, img = pcall(load_image, img_path, true)
      if not ok then --TODO: error handling
        return error('cannot load image ' .. img_path)
      else
        x:select(1,i):copy(img)
      end
    end
    return x,y
  end

  -- get a sample from train/valid set
  function methods:sample(class, set)
    local cat, idx
    if set == 'train' then
      idx  = sample[class].train
      cat = traindata[class]
    elseif set == 'valid' then
      debugger.enter()
      idx  = sample[class].valid
      cat = traindata[class]
    elseif set == 'test' then
      cat = testdata[class]
      idx = torch.range(1, #cat)
    end
    local itr = {}

    function itr:label()
      return class
    end

    function itr:size()
      return idx:size(1)
    end

    function itr:filename(i)
      return cat[i]
    end

    setmetatable(itr, {
        __index = function(self, index)
            local img_path = cat[idx[index]]
            local ok, img = pcall(load_image, img_path)
            if not ok then -- error handling
              return error('cannot load image ' .. img_path)
            else
              return img:view(1, img:size(1), img:size(2), img:size(3))
            end
        end})
      return itr
  end

  function methods:class_name(idx)
    return cat[idx]
  end

  function methods:nclass()
    return #cat
  end

  -----------------------------------------------------------------------------
  -- load image bottleneck
  -- for training images
  local nhu = 2048
  local function bottleneck_load(inception, set, nsample)
    nsample = nsample or 1 -- number of sample per images
    local distortion = false or (set == 'train' and nsample>1)
    local data={}
    for i=1,#cat do
      local idx
      if set == 'train' then
        idx = sample[i].train
      elseif set == 'valid' then
        idx = sample[i].valid
      else
        error('set must be either train or valid')
      end
      local cat = traindata[i]
      local sz = idx:size(1)
      local tens = torch.FloatTensor(sz*nsample, nhu)
      local it=0
      for j=1,sz do
        local img_path = cat[idx[j]]
        for k=1,nsample do
          local ok, img = pcall(load_image, img_path, distortion)
          if not ok then -- error handling
            return error('cannot load image ' .. img_path)
          end
          local x = img:view(1, img:size(1), img:size(2), img:size(3))
          if inception:type() == 'torch.CudaTensor' then
            x = x:cuda()
          end
          local img_emb = inception:forward(x)
          it = it+1
          tens:select(1,it):copy(img_emb:float())
        end
      end
      data[i] = tens
    end
    return data
  end

  local train_img, valid_img
  local bottleneck_input, bottleneck_label, bottleneck_mbsz
  function methods:bottleneck(dirpath, inception, mbsz, train_sample)
    train_sample = train_sample or 10
    print('[loading all training images bottlenecks into memory]: ' .. train_sample .. ' samples per images')
    if paths.filep(dirpath .. '/bottleneck_train_'..train_sample..'.th7') then
      train_img = torch.load(dirpath .. '/bottleneck_train_'..train_sample..'.th7')
    else
      train_img = bottleneck_load(inception, 'train', train_sample)
      torch.save(dirpath .. '/bottleneck_train_'..train_sample..'.th7', train_img)
    end
    print('[loading all validation images bottlenecks into memory]')
    if paths.filep(dirpath .. '/bottleneck_valid.th7') then
      valid_img = torch.load(dirpath .. '/bottleneck_valid.th7')
    else
      valid_img = bottleneck_load(inception, 'valid')
      torch.save(dirpath .. '/bottleneck_valid.th7', valid_img)
    end
    bottleneck_input = torch.FloatTensor(mbsz, nhu)
    bottleneck_label = torch.LongTensor(mbsz)
    bottleneck_mbsz = mbsz
  end

  function methods:bottleneck_train_batch()
    bottleneck_input:zero()
    bottleneck_label:zero()
    for i=1,bottleneck_mbsz do
      local class = torch.random(self:nclass())
      local idx = torch.random(train_img[class]:size(1))
      bottleneck_input:select(1,i):copy(train_img[class]:select(1, idx))
      bottleneck_label[i] = class
    end
    return bottleneck_input, bottleneck_label
  end

  function methods:bottleneck_valid_batch(class)
    return valid_img[class], torch.LongTensor(valid_img[class]:size(1)):fill(class)
  end

  return methods
end})

return data
