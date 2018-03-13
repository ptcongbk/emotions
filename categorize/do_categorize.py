
import os
import config
def categorize():
    os.chdir(config.FOLDER_ABS +'/categorize')
    os.system('th test.lua flickr-joint-scratch1-gpu-dr0.25-ld100/')
    print 'finish categorization'