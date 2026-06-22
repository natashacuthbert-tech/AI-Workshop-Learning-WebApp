from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.schemas.user import UserCreate
from backend.models.user import User
from backend.services.auth_service import hash_password

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(
        full_name=user.full_name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully",
        "user": {
            "id": new_user.id,
            "full_name": new_user.full_name,
            "email": new_user.email
        }
    }


@router.get("/")
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()

    return {
        "users": [
            {
                "id": user.id,
                "full_name": user.full_name,
                "email": user.email
            }
            for user in users
        ]
    }