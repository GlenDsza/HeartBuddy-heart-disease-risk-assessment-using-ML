from fastapi import  APIRouter
from src.models.predict_model import PredictInput
from src.database.user_db import update_history, get_history, get_last_record
import pandas as pd
import pickle
import os
import datetime


router = APIRouter(
    prefix="",
    tags=["Application"],
    responses={404: {"description": "Not found"}},
)

#gets the parent path and adds model path to it
LOG_MODEL_PATH = os.getcwd()+"\src\model.pkl"
print(LOG_MODEL_PATH)
@router.post("/predict")
async def predict_model(inp:PredictInput,mobile:str):
    try:
        temp = inp.dict()
        history = inp.dict()
        model = pickle.load(open(LOG_MODEL_PATH, "rb"))
        for key, value in temp.items():
            temp[key] = [float(value)]
        features = pd.DataFrame(temp)
        result = model.predict(features)
        result_prob = model.predict_proba(features)
        history['date'] = str(datetime.datetime.now())
        history['result'] = float(result_prob[0][0])
        update_history(history,mobile)
        return {"SUCCESS":True,"RESULT":int(result[0]), "PERCENTAGE":float(result_prob[0][0])}
    except Exception as e:
        print(e)
        return {"ERROR":"SOME ERROR OCCURRED"}


@router.post("/gethistory")
async def get_history_of_user(mobile:dict):
    try:
        result = get_history(mobile['mobile'])
        return {"SUCCESS":True,"RESULT":result}
    except Exception as e:
        print(e)
        return {"ERROR":"SOME ERROR OCCURRED"}


@router.post("/getlastrecord")
async def get_history_of_user(mobile:dict):
    try:
        result = get_last_record(mobile['mobile'])
        return {"SUCCESS":True,"RESULT":result}
    except Exception as e:
        print(e)
        return {"ERROR":"SOME ERROR OCCURRED"}
    