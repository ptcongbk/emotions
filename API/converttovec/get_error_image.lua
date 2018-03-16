require 'torch'

local logfile = arg[1]
local rundir = paths.dirname(logfile) .. '/error'
os.execute('mkdir -p ' .. rundir)
for line in io.lines(logfile) do
  local file,res,pred = line:match('(%S+)[.]jpg (%S+) (.*)')
  if file ~= nil then
    pred = pred:gsub(' ','_')
    os.execute('cp ' .. file .. '.jpg ' .. rundir .. '/' .. res .. '_' .. pred .. '.jpg')
  end
end
os.execute('tar -cvzf ' .. rundir .. '.tar.gz ' .. rundir )
