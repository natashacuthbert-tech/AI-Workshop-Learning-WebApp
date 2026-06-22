from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.user import User
from backend.models.workshop import Workshop
from backend.models.registration import Registration
from backend.models.speaker import Speaker
from backend.models.blog import Blog

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
@router.get("/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):
    return {
        "total_users": db.query(User).count(),
        "total_workshops": db.query(Workshop).count(),
        "total_registrations": db.query(Registration).count(),
        "total_speakers": db.query(Speaker).count(),
        "total_blogs": db.query(Blog).count()
    }