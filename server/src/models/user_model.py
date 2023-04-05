from pydantic import BaseModel,EmailStr
from fastapi import Form

class User(BaseModel):
    email: EmailStr = Form(...)
    fullname: str = Form(...)
    password: str = Form(...)
    mobile: str = Form(...)
    otp: str = Form(default="")
    is_verified: str = Form(default=False)

class UserLogin(BaseModel):
    mobile: str = Form(...)
    password: str = Form(...)
    otp: str = Form(default="")