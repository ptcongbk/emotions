import config
import os
import re
from flask import render_template, request, flash
from wtforms import Form, TextAreaField, validators
from sklearn.externals import joblib
import tweepy
from threading import Thread
from models import *
import sys
import json
from werkzeug.utils import secure_filename
from categorize import do_categorize
from converttovec import do_convert
from flask import send_file
import urllib
from categorizeText import do_categorize_text
import string
import random
thread = None

clf = joblib.load(os.path.join(config.APP_STATIC, 'gbr_multi_label.pkl'))
mlb = joblib.load(os.path.join(config.APP_STATIC, 'mlb.pkl'))
auth = tweepy.AppAuthHandler(config.CONSUMER_KEY, config.CONSUMER_SECRET)
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)
SEARCH_TERM = ['Great Barrier Reef', 'GBR', 'greatbarrierreef']


def predict(sentence):
    predicted = clf.predict(sentence)
    inverse_pred = mlb.inverse_transform(predicted)
    return inverse_pred


def background_thread():
    """Example of how to send server generated events to clients."""
    # while True:
    tweet_count = 0
    if not api:
        message = "Can't Authenticate to Twitter"
        return message
    else:

        while True:
            try:
                if config.max_id <= 0:
                    if not config.sinceId:
                        new_tweets = api.search(q=SEARCH_TERM, count=config.tweetsPerQry)
                    else:
                        new_tweets = api.search(q=SEARCH_TERM, count=config.tweetsPerQry,
                                                since_id=config.sinceId)
                else:
                    if not config.sinceId:
                        new_tweets = api.search(q=SEARCH_TERM, count=config.tweetsPerQry,
                                                max_id=str(config.max_id - 1))
                    else:
                        new_tweets = api.search(q=SEARCH_TERM, count=config.tweetsPerQry,
                                                max_id=str(config.max_id - 1),
                                                since_id=config.sinceId)
                if not new_tweets:
                    print("No more tweets found")
                    break
                for item in new_tweets:
                    print(item.text.encode("utf-8"))
                    user_id = item.author.id
                    user_name = item.author.name
                    user_screen_name = item.author.screen_name
                    user_loc = item.author.location
                    user_created = item.author.created_at
                    user = User.query.filter_by(id=user_id).first()
                    if user is None:
                        user = User(id=user_id, name=user_name,
                                    screen_name=user_screen_name,
                                    created_at=user_created, location=user_loc)
                    tweet_id_str = item.id_str
                    tweet_created = item.created_at
                    tweet_text = item.text
                    tweet_text = re.sub(r'http\S+', ' ', tweet_text, re.IGNORECASE)
                    tweet_text = re.sub(r'[^\w\d\s]', ' ', tweet_text)
                    tweet_text = re.sub(r'\s+', ' ', tweet_text)

                    category = predict([tweet_text])
                    category_names = []
                    for i in range(len(category[0])):
                        category_names.append(Category.query.filter_by(id=int(category[0][i] - 1)).first().name)
                    category_result = ', '.join(category_names).strip()

                    tweet = Tweet(id_str=tweet_id_str, user_id=user.id, text=tweet_text, created_at=tweet_created,
                                  category=category_result)
                    db.session.add(user)
                    db.session.add(tweet)
                    db.session.commit()
                tweet_count += len(new_tweets)
                print("Downloaded {0} tweets".format(tweet_count))
                config.max_id = new_tweets[-1].id
            except tweepy.TweepError as e:
                # Just exit if any error
                print("some error : " + str(e))
                print('Disconnect with twitter')
                break


def start_thread_in_views():
    global thread
    if thread is None:
        thread = Thread(target=background_thread)
        thread.daemon = True
        thread.start()

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

def manual_test():
    form = ReusableForm(request.form)
    print(form.errors)
    if request.method == 'POST':
        sentence = request.form['sentence']
        if form.validate():
            # Classify sentence, display result and store in db
            category = predict([sentence])
            category_names = []
            for i in range(len(category[0])):
                print category[0]
                sys.stdout.flush()
                category_names.append(Category.query.filter_by(id=int(category[0][i] - 1)).first().name)
            new_tweet = Tweet(user_id=0, text=sentence, category=', '.join(category_names).strip())
            db.session.add(new_tweet)
            db.session.commit()
        else:
            flash('All the form fields are required. ')
    return form


