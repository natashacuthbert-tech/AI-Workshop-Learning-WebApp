from sqlalchemy import Column, Integer, String, ForeignKey

from backend.database import Base


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    workshop_id = Column(Integer, ForeignKey("workshops.id"))
    rating = Column(Integer)
    comment = Column(String)