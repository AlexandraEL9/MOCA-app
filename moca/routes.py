from flask import render_template, request, redirect, url_for, flash
from moca import app, db
from moca.models import Category, Recipe


@app.route("/")
def home():
    recipes = list(Recipe.query.order_by(Recipe.id).all())
    return render_template("recipes.html", recipes=recipes)

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

@app.route("/edit_category/<int:category_id>", methods=["GET", "POST"])
def edit_category(category_id):
    category = Category.query.get_or_404(category_id)
    if request.method == "POST":
        category.category_name = request.form.get("category_name")
        db.session.commit()
        return redirect(url_for("categories") )
    return render_template("edit_category.html", category=category)

@app.route("/delete_category/<int:category_id>")
def delete_category(category_id):
    category = Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
    return redirect(url_for("categories"))

# Add a new recipe
@app.route("/add_recipe", methods=["GET", "POST"])
def add_recipe():
    categories = Category.query.order_by(Category.category_name).all()
    
    if request.method == "POST":
        recipe_name = request.form.get("recipe_name")
        image_url = request.form.get("image_url")
        description = request.form.get("description")
        ingredients = request.form.get("ingredients")
        instructions = request.form.get("instructions")
        category_id = request.form.get("category_id")

        # Validation
        if not recipe_name or not category_id or not ingredients or not instructions:
            flash("Please fill in all required fields.", "error")
            return redirect(url_for("add_recipe"))

        # Create a new Recipe instance
        recipe = Recipe(
            recipe_name=recipe_name,
            image_url=image_url,
            description=description,
            ingredients=ingredients,
            instructions=instructions,
            category_id=category_id
        )

        # Add the new recipe to the database
        db.session.add(recipe)
        db.session.commit()

        flash("Recipe added successfully!", "success")
        return redirect(url_for("home"))

    return render_template("add_recipe.html", categories=categories)

@app.route("/edit_recipe/<int:recipe_id>", methods=["GET", "POST"])
def edit_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    categories = Category.query.order_by(Category.category_name).all()

    if request.method == "POST":
        recipe.recipe_name = request.form.get("recipe_name")
        recipe.image_url = request.form.get("image_url")
        recipe.description = request.form.get("description")
        recipe.ingredients = request.form.get("ingredients")
        recipe.instructions = request.form.get("instructions")
        recipe.category_id = request.form.get("category_id")

        db.session.commit()
        flash("Recipe updated successfully!", "success")
        return redirect(url_for("home"))

    return render_template("recipes.html", recipe=recipe, categories=categories)

# Delete a recipe
@app.route("/delete_recipe/<int:recipe_id>")
def delete_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    db.session.delete(recipe)
    db.session.commit()
    flash("Recipe deleted successfully!", "success")
    return redirect(url_for("home"))

