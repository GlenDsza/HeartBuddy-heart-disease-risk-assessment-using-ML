from fastapi import  APIRouter
from src.models.predict_model import PredictInput
import pandas as pd
import pickle
import os

router = APIRouter(
    prefix="",
    tags=["Application"],
    responses={404: {"description": "Not found"}},
)

#gets the parent path and adds model path to it
LOG_MODEL_PATH = os.getcwd()+"\src\model.pkl"
print(LOG_MODEL_PATH)
@router.post("/predict")
async def predict_model(inp:PredictInput):
    try:
        temp = inp.dict()
        
        model = pickle.load(open(LOG_MODEL_PATH, "rb"))
        for key, value in temp.items():
            temp[key] = [int(value)]
        features = pd.DataFrame(temp)
        result = model.predict(features)
        result_prob = model.predict_proba(features)
        return {"SUCCESS":True,"RESULT":int(result[0]), "PERCENTAGE":float(result_prob[0][0])}
    except Exception as e:
        print(e)
        return {"ERROR":"SOME ERROR OCCURRED"}
