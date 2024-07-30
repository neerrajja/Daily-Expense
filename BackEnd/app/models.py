from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(64), nullable=False)
    mobile_number = db.Column(db.String(15), nullable=False)
    expenses = db.relationship('Expense', backref='user', lazy=True)

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(256))
    total_amount = db.Column(db.Float, nullable=False)
    split_method = db.Column(db.String(20), nullable=False)
    splits = db.Column(db.JSON, nullable=False)  # Stores splits in JSON format
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
