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
print(params.nclass)
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
local it = 0
--------------------------------------------------------------------------------
-- dectection in images
--------------------------------------------------------------------------------
local function prediction(model, sampler)
    local acc = 0
    local label = sampler:label()
    -- loop over images
    for idx = 1, sampler:size() do
        local pred = model:predict(sampler[idx])
        file = io.open('result.txt', "w")
        file:write(tostring(pred))
        local maxval, maxidx = pred:max(1)
        acc = maxval[1]
    end
    return acc
end

-- testing gold dataset
print('now testing')
local microavg, macroavg, n = 0, 0, 0
for i = 1, params.nclass do
    local sampler = d:sample(i, 'test')
    local acc = prediction(net, sampler)
    print(string.format('# accuracy for %s = %.5f', d:class_name(i), acc / sampler:size()))
    microavg = microavg + acc
    n = n + sampler.size()
    macroavg = macroavg + acc / sampler:size()
end
