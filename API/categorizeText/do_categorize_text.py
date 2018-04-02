
import os
import config
import subprocess
def categorize():
    os.chdir(config.FOLDER_ABS + '/categorizeText')
    command = " ./fasttext predict-prob model.bin test.txt 8"
    p = subprocess.Popen(command, stdout=subprocess.PIPE, shell=True)
    labels, err = p.communicate()
    results = [0, 0, 0, 0, 0, 0, 0, 0]
    temps = labels.split()
    currentLabel = -1;
    for index, item in enumerate(temps):
        if index % 2 == 0:
            temp = item.replace("__label__", "")
            currentLabel = (int)(temp)
        if index % 2 == 1:
            results[currentLabel] = (float)(item)


    return results