require 'torch'
require 'xlua'
torch.setdefaulttensortype('torch.FloatTensor')
local data = dofile('data.lua')
local network = dofile('network.lua')
--------------------------------------------------------------------------------
-- options
cmd = torch.CmdLine()
cmd:text()
cmd:text('Get prediction probabilities for testing images')
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
cmd:log(rundir .. '/predict_prob.log', params)
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
  f:write('filename,label')
  for i=1,params.nclass do
    f:write(',' .. d:class_name(i))
  end
  f:write('\n')
  return f
end

local function print_log(fstream, filename, label, pred)
  local out = filename .. ',' .. label
  for i=1,pred:size(1) do
    out = out .. ',' .. string.format('%.2g', pred[i])
  end
  fstream:write(out .. '\n')
end

local ferr = create_log_file(rundir .. '/predict_prob.ret')
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
    print_log(ferr, sampler:filename(idx), d:class_name(label), pred)
  end
  return acc
end
-- testing gold dataset
print('now testing')
local n = 0
for i=1,params.nclass do
  local sampler = d:sample(i, 'test')
  local acc = prediction(net, sampler)
  print(string.format('# Finish testing for %s', d:class_name(i)))
  n = n + sampler.size()
end
ferr:close()
