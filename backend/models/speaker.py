from sqlalchemy import Column, Integer, String

from backend.database import Base


class Speaker(Base):
    __tablename__ = "speakers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    title = Column(String, nullable=False)
    bio = Column(String, nullable=False)