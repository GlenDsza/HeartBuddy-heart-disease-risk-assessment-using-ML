from pymongo import MongoClient 
# from os import getenv

# USERNAME = getenv("PROJECTUSER")
# PASSWORD = getenv("PROJECTPASS")
# DB_URL = getenv("DB_URL")

# client = MongoClient(f"mongodb+srv://{USERNAME}:{PASSWORD}@{DB_URL}/?retryWrites=true&w=majority")

client = MongoClient("localhost:27017")
database = client.HeartDiseasePrediction
