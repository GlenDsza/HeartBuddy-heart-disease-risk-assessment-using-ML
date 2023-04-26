from pymongo import MongoClient 

from decouple import config

USERNAME = config("USER")
PASSWORD = config("PASSWORD")
DB_URL = config("DB_URL")

client = MongoClient(f"mongodb+srv://{USERNAME}:{PASSWORD}@{DB_URL}/?retryWrites=true&w=majority")
# client = MongoClient("localhost:27017")
database = client.HeartDiseasePrediction
