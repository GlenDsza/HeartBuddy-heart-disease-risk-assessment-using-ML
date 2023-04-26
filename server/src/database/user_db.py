from pymongo import ASCENDING
from src.models.user_model import User,UserLogin
from src.establish_db_connection import database
from passlib.context import CryptContext


collection = database.Users
collection.create_index([("mobile", ASCENDING)], unique=True)
pwd_context = CryptContext(schemes=["bcrypt"],deprecated="auto")

def create_user(user: User):
    try:
        document = user.dict()
        document['password'] = pwd_context.hash(user.password)
        result = collection.insert_one(document)
        return result
    except Exception as e:
        print(e)
        return "Some Error Occurred"

def check_user(user: UserLogin,otp=None):
    try:
        document = collection.find_one({"mobile":user.mobile})
        if pwd_context.verify(user.password,document['password']):
            if otp != None:
                if otp == document['otp'] and document['otp']!="EXPIRED":
                    return document
                else:
                    {"ERROR":"INVALID OTP"}
            if document['is_verified']:
                return document
            return {"ERROR":"USER NOT VERIFIED"}
        else:
            return {"ERROR":"INVALID CREDENTIALS"}
    except Exception as e:
        print(e)
        return {"ERROR":"INVALID CREDENTIALS"}
    
def make_user_valid(mobile):
    try:
        document = collection.update_one({"mobile": mobile}, {"$set": {"otp":"EXPIRED","is_verified":True}})
        if(document.matched_count>0):
            return "SUCCESS"
        else:
            return "INVALID"
    except Exception as e:
        print(e)
        return "Some Error Occurred"

def update_otp(mobile,otp):
    try:
        document = collection.update_one({"mobile": mobile}, {"$set": {"otp":otp}})
        if(document.matched_count>0):
            return "SUCCESS"
        else:
            return "INVALID"
    except Exception as e:
        print(e)
        return "Some Error Occurred"

def update_history(history, mobile):
    try:
        document = collection.update_one({"mobile": mobile}, {"$push": {"history": history}})
        if(document.matched_count>0):
            return "SUCCESS"
        else:
            return "INVALID"
    except Exception as e:
        print(e)
        return "Some Error Occurred"

def get_history(mobile):
    try:
        document = collection.find_one({"mobile": mobile})
        return document['history']
    except Exception as e:
        print(e)
        return "Some Error Occurred"

def get_last_record(mobile):
    try:
        document = collection.find_one({"mobile": mobile})
        return document['history'][-1]
    except Exception as e:
        print(e)
        return "Some Error Occurred"