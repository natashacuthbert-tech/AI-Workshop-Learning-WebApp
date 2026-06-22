from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.session import SessionModel
from backend.models.workshop import Workshop
from backend.schemas.session import SessionCreate

router = APIRouter(prefix="/sessions", tags=["Sessions"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_session(session: SessionCreate, db: Session = Depends(get_db)):
    workshop = db.query(Workshop).filter(Workshop.id == session.workshop_id).first()

    if not workshop:
        raise HTTPException(status_code=404, detail="Workshop not found")

    new_session = SessionModel(
        workshop_id=session.workshop_id,
        title=session.title,
        speaker=session.speaker,
        start_time=session.start_time,
        end_time=session.end_time
    )

    db.add(new_session)
    db.commit()
    db.refresh(new_session)

    return {
        "message": "Session created successfully",
        "session": {
            "id": new_session.id,
            "workshop_id": new_session.workshop_id,
            "title": new_session.title,
            "speaker": new_session.speaker,
            "start_time": new_session.start_time,
            "end_time": new_session.end_time
        }
    }


@router.get("/")
def get_sessions(db: Session = Depends(get_db)):
    sessions = db.query(SessionModel).all()

    return {
        "sessions": [
            {
                "id": session.id,
                "workshop_id": session.workshop_id,
                "title": session.title,
                "speaker": session.speaker,
                "start_time": session.start_time,
                "end_time": session.end_time
            }
            for session in sessions
        ]
    }