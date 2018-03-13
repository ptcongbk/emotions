require 'torch'
local opts={}

function opts.load(dir)
  local optfile = dir .. '/opts'
  if not paths.filep(optfile) then
    error('no options file into ' .. dir)
  end
  local opt = {}
  for line in io.lines(optfile) do
    local k,v = line:match("(%S+)\t(.*)")
    opt[k] = v
  end
  return opt
end

function opts.save(params, outdir)
  local fout = io.open(outdir .. '/opts','w')
  for k,v in pairs(params) do
    fout:write(string.format("%s\t%s\n", k, v))
  end
  fout:close()
end

function opts.get(arg)
  local cmd = torch.CmdLine()
  cmd:text()
  cmd:text('Emotion classification by combining text and image')

  cmd:text('Input options:')
  cmd:option('-vocab', '', 'file containing the target vocab')
  cmd:option('-text', '', 'directory containing the training text')
  cmd:option('-image', '', 'directory containing the training image')
  cmd:option('-pr', '', 'directory containing the pretrained word vectors')
  cmd:option('-valid', '', 'file containing validation ids')
  cmd:option('-data', 'reddit', 'dataset [\'reddit\',\'flickr\']')

  cmd:text()
  cmd:text('Model options:')
  cmd:option('-mode', 'early', 'fusion mode [\'early\',\'joint\',\'joint_single\']')
  cmd:option('-seed', 1111, 'seed')
  cmd:option('-pooling', 'avg', 'pooling function [\'avg\',\'max\']')
  cmd:option('-jointpooling', 'avg', 'joint pooling function [\'avg\',\'max\']')
  cmd:option('-lowrank', 0, 'whether to factorize the classifier matrix')
  cmd:option('-dropout', 0, 'dropout probability')
  cmd:option('-scratch', 0, 'whether to fine-tune the word vectors')
  cmd:option('-lr', 0.01, 'learning rate')
  cmd:option('-decay', false, 'learning rate decay')
  cmd:option('-lrUpdateRate', 100, 'number of sample for learning rate update, used only when decay is true')
  cmd:option('-dim', 200, '#dimension of the word vectors')
  cmd:option('-epoch', 5, 'number of epoch')
  cmd:option('-epochsz', 100000, 'epoch size, used only when decay is false')
  cmd:option('-lib', 'nn', 'torch library for nn [\'nn\';\'cunn\';\'cudnn\']')  
  cmd:option('-gpu', 1, 'set gpu device id')
  cmd:option('-graph', 0, 'Using nngraph?')
  cmd:option('-dropClass', 0, 'Use dropout for classification only')
  cmd:option('-nNegatives', 3, 'Number of negative samples')
  cmd:option('-nllweight', 1, 'Weight of the CrossEntropyCriterion')
  cmd:option('-posweight', 1, 'Weight of the criterion for positive input')
  cmd:option('-negweight', 1, 'Weight of the criterion for negative input')
  cmd:option('-distance', 'pairwise', 'distance type [\'pairwise\',\'cosine\',\'dot\']')
  cmd:option('-lnorm', 1, 'PairwiseDistance norm')
  cmd:option('-ratioCriterion', 0, 'Use DistanceRatioCriterion')
  cmd:option('-softMargin', 0, 'Use SoftMarginCriterion')
  cmd:option('-stop', 'acc', 'early stopping condition [\'acc\',\'dist\']')

  cmd:option('-textweight', 1, 'Weight of the single text CrossEntropyCriterion')
  cmd:option('-imageweight', 1, 'Weight of the single image CrossEntropyCriterion')


  cmd:text()
  cmd:text('Output options:')
  cmd:option('-dir', '.', 'subdirectory to save the stuff')
  cmd:option('-prefix', 'refining', 'prefix for the directory')
  cmd:text()

  local opt = cmd:parse(arg or {})

  -- add commandline specified options
  opt.save = paths.concat(opt.dir,opt.prefix)
  -- print(opt.save)
  -- add date/time
  -- opt.save = paths.concat(opt.save, '' .. os.date():gsub(' ',''))
  os.execute('mkdir -p ' .. opt.save)
  -- save options into file
  opts.save(opt, opt.save)

  return opt
end
return opts
