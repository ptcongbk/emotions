require 'torch'
require 'nn'

local network={}
setmetatable(network,{
__call = function(self, params)

  if params.lib == 'cunn' then
    require 'cunn'
    cutorch.setDevice(params.gpu)
  elseif params.lib == 'cudnn' then
    require 'cunn'
    require 'cudnn'
    cutorch.setDevice(params.gpu)
  end

  local nhu = 2048 -- the last number of hidden units
  local inception_nb_layer = 30

  local function load_inception_model(path)
    if not paths.filep(path .. '/nn_layer_1.net') then
      error('inception model layers not found in ' .. path)
    end
    local net = nn.Sequential()
    -- load the first 30 layers of inception v3
    for i=1,inception_nb_layer do
      net:add(torch.load(path .. '/nn_layer_'..i..'.net'))
    end
    return net
  end

  local function load_logit_model(inputsz, nclass, retrain, inference)
    inference = inference or false
    local net
    if retrain ~= '' then
      if not paths.filep(retrain .. '/nn_classifier.net') then
        error('classifier layers not found in ' .. retrain)
      end
      net = torch.load(retrain .. '/nn_classifier.net')
    else
      net = nn.Sequential()
      if params.nhu>0 then -- non linear model
        net:add(nn.Linear(inputsz, params.nhu))
        net:add(nn.HardTanh())
        net:add(nn.Linear(params.nhu, nclass))
      else
        net:add(nn.Linear(inputsz, nclass))
      end
      net:add(nn.LogSoftMax())
    end
    if inference then -- replace LogSoftMax by SoftMax
      net:remove()
      net:add(nn.SoftMax())
    end
    return net
  end

  local path_to_inception = params.inception
  if params.retrain ~= '' and not params.lock and not params.inference then
    path_to_inception = params.retrain
  end
  local inception_net = load_inception_model(path_to_inception)
  local logit_net = load_logit_model(nhu, params.nclass, params.retrain, params.inference)
  local criterion = nn.ClassNLLCriterion()

  if (params.lib == 'cudnn' or params.lib == 'cunn') then
    inception_net:cuda()
    if not params.lock then
      logit_net:cuda()
      criterion:cuda()
    end
  end

  local methods = {}
  function methods:feedforward(input, target, valid)
    valid = valid or false
    if valid then
      logit_net:evaluate()
    else
      logit_net:training()
    end
    if not params.lock and (params.lib == 'cudnn' or params.lib == 'cunn') then
      if inception_net:type() ~= 'torch.CudaTensor' then
        inception_net:cuda()
      end
      if logit_net:type() ~= 'torch.CudaTensor' then
        logit_net:cuda()
      end
      if input:type() ~= 'torch.CudaTensor' then
        input = input:cuda()
      end
      if target ~= 'torch.CudaTensor' then
        target = target:cuda()
      end
    end
    local x
    if not params.lock then
      if valid then
        inception_net:evaluate()
      else
        inception_net:training()
      end
      x = inception_net:forward(input)
    else
      x = input
    end
    local pred = logit_net:forward(x)
    local _,label = pred:max(2)
    local err = nil
    if not valid then -- do backprop
      err = criterion:forward(pred, target)
      criterion:backward(pred,target)
      logit_net:updateGradInput(x, criterion.gradInput)
      logit_net:accUpdateGradParameters(x, criterion.gradInput, params.lr)
      if not params.lock then
        inception_net:updateGradInput(input, logit_net.gradInput)
        inception_net:accUpdateGradParameters(input, logit_net.gradInput, params.lr)
      end
    end
    return torch.eq(label:squeeze(), target):sum(), err
  end


  function methods:predict(input)
    inception_net:evaluate()
    logit_net:evaluate()
    if (params.lib == 'cunn' or params.lib == 'cudnn') and input:type() ~= 'torch.CudaTensor' then
      input = input:cuda()
      if inception_net:type() ~= 'torch.CudaTensor' then
        inception_net:cuda()
      end
      if logit_net:type() ~= 'torch.CudaTensor' then
        logit_net:cuda()
      end
    end
    local x = inception_net:forward(input)
    local pred = logit_net:forward(x)
    local maxval,maxidx = pred:max(2)
    return pred:squeeze()
  end

  function methods:get_embedding(input)
    inception_net:evaluate()
    if (params.lib == 'cunn' or params.lib == 'cudnn') and input:type() ~= 'torch.CudaTensor' then
      input = input:cuda()
      if inception_net:type() ~= 'torch.CudaTensor' then
        inception_net:cuda()
      end
    end
    local x = inception_net:forward(input)
    return x
  end

  function methods:save(rundir)
    local logit_net = logit_net:clearState()
    if logit_net:type() == 'torch.CudaTensor' then
      logit_net:float()
    end
    if not params.lock then
      local inception_net = inception_net:clearState()
      if inception_net:type() == 'torch.CudaTensor' then
        inception_net:float()
      end
      for i=1,#inception_net.modules do -- do not save logsoftmax layer
        local fout=torch.DiskFile(rundir .. '/nn_layer_'..i..'.net','w'):binary()
        fout:writeObject(inception_net.modules[i])
        fout:close()
      end
    end
    local fout=torch.DiskFile(rundir .. '/nn_classifier.net','w'):binary()
    fout:writeObject(logit_net)
    fout:close()
  end

  function methods:inception()
    return inception_net
  end

  return methods
end})

return network
