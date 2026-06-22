from fastapi import APIRouter
from backend.schemas.user import UserCreate

router = APIRouter()

@router.post("/register")
def register_user(user: UserCreate):
    return {
        "message": "User registered successfully",
        "user": user
    }