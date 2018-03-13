require 'torch'
require 'xlua'
--local debugger = require('fb.debugger')

torch.setdefaulttensortype('torch.FloatTensor')
local data = dofile('data.lua')
local network = dofile('network.lua')
--------------------------------------------------------------------------------
-- options
cmd = torch.CmdLine()
cmd:text()
cmd:text('Get embeddings for testing images')
cmd:text()
cmd:text()
cmd:text('Misc options:')
cmd:option('-model', '', 'path to the tuned inception model')
cmd:option('-inception', '', 'where to find the inception model')
cmd:option('-data', '', 'path to gold dataset')
cmd:option('-train', 'test', 'train or test data')
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
cmd:log(rundir .. '/embeddings.log', params)
--------------------------------------------------------------------------------
-- load data
local d = data()
if params.train == "test" then
  d:load_test(params.data)
else
  d:load_train(params.data, 0)
end
params.nclass = d:nclass()
--------------------------------------------------------------------------------
-- load network
local net = network(params)
--------------------------------------------------------------------------------
-- log error made by the model
local function create_log_file(filename)
  local f = io.open(filename, 'w')
  -- write header
  -- f:write('filename,label')
  -- for i=1,params.nclass do
  --  f:write(',' .. d:class_name(i))
  -- end
  -- f:write('\n')
  return f
end

local function print_log(fstream, filename,label,pred)
  local out = filename .. ',' .. label
  assert(pred:size(1)==1)
  pred:resize(pred:size(2))
  for i=1,pred:size(1) do
	out = out .. ',' .. string.format('%f', pred[i])
  end
  fstream:write(out .. '\n')
end

local name = "image_" .. params.train .. ".emb"
local ferr = create_log_file(rundir .. '/' .. name)
local it=0
--------------------------------------------------------------------------------
-- dectection in images
--------------------------------------------------------------------------------
local function get_embeddings(model, sampler)
  local label = sampler:label()
  -- loop over images
  for idx=1,sampler:size() do
    local pred = model:get_embedding(sampler[idx])
    print_log(ferr, sampler:filename(idx),d:class_name(label), pred)
  end
end
-- testing gold dataset
print('now generating embeddings')
local n = 0
for i=params.nclass,1,-1 do
  print(string.format('# Embeddings for %s', d:class_name(i)))
  local sampler = d:sample(i, params.train)
  get_embeddings(net, sampler)
  print(string.format('# Finish generating embeddings for %s', d:class_name(i)))
  n = n + sampler.size()
end
ferr:close()
