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


do_convert.predict_byimage()