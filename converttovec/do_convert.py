
import os
import config
def convert():
    os.chdir(config.FOLDER_ABS + '/converttovec')
    os.system('th get_embeddings.lua -inception model -model '+ config.CURRENT_FOLDER+'/categorize/new_flickr,epoch=400,lib=cudnn,lock=t,nbiter=400  -data '+config.CURRENT_FOLDER+'/converttovec/data/train')
    print 'finish convert'

def predict_byimage():
    os.chdir(config.FOLDER_ABS + '/converttovec')
    os.system('th predict_lua.lua -inception model -model ' + config.CURRENT_FOLDER + '/categorize/new_flickr,epoch=400,lib=cudnn,lock=t,nbiter=400  -data ' + config.CURRENT_FOLDER + '/converttovec/data/train -gpu 0')
    print 'finish predict by image'