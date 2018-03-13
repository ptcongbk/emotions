# Retrain Inception's Final Layer for New Categories

## Creating a Set of Training Images
For training to work well, you should gather at least a hundred photos of each kind of object you want to recognize. The more you can gather, the better the accuracy of your trained model is likely to be. You also need to make sure that the photos are a good representation of what your application will actually encounter.

Then, you have to create a directory containing all images, where each subdirectory contains images from one category.  
Only jpeg images are currently accepted. It is best to name subdirectories with meaningful category names.

Images must be divided into two different datasets: `train` and `test`. During training, 10% of `train` will remain as validation set.

Here is an example:
```
data\
  train\
    category1\
      image1.jpg
      image2.jpg
      ...
    category2\
      image1.jpg
      image2.jpg
      ...
    .
    .
    .
    categoryN\
      image1.jpg
      image2.jpg
      ...
  test\
    category1\
      image1.jpg
      image2.jpg
      ...
    category2\
      image1.jpg
      image2.jpg
      ...
    .
    .
    .
    categoryN\
      image1.jpg
      image2.jpg
      ...
```

## Bottlenecks

The first phase analyzes all the images on disk and calculates the bottleneck values for each of them. 'Bottleneck' is an informal term we often use for the layer just before the final output layer that actually does the classification. This penultimate layer has been trained to output a set of values that's good enough for the classifier to use to distinguish between all the classes it's been asked to recognize. That means it has to be a meaningful and compact summary of the images, since it has to contain enough information for the classifier to make a good choice in a very small set of values. The reason our final layer retraining can work on new classes is that it turns out the kind of information needed to distinguish between all the 1,000 classes in ImageNet is often also useful to distinguish between new kinds of objects.

Because every image is reused multiple times during training and calculating each bottleneck takes a significant amount of time, it speeds things up to cache these bottleneck values on disk so they don't have to be repeatedly recalculated.

## Training

Once the bottlenecks are complete, the actual training of the top layer of the network begins.

Here is the command for training a new model:
```
th train.lua [options]
```

#### Training options
* `lock`: boolean. If it is set to false, all layers will be tuned during training. Training will be much slower as the bottlenecks are not used. It can be useful to retrain all layers to get better accuracy on harder classification problems. Obviously, we greatly recommend to use GPU when unlocking all layers.
* `gpu`: int. GPU card id, 1 by default. For no GPU usage, it has to be set to 0.
* `lib`: string. Name of the torch neural network library. `nn` is used by default. With GPU, `cunn` can be used. If installed, we recommend to use `cudnn`.
* `nbiter`: int. Number of iterations. Default value is 100.
* `epoch`: int. Epoch size for each iteration. Default value is 100.
* `seed`: int. Seed of the experiment. Default value is 1111.

#### Hyper-parameters options
* `lr`: float. Learning rate. Default value is 0.001.
* `nhu`: int. Number of hidden units. Default is 0, which means that only one layer is added for retraining (linear classification).
* `mbsz`: int. Mini-batch size. Default value is 32.
* `imgsz`: int. Size of the image. It is only useful for distortion. Default value is 320. Image size of the inception model is 299, so `imgsz` must be greater than 299.
* `distortion`: int. If bottleneck is on, it is the number of distorted training images. Default value is 1.

#### I/O options
* `inception`: string. Path to the inception model.
* `data`: string. Path to the training dataset.
* `save`: string. Path to the output directory (where to save stuff).
* `retrain`: string. Path to a pre-trained model.
* `exp`: string. Name of the experiment which becomes the prefix of output directory. Default value is `classify`.


#### Example with GPU
```
th train.lua -data path_to_traindir -inception model -save path_to_expdir -exp expname -gpu 1 -lib cudnn -epoch 100 -mbsz 32 -imgsz 320 -lock
```

#### Example for retraining a saved model
```
th train.lua -data path_to_traindir -retrain path_to_expdir -save path_to_newexpdir -exp newexpname -gpu 1 -lib cudnn -epoch 100 -mbsz 32 -imgsz 320 -lock
```

#### Example without GPU
```
th train.lua -data path_to_traindir -inception model -save path_to_expdir -exp expname -gpu 0 -lib nn -epoch 100 -mbsz 32 -imgsz 320 -lock
```

## Testing

Once you have a trained model,  you can test it with the following command:
```
th test.lua [options]
```

#### Options
* `data`: string. Path to the testing dataset.
* `model`: string. Path to a trained model.
* `inception`: string. Path to the inception layers. Not needed when the initial inception model has been retrained. 
* `gpu`: int. GPU card id, 1 by default. For no GPU usage, it has to be set to 0.
* `lib`: string. Name of the torch neural network library. `nn` is used by default. With GPU, `cunn` can be used. If installed, we recommend to use `cudnn`.

This program outputs the accuracy per category along with the micro and macro average. It also creates two log files:
* `gold_text.good`. It contains paths to well-classified images with the probability distribution over the categories;
* `gold_text.err`. It contains paths to misclassified images with the probability distribution over the categories.

#### Example with GPU
```
th test.lua -data path_to_testdir -model path_to_model -gpu 1 -lib cudnn
```

### Visualizing the errors

Once you have tested your trained model, you could be interested in visualizing what images have been misclassified.

Given a log file `gold_text.err`, this command will create a new directory `error` that will contain all the misclassified images:
```
th get_error_images.lua  path_to_errlogfile
```
Each image is named with the predicted category, plus the probabilities over all categories.
At the end, an archive is also created in order to easily transfer the images into your laptop :)
