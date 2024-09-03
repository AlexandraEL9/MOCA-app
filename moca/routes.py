import os
from flask import render_template, request, redirect, url_for, flash, send_from_directory
from moca import app, db
from moca.models import Category, Recipe
from werkzeug.utils import secure_filename

# Set the upload folder and allowed extensions
UPLOAD_FOLDER = os.path.join(app.root_path, 'static', 'uploads')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route("/")
def home():
    recipes = Recipe.query.order_by(Recipe.id).all()
    return render_template("recipes.html", recipes=recipes)

@app.route('/search')
def search_recipes():
    query = request.args.get('query')
    category_id = request.args.get('category')
    if query:
        recipes = Recipe.query.filter(
            Recipe.recipe_name.ilike(f'%{query}%') |
            Recipe.description.ilike(f'%{query}%')
        ).all()
    elif category_id:
        recipes = Recipe.query.filter_by(category_id=category_id).all()
    else:
        recipes = []

    category = Category.query.get(category_id) if category_id else None

    return render_template('search_results.html', recipes=recipes, query=query, category=category)

@app.route("/categories")
def categories():
    categories = Category.query.order_by(Category.category_name).all()
    return render_template("categories.html", categories=categories)

@app.route("/add_category", methods=["GET", "POST"])
def add_category():
    if request.method == "POST":
        category_name = request.form.get("category_name")
        image_url = request.form.get("image_url")
        image_file = request.files.get("image_file")

        if not category_name:
            flash("Category name is required.", "error")
            return redirect(url_for("add_category"))

        if Category.query.filter_by(category_name=category_name).first():
            flash("Category already exists!", "error")
            return redirect(url_for("add_category"))

        if image_file and allowed_file(image_file.filename):
            filename = secure_filename(image_file.filename)
            image_file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image_file.save(image_file_path)
            image_url = url_for('uploaded_file', filename=filename)
        
        category = Category(category_name=category_name, image_url=image_url)
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
        flash("Category updated successfully!", "success")
        return redirect(url_for("categories"))
    return render_template("edit_category.html", category=category)

@app.route("/delete_category/<int:category_id>", methods=["POST"])
def delete_category(category_id):
    category = Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
    flash("Category deleted successfully!", "success")
    return redirect(url_for("categories"))

@app.route("/add_recipe", methods=["GET", "POST"])
def add_recipe():
    categories = Category.query.order_by(Category.category_name).all()
    
    if request.method == "POST":
        recipe_name = request.form.get("recipe_name")
        image_file = request.files.get("image_file")
        description = request.form.get("description")
        ingredients = request.form.get("ingredients")
        instructions = request.form.get("instructions")
        category_id = request.form.get("category_id")

        if not recipe_name or not category_id or not ingredients or not instructions:
            flash("Please fill in all required fields.", "error")
            return redirect(url_for("add_recipe"))

        image_url = None
        if image_file and allowed_file(image_file.filename):
            filename = secure_filename(image_file.filename)
            image_file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image_file.save(image_file_path)
            image_url = url_for('uploaded_file', filename=filename)

        recipe = Recipe(
            recipe_name=recipe_name,
            image_url=image_url,
            description=description,
            ingredients=ingredients,
            instructions=instructions,
            category_id=category_id
        )

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
        recipe.description = request.form.get("description")
        recipe.ingredients = request.form.get("ingredients")
        recipe.instructions = request.form.get("instructions")
        recipe.category_id = request.form.get("category_id")

        image_file = request.files.get("image_file")

        if image_file and allowed_file(image_file.filename):
            filename = secure_filename(image_file.filename)
            image_file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image_file.save(image_file_path)
            recipe.image_url = url_for('uploaded_file', filename=filename)

        db.session.commit()
        flash("Recipe updated successfully!", "success")
        return redirect(url_for("home"))

    return render_template("edit_recipe.html", recipe=recipe, categories=categories)

@app.route("/delete_recipe/<int:recipe_id>", methods=["POST"])
def delete_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    try:
        db.session.delete(recipe)
        db.session.commit()
        flash('Recipe deleted successfully', 'success')
    except Exception as e:
        db.session.rollback()
        flash(f'Error deleting recipe: {str(e)}', 'error')
    return redirect(url_for("home"))

@app.route('/recipe/<int:recipe_id>')
def view_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    return render_template('view_recipe.html', recipe=recipe)
