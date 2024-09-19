import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

if os.path.exists("env.py"):
    import env  # noqa

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # Add this line

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import routes and models at the end to avoid circular imports
import moca.routes  # noqa
import moca.models  # noqa
