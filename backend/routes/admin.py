from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.user import User
from backend.models.workshop import Workshop
from backend.models.session import SessionModel
from backend.models.speaker import Speaker
from backend.models.blog import Blog
from backend.models.registration import Registration
from backend.models.feedback import Feedback

router = APIRouter(prefix="/admin", tags=["Admin"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/overview")
def get_admin_overview(db: Session = Depends(get_db)):
    return {
        "total_users": db.query(User).count(),
        "total_workshops": db.query(Workshop).count(),
        "total_sessions": db.query(SessionModel).count(),
        "total_speakers": db.query(Speaker).count(),
        "total_blogs": db.query(Blog).count(),
        "total_registrations": db.query(Registration).count(),
        "total_feedback": db.query(Feedback).count()
    }