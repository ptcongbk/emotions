require 'torch'
require 'nn'
local tds = require 'tds'
torch.setdefaulttensortype('torch.FloatTensor')

local modeldir = arg[1] -- path to the trained model
print("Model dir " .. modeldir)
local opts = paths.dofile('opts.lua')
local params = opts.load(modeldir)

-- loading target word vocabulary
print (params.vocab)
paths.dofile('vocab.lua')
local vocab = Vocab(params.vocab)
local vocabsz = vocab:size()

-- loading dataset
paths.dofile('data.lua')
local data = Data(params.text .. '/ltext_test.tok', params.image .. '/limage_test.emb', vocab, "",params.data)

local checkFile = params.image .. '/image_test.emb'
local checkText = params.text .. '/text_test.tok'

local textTokenVec = tds.Vec()
local t={}
for line in io.lines(checkText) do 
  for w in line:gmatch("%S+") do 
	 local idx = vocab:idx(w)
	 if idx ~= nil then
	      table.insert(t, idx)
	 end
  end
end
textTokenVec:insert(torch.IntTensor(t))

local imageEmbVec = tds.Vec()
for line in io.lines(checkFile) do

    local t2 = {}
    local tokens = line:split(',')
    for index,value in ipairs(tokens) do 
       if index > 2 then
	local number = tonumber(value)
	if number ~= nil then
	    table.insert(t2, number)
	end
      end
    end
    if #t > 0 then
	imageEmbVec:insert(torch.FloatTensor(t2))
    end

 end
 -- creating model
if params.mode == "early" then
  paths.dofile('model_early.lua')
elseif params.mode == "joint" then
  paths.dofile('model_joint.lua')
else 
paths.dofile('model_joint_single.lua')
end
local model = Model(params.save)
local result = model:predict_getall(imageEmbVec[1], textTokenVec[1])
file = io.open('result.txt', "w")
file:write(tostring(result))
print(result)

