from fastapi import APIRouter
from backend.schemas.auth import UserLogin

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/login")
def login(user: UserLogin):
    return {
        "message": "Login successful",
        "email": user.email
    }