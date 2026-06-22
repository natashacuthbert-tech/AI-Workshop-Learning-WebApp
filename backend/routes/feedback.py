from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.feedback import Feedback
from backend.schemas.feedback import FeedbackCreate

router = APIRouter(
    prefix="/feedback",
    tags=["Feedback"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_feedback(
    feedback: FeedbackCreate,
    db: Session = Depends(get_db)
):
    new_feedback = Feedback(
        user_id=feedback.user_id,
        workshop_id=feedback.workshop_id,
        rating=feedback.rating,
        comment=feedback.comment
    )

    db.add(new_feedback)
    db.commit()
    db.refresh(new_feedback)

    return {
        "message": "Feedback submitted successfully",
        "feedback_id": new_feedback.id
    }


@router.get("/")
def get_feedback(db: Session = Depends(get_db)):
    feedback = db.query(Feedback).all()

    return feedback