class ReusableForm(Form):
    sentence = TextAreaField('Sentence:', validators=[validators.required()])


@app.route('/', methods=['GET', 'POST'])
@app.route('/<int:page>', methods=['GET', 'POST'])
def list_all(page=1):
    form = manual_test()
    # start_thread_in_views()
    tweets = Tweet.query.order_by(Tweet.id.desc()).paginate(page, config.TWEETS_PER_PAGE, error_out=False)
    return render_template(
        'list.html',
        categories=Category.query.all(),
        tweets=tweets,
        form=form
    )


@app.route('/tweets', methods=['GET'])
def get_tweets():
    page = int(request.args.get("page"))
    if not page:
        page = 1
    result = []
    tweets = Tweet.query.order_by(Tweet.id.desc()).paginate(page, config.TWEETS_PER_PAGE, error_out=False)
    for x in tweets.items:  # Works
        result.append({"text": x.text, "category": x.category})
    json_data = json.dumps(result)
    return json_data


@app.route("/labels", methods=['GET', "POST"])
def predict_category():
    sentence = request.args.get("sentence") if request.method == "GET" else request.form["sentence"]
    if not sentence:
        return ""
    category = clf.predict([sentence])
    category_names = {}
    for i in range(len(category[0])):
        label = Category.query.filter_by(id=i).first().name
        category_names[str(label)] = category[0][i]
    return str(category_names)


@app.route('/image', methods=['GET', 'POST'])
def predict_image():
    print 'come here'
    if request.method == 'POST':
        f = request.files['uploadFile']
        text = request.form['text']
        print text
        with open(config.FOLDER_ABS + '/categorizeText/test.txt', "w") as text_file:
            text_file.write(text)
        with open(config.FOLDER_ABS + '/categorize/newflickrdata/text_test.tok', "w") as text_file:
            text_file.write(text)
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], 'image.jpg'))
        return run_algorithm()

@app.route('/sample_image', methods=['GET', 'POST'])
def predict_image_sample():
    if request.method == 'POST':

        url = request.form['url']
        print url
        text = request.form['text']
        print text
        with open(config.FOLDER_ABS + '/categorizeText/test.txt', "w") as text_file:
            text_file.write(text)
        with open(config.FOLDER_ABS + '/categorize/newflickrdata/text_test.tok', "w") as text_file:
            text_file.write(text)
        urllib.urlretrieve(url, os.path.join(app.config['UPLOAD_FOLDER'], 'image.jpg'))
        return run_algorithm()

def run_algorithm():
    textResults = do_categorize_text.categorize()
    do_convert.predict_byimage()
    do_convert.convert()
    do_categorize.categorize()
    results = []
    resultsForImage = []
    with open(config.FOLDER_ABS + '/categorize/result.txt') as f:
        lines = f.readlines()
        lines = lines[:-1]
        for i in lines:
            results.append(float(i))
    with open(config.FOLDER_ABS + '/converttovec/result.txt') as f:
        lines = f.readlines()
        lines = lines[:-1]
        for i in lines:
            resultsForImage.append(float(i))

    with open(config.FOLDER_ABS + '/categorize/result.txt', "w") as text_file:
        text_file.write(''),
    with open(config.FOLDER_ABS + '/converttovec/result.txt', "w") as text_file:
        text_file.write('')
    finalresult = {"results": results, "imageResults": resultsForImage, "textResults": textResults}
    return json.dumps(finalresult)


@app.route('/get_image')
def get_image():
    filename = ''.join(random.choice(string.ascii_uppercase + string.digits))
    return send_file(os.path.join(app.config['UPLOAD_FOLDER'], 'image.jpg'),attachment_filename='image'+ filename +'.jpg', mimetype='image/jpg')


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True, host='0.0.0.0')
