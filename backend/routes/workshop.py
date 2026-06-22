from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.workshop import Workshop
from backend.schemas.workshop import WorkshopCreate

router = APIRouter(
    prefix="/workshops",
    tags=["Workshops"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_workshop(workshop: WorkshopCreate,
                    db: Session = Depends(get_db)):
    new_workshop = Workshop(
        title=workshop.title,
        description=workshop.description,
        date=workshop.date
    )

    db.add(new_workshop)
    db.commit()
    db.refresh(new_workshop)

    return {
        "message": "Workshop created successfully",
        "workshop": {
            "id": new_workshop.id,
            "title": new_workshop.title,
            "description": new_workshop.description,
            "date": new_workshop.date
        }
    }


@router.get("/")
def get_workshops(db: Session = Depends(get_db)):
    workshops = db.query(Workshop).all()

    return workshops