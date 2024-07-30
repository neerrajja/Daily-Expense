import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'you-will-never-guess')
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:root@localhost/expenses_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
