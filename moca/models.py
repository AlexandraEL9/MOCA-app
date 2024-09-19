from moca import db
from datetime import datetime

# table for categories


class Category(db.Model):
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    category_name = db.Column(
        db.String(20),
        unique=True,
        nullable=False
    )
    recipes = db.relationship(
        "Recipe",
        backref="category",
        cascade="all, delete",
        lazy=True
    )
    image_url = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        return f'<Category {self.category_name}>'


class Recipe(db.Model):
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    recipe_name = db.Column(
        db.String(100),
        nullable=False
    )
    image_url = db.Column(
        db.String(200),
        nullable=False
    )  # Only store file paths
    description = db.Column(db.Text)
    ingredients = db.Column(db.Text)
    instructions = db.Column(db.Text)
    category_id = db.Column(
        db.Integer,
        db.ForeignKey('category.id'),
        nullable=False
    )

    def __repr__(self):
        return f'<Recipe {self.recipe_name}>'
