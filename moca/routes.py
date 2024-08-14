from flask import render_template
from moca import app, db
from moca.models import Category, Recipe


@app.route("/")
def home():
    return render_template("recipes.html")

@app.route("/categories")
def categories():
    return render_template("categories.html")