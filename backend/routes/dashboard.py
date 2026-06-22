from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.user import User

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_dashboard(db: Session = Depends(get_db)):
    registered_users = db.query(User).count()

    return {
        "message": "Welcome to the AI Workshop Dashboard",
        "total_workshops": 0,
        "upcoming_workshops": 0,
        "registered_users": registered_users
    }