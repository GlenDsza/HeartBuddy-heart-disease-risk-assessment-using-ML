from fastapi import APIRouter
from src.endpoints import auth_endp, features_endp

router = APIRouter()
router.include_router(auth_endp.router)
router.include_router(features_endp.router)
