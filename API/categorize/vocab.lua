local Vocab = torch.class('Vocab')
local pl = require 'pl'

function Vocab:__init(vocabfile)
  if not paths.filep(vocabfile) then

    error(vocabfile .. ' does not exist')
  end
  print(vocabfile)
  local vocab = {}
  local vocabr = {}
  local vocabsz = 0
  io.write(string.format('[reading vocab in %s]... ', vocabfile)); io.flush()
  for line in io.lines(vocabfile) do
    local tokens = line:split(',')
    assert(#tokens==2,"#split is not 2")
    vocab[tokens[1]] = tonumber(tokens[2])
    vocabr[tonumber(tokens[2])] = tokens[1]
    vocabsz = vocabsz + 1
  end
  self.vocabsz = vocabsz
  io.write(string.format('done\n--> number of words = %d\n', self.vocabsz)); io.flush()
  self.vocab = vocab
  self.vocabr = vocabr
end

function Vocab:idx(word)
  if not type(word) == "string" then
    error('input is not a string')
  end
  return self.vocab[word]
end

function Vocab:word(idx)
  if not type(idx) == "number" then
    error('input is not a number')
  end
  if idx > 0 and idx <= self.vocabsz then
    return self.vocabr[idx]
  else
    error('word index is out of range')
  end
end

function Vocab:size()
  return self.vocabsz
end
