from flask import render_template, request, redirect, url_for, flash
from moca import app, db
from moca.models import Category, Recipe


@app.route("/")
def home():
    return render_template("recipes.html")

@app.route("/categories")
def categories():
    categories = list(Category.query.order_by(Category.category_name).all())
    return render_template("categories.html", categories=categories)

@app.route("/add_category", methods=["GET", "POST"])
def add_category():
    if request.method == "POST":
        category_name = request.form.get("category_name")
        image_url = request.form.get("image_url")

        # Validate that a category name is provided
        if not category_name:
            flash("Category name is required.", "error")
            return redirect(url_for("add_category"))

        # Check if the category already exists
        existing_category = Category.query.filter_by(category_name=category_name).first()
        if existing_category:
            flash("Category already exists!", "error")
            return redirect(url_for("add_category"))
        
        # Create a new Category instance
        category = Category(category_name=category_name, image_url=image_url)
        
        # Add the new category to the database
        db.session.add(category)
        db.session.commit()
        
        flash("Category added successfully!", "success")
        return redirect(url_for("categories"))

    return render_template("add_category.html")