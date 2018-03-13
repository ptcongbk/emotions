require 'nn'
local npy4th = require 'npy4th'
torch.setdefaulttensortype('torch.FloatTensor')

local Model = torch.class('Model')

function Model:__init(dir, vocabsz, dim, pretrained, pooling, scratch, lowrank,dropout,jointpooling, nclass,lib,gpu)
  self.loss = 0
  self.nsamples = 0
  self.acc = 0

  if lib == 'cunn' or lib == 'cudnn' then
      require 'cunn'
    if lib == 'cudnn' then
      require 'cudnn'
    end
    cutorch.setDevice(gpu)
    self.gpu = true
    self.cudaImage = torch.CudaTensor()
    self.cudaText = torch.CudaLongTensor()
    self.cudaTarget = torch.CudaLongTensor()
  else
    self.gpu = false
  end

 print(dir .. '/model.bin')
 if paths.filep(dir .. '/model.bin') then -- load pretrained model
    self.net = torch.load(dir .. '/model.bin')
  else
    self.net = nn.Sequential() -- create new model     
    -- Image branch
    image_branch = nn.Sequential()
    image_branch:add(nn.Linear(2048,dim))
    image_branch:add(nn.Reshape(dim,1))

    -- Text branch
    text_branch = nn.Sequential()
    lookup = nn.LookupTable(vocabsz, dim)
    lookup.weight:copy(pretrained)
    if scratch==0 then
      lookup.accGradParameters = function() end
    end
    text_branch:add(lookup)
    self.lookup = lookup
    if dropout~=0 then
      text_branch:add(nn.Dropout(dropout))
    end

    -- average pooling
    if pooling == 'avg' then
      text_branch:add(nn.Mean(1))
    elseif pooling == 'max' then
      text_branch:add(nn.Max(1))
    else
      error('unknown pooling function')
    end
    text_branch:add(nn.Reshape(dim,1))
    -- self.text_branch = text_branch
    -- self.image_branch = image_branch

    prl = nn.ParallelTable()
    prl:add(image_branch)
    prl:add(text_branch)

    self.net:add(prl)
    self.net:add(nn.JoinTable(2))

    if jointpooling == 'avg' then
      self.net:add(nn.Mean(2))
    elseif jointpooling == 'max' then
      self.net:add(nn.Max(2))
    else
      error('unknown pooling function')
    end

    -- classifier
    if lowrank == 0 then
      self.net:add(nn.Linear(dim, nclass))
    else
      self.net:add(nn.Linear(dim, lowrank))
      self.net:add(nn.Linear(lowrank, nclass))
    end
    self.criterion = nn.CrossEntropyCriterion()
    self.criterion.nll.sizeAverage = false
    print(self.net)
    if self.gpu then -- send networks to GPU
      self.net:cuda()
      self.criterion:cuda()
    end
  end
end

function Model:set_gpu(image, text, target)
  if self.net then
    if self.net:type() ~= 'torch.CudaTensor' then
      self.net:cuda()
    end
  end

  if image:type() ~= 'torch.CudaTensor' then
    image = self.cudaImage:resize(image:size()):copy(image)
  end

  if text:type() ~= 'torch.CudaLongTensor' then
    text = self.cudaText:resize(text:size()):copy(text)
  end
  -- send target to GPU
  -- if target ~= nil and target ~= 'torch.CudaLongTensor' then
  --   target = self.cudaTarget:resize(target:size()):copy(target)
  -- end
  return image,text, target
end

function Model:train(image, text, y, lr)
  if self.gpu then 
    image, text, y = self:set_gpu(image,text,y)
  end
  local input = {image, text}
  -- feed forward
  local output = self.net:forward(input)
  local maxval, maxidx = output:max(1)
  if maxidx[1] == y then
    self.acc = self.acc+1
  end
  self.loss = self.loss + self.criterion:forward(output, y)
  self.nsamples = self.nsamples + 1
  -- backward
  self.criterion:backward(output, y)
  self.net:updateGradInput(input, self.criterion.gradInput)
  self.net:accUpdateGradParameters(input,  self.criterion.gradInput, lr)
end

function Model:test(image, text, y)
  if self.gpu then 
    image, text, y = self:set_gpu(image,text,y)
  end
  local input = {image, text}
  local pred = self.net:forward(input)
  local maxval, maxidx = pred:max(1)
  if maxidx[1] == y then
    return 1, pred
  else
    return 0, pred
  end
end

function Model:predict(image, text)
  if self.gpu then 
    image, text = self:set_gpu(image,text)
  end
  local input = {image, text}
  local pred = self.net:forward(input)
  local maxval, maxidx = pred:max(1)
  return maxidx[1], maxval[1]
end

function Model:predict_getall(image, text)
  if self.gpu then
    image, text = self:set_gpu(image,text)
  end
  local input = {image, text}
  local pred = self.net:forward(input)
  --local maxval, maxidx = pred:max(1)
  return pred
end


function Model:get_nsamples()
  return self.nsamples
end

-- function Model:get_branches()
--   return self.image_branch, self.text_branch
-- end

function Model:save_pretrained(rundir)
  local outputfile = rundir .. '/pretrained.npy'
  npy4th.savenpy(outputfile, self.lookup.weight)
end

function Model:reset()
  self.nsamples = 0
  self.loss = 0 
  self.acc = 0
end

function Model:get_net()
  return self.net
end

function Model:get_acc()
  return self.acc*100/self.nsamples
end

function Model:get_loss()
  return self.loss/self.nsamples
end

function Model:save(rundir)
  local outputfile = rundir .. '/model.bin'
  local net = self.net:clearState()
  if net:type() == 'torch.CudaTensor' then
    net:float()
  end
  io.write(string.format('[saving model into %s]... ', outputfile)); io.flush()
  torch.save(outputfile, net)
  io.write('done\n'); io.flush()
end
