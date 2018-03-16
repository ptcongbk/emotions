#!/bin/bash
# $1=datadir 
# $2=exp_images dir
# $3=config file dir
# $4=inception model dir
# $5=output dir
# $6=experiment name
# $7=class 1 name
# $8=class 2 name
# $9=class 3 name
DATA_DIR=`cd "$1"; pwd`
echo $2
EXP_IMAGE_DIR=`cd "$2"; pwd`
CONFIG_FILE_DIR=$(readlink -f "$3")
INCEPTION_DIR=`cd "$4"; pwd`
OUTPUT_DIR=`cd "$5"; pwd`
EXP_NAME="$6"
IMAGE="images"
TRAIN="train"
TEST="test"
COCO="coco"
NUM_TRAIN_COCO=0

# echo $CONFIG_FILE_DIR
# echo $INCEPTION_DIR
# echo $OUTPUT_DIR
# echo $EXP_NAME

############## Concatenate classes names ##############
shift 6
old_IFS=$IFS
IFS="_"
FOLDER_NAME="$*"
IFS=${old_IFS}
############## Create directories if not exists ##############
mkdir -p "$EXP_IMAGE_DIR""/data_""$FOLDER_NAME" && mkdir -p "$EXP_IMAGE_DIR""/data_""$FOLDER_NAME""/test" && mkdir -p "$EXP_IMAGE_DIR""/data_""$FOLDER_NAME""/train"

CLASS_LIST=${@:1}
for var in $CLASS_LIST
do
    if [ $var == $COCO ]
    then
        mkdir -p "$EXP_IMAGE_DIR""/data_""$FOLDER_NAME""/train/"$var
        mkdir -p "$EXP_IMAGE_DIR""/data_""$FOLDER_NAME""/test/"$var
    fi
done
echo "Created dictories"
############## Calculate number of training images to copy for coco ##############
for var in $CLASS_LIST
do
    if [ $var != $COCO ]
    then
        a=$(ls "$DATA_DIR"/"$IMAGE"/$var/"$TRAIN"/ | wc -l)
        (( NUM_TRAIN_COCO = $NUM_TRAIN_COCO + $a ))
    fi
done
# Number of training images for coco = average of others
(( NUM_TRAIN_COCO = $NUM_TRAIN_COCO/($#-1) ))
# echo $NUM_TRAIN_COCO
echo "Number of training images for coco calculated"
############## Copy images from data folder to newly-created folders ##############
for var in $CLASS_LIST
do
    if [ $var = $COCO ]
    then
        (cd "$DATA_DIR""/""$IMAGE""/"$var"/""$TRAIN" && a=(*) && for f in "${a[@]: -$NUM_TRAIN_COCO}"; do cp -- "$f" "$EXP_IMAGE_DIR""/data_""$FOLDER_NAME""/train/"$var/"$f"; done) 
        cp "$DATA_DIR"/"$IMAGE"/$var/"$TEST"/* "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"test"/$var
    else
        ln -sTf "$DATA_DIR"/"$IMAGE"/$var/"$TRAIN"/ "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"train"/$var
        ln -sTf "$DATA_DIR"/"$IMAGE"/$var/"$TEST"/ "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"test"/$var
        #cp "$DATA_DIR"/"$IMAGE"/$var/"$TRAIN"/* "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"train"/$var
        #cp "$DATA_DIR"/"$IMAGE"/$var/"$TEST"/* "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"test"/$var
    fi
done
echo "Images copied"
############## Load config parameter ##############
source $CONFIG_FILE_DIR

# echo $TH_GPU
# echo $TH_EPOCH
# echo $TH_IMGSZ
# echo $TH_LIB
# echo $TH_LOCK
# echo $TH_MBSZ

echo "Config loaded"
############## Train the model based on data in train folder ##############
DATE=$(date +%Y%m%d%H%M%S)
EXP_NAME=$EXP_NAME"_"$DATE
#echo $EXP_NAME
echo "Training"
echo

if [ $TH_LOCK -eq 1 ]
then
    th train.lua -data "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"train" -inception $INCEPTION_DIR -save $OUTPUT_DIR -exp $EXP_NAME -gpu $TH_GPU -lib $TH_LIB -epoch $TH_EPOCH -mbsz $TH_MBSZ -imgsz $TH_IMGSZ -lock
else
    th train.lua -data "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"train" -inception $INCEPTION_DIR -save $OUTPUT_DIR -exp $EXP_NAME -gpu $TH_GPU -lib $TH_LIB -epoch $TH_EPOCH -mbsz $TH_MBSZ -imgsz $TH_IMGSZ
fi

echo "Finish training"

############## Test the model ##############
OLD_DIR=$(pwd)
EXP_DIR_NAME=""
cd $OUTPUT_DIR/
shopt -s nullglob
for d in $EXP_NAME*/ ; do
    EXP_DIR_NAME="$d"
done 
cd $OLD_DIR
echo $EXP_DIR_NAME
pwd
th test.lua -data "$EXP_IMAGE_DIR"/"data_""$FOLDER_NAME"/"test" -model $OUTPUT_DIR/"$EXP_DIR_NAME" -inception $INCEPTION_DIR -gpu $TH_GPU -lib $TH_LIB
echo "Finish testing"
############## Visualize the errors ##############
th get_error_image.lua $OUTPUT_DIR/"$d"/gold_test.err