from pymongo import MongoClient
from sklearn.externals import joblib
import config
import sys
import os

# Import model multi classify
clf = joblib.load(os.path.join(config.APP_STATIC, 'gbr_multi_label.pkl'))

# create client connection
client = MongoClient()

# connect to database
db = client[sys.argv[1]]

# get collections
colls = db[sys.argv[2]]

# create cursor
cursor = colls.find()

# update labels
for entry in cursor:
    try:
        labels = []
        if "labels" not in entry:
            predicted = clf.predict([entry["text"]])[0]
            for i in range(len(predicted)):
                if predicted[i] == 1:
                    labels.append(config.CATEGORY_LIST[i])
            colls.update_one(
                {"_id": entry["_id"]}, {
                    "$set": {
                        "labels": labels
                    }
                }
            )
    except:
        pass
