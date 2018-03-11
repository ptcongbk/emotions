import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import config
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = config.UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///annotation.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.urandom(24)
db = SQLAlchemy(app)
