local tds = require 'tds'
local Data = torch.class('Data')
local pl = require 'pl'

function Data:__init(textFile, imageFile, vocab, validFile, dataset)
  self.nclass = 0
  self.maxlength = 0
  self.rLabelMapping= tds.Hash()
  validrate = validrate or 0

  -- Load text input
  if not paths.filep(textFile) then
    error(textFile .. 'does not exist')
  end
  io.write(string.format('[loading samples from %s]... ', textFile)); io.flush()
  local textTokenVec = tds.Vec()
  local textContentVec = tds.Vec()
  local textLabelVec = tds.Vec()
  local textNameVec = tds.Vec()
  local textClassVec = tds.Vec()
  local labelMapping = tds.Hash()
  local rLabelMapping = tds.Hash()
  if dataset == "reddit" then
    labelMapping["happy"] = 1
    labelMapping["creepy"] = 2
    labelMapping["rage"] = 3
    labelMapping["gore"] = 4
    self.rLabelMapping[1] = "happy"
    self.rLabelMapping[2] = "creepy"
    self.rLabelMapping[3] = "rage"
    self.rLabelMapping[4] = "gore"
  else
    labelMapping["amusement"] = 1
    labelMapping["anger"] = 2
    labelMapping["awe"] = 3
    labelMapping["contentment"] = 4
    labelMapping["disgust"] = 5
    labelMapping["excitement"] = 6
    labelMapping["fear"] = 7
    labelMapping["sadness"] = 8
    self.rLabelMapping[1] = "amusement"
    self.rLabelMapping[2] = "anger"
    self.rLabelMapping[3] = "awe"
    self.rLabelMapping[4] = "contentment"
    self.rLabelMapping[5] = "disgust"
    self.rLabelMapping[6] = "excitement"
    self.rLabelMapping[7] = "fear"
    self.rLabelMapping[8] = "sadness"
  end
  for line in io.lines(textFile) do
    local count = 0
    local name = ""
    local class = ""
    local t={}
    local txt = {}
    for w in line:gmatch("%S+") do 
        if count == 0 then
            name = w
        elseif count == 1 then
            class = w
            assert(labelMapping[class]~=nil)
            -- if labelMapping[class] == nil then
            --   labelMapping[class] = #labelMapping + 1
            -- end
        else
            local idx = vocab:idx(w)
            if idx ~= nil then
              table.insert(t, idx)
              table.insert(txt, w)
            end
        end
        count = count + 1
    end
    if #t == 0 then
      print(line)
    end
    if #t > 0 then
      local lab = labelMapping[class]
      if lab>self.nclass then self.nclass = lab end
      if #t>self.maxlength then self.maxlength = #t end
      textClassVec:insert(class)
      textNameVec:insert(name)
      textLabelVec:insert(lab)
      textTokenVec:insert(torch.IntTensor(t))
      textContentVec:insert(table.concat(txt, " "))
    end
  end

  assert(#textTokenVec == #textLabelVec, 'size mismatch')
  assert(#textTokenVec == #textClassVec, 'size mismatch')
  assert(#textTokenVec == #textNameVec, 'size mismatch')

  -- Load image input
  if not paths.filep(imageFile) then
    error(imageFile .. 'does not exist')
  end
  local imageEmbVec = tds.Vec()
  local imageLabelVec = tds.Vec()
  local imageNameVec = tds.Vec()
  local imageClassVec = tds.Vec()
  for line in io.lines(imageFile) do
    local t = {}
    local count  = 0
    local name = ""
    local class = ""
    local tokens = line:split(',')
    assert(#tokens==2050,"Missing feature or name or class")
    for index,value in ipairs(tokens) do 
      if index == 1 then 
        name = value
      elseif index == 2 then
        class = value
        assert(labelMapping[class] ~= nil, 'Label mapping missing: ' .. class)
      else 
        local number = tonumber(value)
        if number ~= nil then
            table.insert(t, number)
        end
      end
    end
    if #t > 0 then
      local lab = labelMapping[class]
      imageClassVec:insert(class)
      imageNameVec:insert(name)
      imageLabelVec:insert(lab)
      imageEmbVec:insert(torch.FloatTensor(t))
    end
  end
  assert(#imageEmbVec == #imageLabelVec, 'size mismatch')
  assert(#imageEmbVec == #imageClassVec, 'size mismatch')
  assert(#imageEmbVec == #imageNameVec, 'size mismatch')

  -- Split train/val data
  assert(#imageEmbVec == #textTokenVec, 'size mismatch ' .. #imageEmbVec .. " " .. #textTokenVec)

  if validFile~="" then
    self.vtext = tds.Vec()
    self.vcontent = tds.Vec()
    self.vimage = tds.Vec()
    self.vname = tds.Vec()
    self.vclass = tds.Vec()
    self.vlabel = tds.Vec()

    if not paths.filep(validFile) then
      error(validFile .. 'does not exist')
    end

    local validNames = tds.Vec()
    for line in io.lines(validFile) do
      validNames:insert(line)
    end

    local removedIndices = tds.Hash()
    for i=1,#imageEmbVec do
      assert(imageNameVec[i] == textNameVec[i])
      assert(imageClassVec[i] == textClassVec[i], imageNameVec[i] .. " " .. imageClassVec[i] .. " " .. textClassVec[i])
      assert(imageLabelVec[i] == textLabelVec[i])

      local name = imageNameVec[i]
      local found = false
      for i, valid_id in ipairs(validNames) do
        if name == valid_id then
          found = true
        end
      end

      if found then
        assert(removedIndices[i] == nil)
        removedIndices[i] = 1
      end
    end
    assert(#removedIndices==#validNames,"Valid size mismatch " .. #removedIndices .. " " .. #validNames)

    for k,v in pairs(removedIndices) do
      self.vtext:insert(textTokenVec[k])
      self.vcontent:insert(textContentVec[k])
      self.vimage:insert(imageEmbVec[k])
      self.vname:insert(imageNameVec[k])
      self.vclass:insert(imageClassVec[k])
      self.vlabel:insert(imageLabelVec[k])
    end
    
    self.text = tds.Vec()
    self.image = tds.Vec()
    self.label = tds.Vec()
    self.name = tds.Vec()
    self.class =  tds.Vec()
    self.content =  tds.Vec()

    self.class2Text = tds.Hash()
    for k,v in pairs(labelMapping) do
      store = tds.Vec()
      self.class2Text[v] = store
    end

    for i=1,#imageEmbVec do
      if removedIndices[i] == nil then
        self.text:insert(textTokenVec[i])
        self.content:insert(textContentVec[i])
        self.image:insert(imageEmbVec[i])
        self.label:insert(imageLabelVec[i])
        self.name:insert(imageNameVec[i])
        self.class:insert(imageClassVec[i])
        self.class2Text[imageLabelVec[i]]:insert(textTokenVec[i])
      end
    end
  end

  if validFile=="" then
    self.text = textTokenVec
    self.content = textContentVec
    self.image = imageEmbVec
    self.label = imageLabelVec
    self.name = imageNameVec
    self.class = imageClassVec
    self.class2Text = tds.Hash()
    for k,v in pairs(labelMapping) do
      store = tds.Vec()
      self.class2Text[v] = store
    end
    for i=1,#imageEmbVec do
      self.class2Text[imageLabelVec[i]]:insert(textTokenVec[i])
    end
  end

  local totaltokens = 0
  for index,value in pairs(self.text) do
    totaltokens = totaltokens +  value:size()[1]
  end
  self.totaltokens = totaltokens
  self.nsamples = #self.text

  io.write(string.format('done\n--> number of samples = %d\n--> total number of tokens = %d\n',
    self.nsamples, self.totaltokens)); io.flush()
  io.write(string.format('--> number of classes = %d\n', self.nclass)); io.flush()
  io.write(string.format('--> maximum document length = %d\n', self.maxlength)); io.flush()
  if validFile~="" then
    local f = 0
    assert(#self.vtext == #self.vlabel, 'size mismatch')
    assert(#self.vtext == #self.vimage, 'size mismatch')
    io.write(string.format('--> number of valid samples = %d\n', #self.vlabel)); io.flush()
    for index,name in pairs(self.vname) do
      for ii,nn in pairs(self.name) do
        if name == nn then
          f = f + 1
        end
      end
    end
    assert(f==0, f)
  end
end

function Data:nb_class()
  return self.nclass
end

function Data:max_length()
  return self.maxlength
end

-- function Data:ntokens()
--   return self.totaltokens
-- end

function Data:shuffle()
  local textTokenVec = tds.Vec()
  local imageEmbVec = tds.Vec()
  local imageLabelVec = tds.Vec()
  local newIndices = torch.randperm(self.nsamples)
  for i=1,newIndices:size()[1] do
    textTokenVec:insert(self.text[newIndices[i]])
    imageEmbVec:insert(self.image[newIndices[i]])
    imageLabelVec:insert(self.label[newIndices[i]])
  end
  assert(#textTokenVec==#imageEmbVec)
  assert(#textTokenVec==#imageLabelVec)
  self.text=textTokenVec
  self.image=imageEmbVec
  self.label=imageLabelVec
end


function Data:size()
  return self.nsamples
end

function Data:valid_size()
  return #self.vlabel
end

function Data:random_sample()
  local idx = torch.random(self.nsamples)
  return self.image[idx], self.text[idx], self.label[idx]
end

function Data:valid_sample(idx)
  return self.vimage[idx], self.vtext[idx], self.vlabel[idx]
end

function Data:get_by_postID(postID, nNegatives)
  for i=1,#self.name do
      if self.name[i] == postID then
        return self:sample_with_negatives(i, nNegatives)
      end
    end
end

function Data:selectNegativeSamples(label, nNegatives)
  local mask = torch.ByteTensor(self.nclass):fill(1)
  mask[label] = 0
  local indices = torch.range(1,self.nclass)
  local others = indices:maskedSelect(mask)
  local selectedIndicesFromOthers = torch.multinomial(others, nNegatives, false)
  assert((#selectedIndicesFromOthers)[1]==nNegatives, (#selectedIndicesFromOthers)[1] .. " ")
  local retVal = {}
  for i=1,nNegatives do
    classIndex = others[selectedIndicesFromOthers[i]]
    assert(classIndex~=label)
    texts = self.class2Text[classIndex]
    index = torch.random(1,#texts)
    -- TODO: check if random is not the same. 
    retVal[i] = texts[index]
  end
  return retVal
end

function Data:indexToName(ind)
  return self.rLabelMapping[ind]
end

function Data:valid_sample_with_negatives(idx, nNegatives)
  assert(nNegatives < self.nclass)
  local image = self.vimage[idx]
  local positive = self.vtext[idx]
  local label = self.vlabel[idx]
  local negatives = self:selectNegativeSamples(label,nNegatives)
  table.insert(negatives,1,positive)
  return image,negatives,label
end

function Data:sample(idx)
  return self.image[idx], self.text[idx], self.label[idx]
end

function Data:sample_for_joint_vectors(idx)
  return self.image[idx], self.text[idx], self.class[idx], self.name[idx]
end

function Data:getIdandContent(idx) 
  return self.name[idx], self.class[idx], self.content[idx]
end

function Data:sample_with_negatives(idx, nNegatives)
  assert(nNegatives < self.nclass)
  local image = self.image[idx]
  local positive = self.text[idx]
  local label = self.label[idx]
  local negatives = self:selectNegativeSamples(label,nNegatives)
  table.insert(negatives,1,positive)
  return image, negatives, label
end

function Data:sample_for_vectors(idx)
  local image = self.image[idx]
  local positive = self.text[idx]
  local class = self.class[idx]
  local name = self.name[idx]
  local negatives = {}
  table.insert(negatives,1,positive)
  return image, negatives, class, name
end

