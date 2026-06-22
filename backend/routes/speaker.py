from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.speaker import Speaker
from backend.schemas.speaker import SpeakerCreate

router = APIRouter(prefix="/speakers", tags=["Speakers"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_speaker(speaker: SpeakerCreate, db: Session = Depends(get_db)):
    new_speaker = Speaker(
        name=speaker.name,
        title=speaker.title,
        bio=speaker.bio
    )

    db.add(new_speaker)
    db.commit()
    db.refresh(new_speaker)

    return {
        "message": "Speaker created successfully",
        "speaker": {
            "id": new_speaker.id,
            "name": new_speaker.name,
            "title": new_speaker.title,
            "bio": new_speaker.bio
        }
    }


@router.get("/")
def get_speakers(db: Session = Depends(get_db)):
    speakers = db.query(Speaker).all()

    return {
        "speakers": [
            {
                "id": speaker.id,
                "name": speaker.name,
                "title": speaker.title,
                "bio": speaker.bio
            }
            for speaker in speakers
        ]
    }