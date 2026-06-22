from fastapi import APIRouter
from backend.schemas.user import UserCreate

router = APIRouter()

@router.post("/register")
def register_user(user: UserCreate):
    return {
        "message": "User registered successfully",
        "user": user
    }
@router.get("/")
def get_users():
    return {
        "users": [
            {
                "id": 1,
                "full_name": "Mitchell Harper",
                "email": "mitchell@example.com"
            }
        ]
    }