from fastapi import  APIRouter, HTTPException
from src.models.user_model import User,UserLogin
from src.database.user_db import create_user,check_user,make_user_valid,update_otp
import requests
from decouple import config
import math, random
 
def generateOTP() : 
    # Declare a digits variable 
    # which stores all digits
    digits = "0123456789"
    OTP = ""
   # length of password can be changed
   # by changing value in range
    for i in range(6) :
        OTP += digits[math.floor(random.random() * 10)]
    return OTP

# from passlib.context import CryptContext
router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
    responses={404: {"description": "Not found"}},
)

URL = "https://www.fast2sms.com/dev/bulkV2"
API_KEY = config("API_KEY")

@router.post("/signup")
async def signup(user : User):
    if user.email == "" or user.fullname == "" or user.password == "" or user.mobile=="":
        return {"ERROR":"MISSING PARAMETERS"}
    otp = generateOTP()
    requests.get(URL,params = {"authorization": API_KEY, "variables_values":otp,"route":"otp","numbers":user.mobile})
    user.otp = otp
    result = create_user(user)
    if result == "Some Error Occurred":
        return result
    else:
        return {"SUCCESS":"TRUE"}  

@router.post("/login")
async def login(user : UserLogin):
    if user.mobile == "" or user.password == "":
        return {"ERROR":"MISSING PARAMETERS"}
    
    result = check_user(user)
    if "ERROR" in result.keys():
        return result
    return {"mobile":result['mobile'],"fullname":result['fullname']}


@router.post("/getotp")
async def get_otp(user : UserLogin):
    if user.mobile == "" or user.password == "":
        return {"ERROR":"MISSING PARAMETERS"}
    result = check_user(user)
    if "ERROR" in result.keys():
        return result
    otp = generateOTP()
    requests.get(URL,params = {"authorization": API_KEY, "variables_values":otp,"route":"otp","numbers":user.mobile})
    if update_otp(user.mobile,otp)=="SUCCESS":
        return {"SUCCESS":"OTP SENT"}
    return {"ERROR":"SOME ERROR OCCURRED"}

@router.post("/checkotp")
async def check_otp(user : UserLogin):
    if user.mobile == "" or user.password == "":
        return {"ERROR":"MISSING PARAMETERS"}
    result = check_user(user,user.otp)
    
    if "ERROR" in result.keys():
        return result
    
    if make_user_valid(user.mobile) == "SUCCESS":
        return {"mobile":result['mobile'],"fullname":result['fullname']}
    else:
        return {"ERROR":"SOME ERROR OCCURED WHILE UPDATING THE USER STATE"}


