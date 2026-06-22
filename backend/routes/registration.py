from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.models.registration import Registration
from backend.models.workshop import Workshop
from backend.services.token_service import verify_access_token

router = APIRouter(prefix="/registrations", tags=["Registrations"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/workshops/{workshop_id}")
def register_for_workshop(
    workshop_id: int,
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    payload = verify_access_token(token)

    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    user_id = payload.get("user_id")

    workshop = db.query(Workshop).filter(Workshop.id == workshop_id).first()

    if not workshop:
        raise HTTPException(status_code=404, detail="Workshop not found")

    existing_registration = db.query(Registration).filter(
        Registration.user_id == user_id,
        Registration.workshop_id == workshop_id
    ).first()

    if existing_registration:
        raise HTTPException(status_code=400, detail="Already registered for this workshop")

    new_registration = Registration(
        user_id=user_id,
        workshop_id=workshop_id
    )

    db.add(new_registration)
    db.commit()
    db.refresh(new_registration)

    return {
        "message": "Registered for workshop successfully",
        "registration": {
            "id": new_registration.id,
            "user_id": new_registration.user_id,
            "workshop_id": new_registration.workshop_id
        }
    }


@router.get("/me")
def get_my_registrations(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    payload = verify_access_token(token)

    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    user_id = payload.get("user_id")

    registrations = db.query(Registration).filter(
        Registration.user_id == user_id
    ).all()

    return {
        "registrations": [
            {
                "id": registration.id,
                "user_id": registration.user_id,
                "workshop_id": registration.workshop_id
            }
            for registration in registrations
        ]
    }