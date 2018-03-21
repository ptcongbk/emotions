require 'torch'
require 'xlua'
torch.setdefaulttensortype('torch.FloatTensor')
local data = dofile('data.lua')
local network = dofile('network.lua')
--------------------------------------------------------------------------------
-- options
cmd = torch.CmdLine()
cmd:text()
cmd:text('Testing image classifier')
cmd:text()
cmd:text()
cmd:text('Misc options:')
cmd:option('-model', '', 'path to the tuned inception model')
cmd:option('-inception', '', 'where to find the inception model')
cmd:option('-data', '', 'path to gold dataset')
cmd:option('-lib', 'nn', 'nn library')
cmd:option('-gpu', 1, 'set gpu device id')

local params = cmd:parse(arg)
params.inference = true
params.retrain = params.model
if params.inception == '' then
  params.inception = params.model
end
local rundir = params.model
-- create log file
cmd:log(rundir .. '/gold_test.log', params)
--------------------------------------------------------------------------------
-- load data
local d = data()
d:load_test(params.data)
params.nclass = d:nclass()
--------------------------------------------------------------------------------
-- load network
local net = network(params)
--------------------------------------------------------------------------------
-- log error made by the model
local function create_log_file(filename)
  local f = io.open(filename, 'w')
  -- write header
  f:write('filename label')
  for i=1,params.nclass do
    f:write(' ' .. d:class_name(i))
  end
  f:write('\n')
  return f
end
local function print_log(fstream, filename, label, pred)
  local out = filename .. ' ' .. label
  for i=1,pred:size(1) do
    out = out .. ' ' .. string.format('%.2g', pred[i])
  end
  fstream:write(out .. '\n')
end
local ferr = create_log_file(rundir .. '/gold_test.err')
local fgood = create_log_file(rundir .. '/gold_test.good')
local it=0
--------------------------------------------------------------------------------
-- dectection in images
--------------------------------------------------------------------------------
local function prediction(model, sampler)
  local acc = 0
  local label = sampler:label()
  -- loop over images
  for idx=1,sampler:size() do
    local pred = model:predict(sampler[idx])
    local maxval,maxidx = pred:max(1)
    if maxidx[1] == label then
      acc = acc + 1
      print_log(fgood, sampler:filename(idx), d:class_name(label), pred)
    else
      print_log(ferr, sampler:filename(idx), d:class_name(label), pred)
    end
  end
  return acc
end
-- testing gold dataset
print('now testing')
local microavg, macroavg, n = 0, 0, 0
for i=1,params.nclass do
  local sampler = d:sample(i, 'test')
  local acc = prediction(net, sampler)
  print(string.format('# accuracy for %s = %.5f', d:class_name(i), acc/sampler:size()))
  microavg = microavg + acc
  n = n + sampler.size()
  macroavg = macroavg + acc/sampler:size()
end
microavg = microavg/n
macroavg = macroavg/params.nclass
print(string.format('# micro average = %.5f', microavg))
print(string.format('# macro average = %.5f', macroavg))
ferr:close()
fgood:close()
