import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
if os.path.exists("env.py"):
    import env  # noqa


app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False # Add this line

db = SQLAlchemy(app)

# Ensure this is added
from flask_migrate import Migrate
migrate = Migrate(app, db)

from moca import routes  # noqa

import moca.routes
import moca.models