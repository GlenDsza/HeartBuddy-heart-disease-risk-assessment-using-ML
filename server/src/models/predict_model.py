from pydantic import BaseModel
from fastapi import Form

class PredictInput(BaseModel):
    age: str = Form(default="")
    sex: str = Form(default="")
    cp: str = Form(default="")
    trestbps: str = Form(default="")
    chol: str = Form(default="")
    fbs: str = Form(default="")
    restecg: str = Form(default="")
    thalach: str = Form(default="")
    exang: str = Form(default="")
    oldpeak: str = Form(default="")
    slope: str = Form(default="")
    ca: str = Form(default="")
    thal: str = Form(default="")
