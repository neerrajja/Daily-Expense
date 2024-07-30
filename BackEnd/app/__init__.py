from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS  # Import CORS
from config import Config
db = SQLAlchemy()
migrate = Migrate()
api = Api()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    api.init_app(app)

    CORS(app)  # Enable CORS for all routes

    from app import routes, models
    app.register_blueprint(routes.bp)

    return app
