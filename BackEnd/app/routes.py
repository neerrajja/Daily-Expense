from flask import Blueprint, jsonify, request
from app.models import db, User, Expense

bp = Blueprint('api', __name__)

@bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    print('Received data for user creation:', data)  # Debugging line
    required_fields = ['email', 'name', 'mobile_number']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing field: {field}'}), 400

    user = User(
        email=data['email'],
        name=data['name'],
        mobile_number=data['mobile_number']
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({'id': user.id}), 201

@bp.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify({
        'email': user.email,
        'name': user.name,
        'mobile_number': user.mobile_number
    })

@bp.route('/expenses', methods=['POST'])
def add_expense():
    data = request.get_json()
    required_fields = ['description', 'total_amount', 'split_method', 'splits', 'user_id']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing field: {field}'}), 400

    expense = Expense(
        description=data['description'],
        total_amount=data['total_amount'],
        split_method=data['split_method'],
        splits=data['splits'],
        user_id=data['user_id']
    )
    db.session.add(expense)
    db.session.commit()
    return jsonify({'id': expense.id}), 201

@bp.route('/expenses/user/<int:user_id>', methods=['GET'])
def get_user_expenses(user_id):
    expenses = Expense.query.filter_by(user_id=user_id).all()
    return jsonify([{
        'description': exp.description,
        'total_amount': exp.total_amount,
        'split_method': exp.split_method,
        'splits': exp.splits
    } for exp in expenses])

@bp.route('/expenses', methods=['GET'])
def get_all_expenses():
    expenses = Expense.query.all()
    return jsonify([{
        'description': exp.description,
        'total_amount': exp.total_amount,
        'split_method': exp.split_method,
        'splits': exp.splits
    } for exp in expenses])
