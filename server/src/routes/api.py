from fastapi import APIRouter
from src.endpoints import auth_endp,predict_endp

router = APIRouter()
router.include_router(auth_endp.router)
router.include_router(predict_endp.router)
