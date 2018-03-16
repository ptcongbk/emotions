require 'torch'
require 'xlua'
torch.setdefaulttensortype('torch.FloatTensor')
local data = dofile('data.lua')
local network = dofile('network.lua')
--------------------------------------------------------------------------------
-- options
cmd = torch.CmdLine()
cmd:text()
cmd:text('Fine-tuning image classifier for nudity')
cmd:text()
cmd:text()
cmd:text('Misc options:')
cmd:option('-lib', 'nn', 'torch library for nn')
cmd:option('-lr', 0.001, 'learning rate')
cmd:option('-gpu', 1, 'set gpu device id')
cmd:option('-nhu', 0, 'the number of hidden units')
cmd:option('-inception', 'model', 'where to find the inception model')
cmd:option('-data', '', 'directory to find the data')
cmd:option('-save', 'exp', 'subdirectory to save the stuff')
cmd:option('-exp', 'classify', 'name of the experiment (prefix for save)')
cmd:option('-seed', 1111, 'seed')
cmd:option('-nbiter', 100, 'number of iterations')
cmd:option('-epoch', 100, 'epoch size')
cmd:option('-mbsz', 32, 'mini-batch size')
cmd:option('-imgsz', 320, 'image size')
cmd:option('-retrain', '', 'path to a pre-trained model')
cmd:option('-lock', false, 'if true, only train the classification layer')
cmd:option('-distortion', 1, 'if bottleneck, number of distorted training images')
--------------------------------------------------------------------------------
-- setup
local params = cmd:parse(arg)
torch.manualSeed(params.seed)
local rundir = cmd:string(params.exp, params, {inception=true,data=true,exp=true,save=true,retrain=true})
if params.save ~= '.' then
   rundir = params.save .. '/' .. rundir
end
params.rundir = rundir
os.execute('mkdir -p ' .. rundir)
-- create log file
cmd:log(rundir .. '/log', params)
--------------------------------------------------------------------------------
-- load data
local d = data(params.imgsz)
d:load_train(params.data)
params.nclass = d:nclass()
--------------------------------------------------------------------------------
-- load network
local net = network(params)
if params.lock then -- set bottleneck
  d:bottleneck(params.data, net:inception(), params.mbsz, params.distortion)
end
--------------------------------------------------------------------------------
-- training
local timer = torch.Timer()
-- output files
local fcost = io.open(rundir..'/cost','w')
local ftrainacc = io.open(rundir..'/train_acc','w')
local fvalidacc = io.open(rundir..'/valid_acc','w')
local best = 0
-- training iterations
for it=1, params.nbiter do
  print('[iteration #'..it..']')
  timer:reset()
  local cost, trainacc = 0, 0
  -- do one epoch
  for e=1,params.epoch do
    xlua.progress(e,params.epoch)
    local x, y
    if params.lock then
      x, y = d:bottleneck_train_batch()
    else
      x, y = d:train_sample(params.mbsz)
    end
    -- feed forward
    local acc, err = net:feedforward(x, y)
    cost = cost + err
    trainacc = trainacc + acc
  end
  trainacc = trainacc/(params.epoch*params.mbsz)
  cost = cost/params.epoch
  fcost:write(cost..'\n'); fcost:flush()
  print(string.format('# current cost = %.5f', cost))
  ftrainacc:write(trainacc..'\n'); ftrainacc:flush()
  print(string.format('# train accuracy = %.2f%%', trainacc*100))
  print(string.format('# ex/s = %.2f', (params.epoch*params.mbsz)/timer:time().real))
  collectgarbage()
  print('--> now validation')
  local macroavg, microavg, ntotal = 0, 0, 0
  for i=1,params.nclass do
    local acc, n = 0
    if lock then
      local sampler = d:sample(i, 'valid')
      n = sampler:size()
      local y = torch.IntTensor(1):fill(class)
      for i=1,n do
        local sample_acc = net:feedforward(sampler[i], y, true)
        acc = acc + sample_acc
      end
    else
      local x, y = d:bottleneck_valid_batch(i)
      n = y:size(1)
      acc = net:feedforward(x, y, true)
    end
    print(string.format('# current acc for %s = %.2f%%', d:class_name(i), acc/n*100))
    ntotal = ntotal + n
    microavg = microavg + acc
    macroavg = macroavg + acc/n
  end
  microavg = microavg/ntotal
  macroavg = macroavg/params.nclass
  print(string.format('# micro average = %.2f%%', microavg*100))
  print(string.format('# macro average = %.2f%%', macroavg*100))
  fvalidacc:write(microavg .. ' ' .. macroavg .. '\n'); fvalidacc:flush()
  if macroavg>best then
    best = macroavg
    net:save(params.rundir)
  end
end
fcost:close()
ftrainacc:close()
fvalidacc:close()
