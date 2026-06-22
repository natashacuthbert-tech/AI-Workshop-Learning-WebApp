from sqlalchemy import Column, Integer, ForeignKey

from backend.database import Base


class Registration(Base):
    __tablename__ = "registrations"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    workshop_id = Column(Integer, ForeignKey("workshops.id"))