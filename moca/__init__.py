import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Load environment variables if env.py exists
if os.path.exists("env.py"):
    import env  # noqa

# Initialize the Flask app
app = Flask(__name__)

# Configure the app
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
# if else statment added for deploymnet
if os.environ.get("DEVELOPMENT") == "True":
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
else:
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize the database and migration
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import routes and models at the end to avoid circular imports
from moca import routes, models  # noqa
