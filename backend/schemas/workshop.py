from pydantic import BaseModel


class WorkshopCreate(BaseModel):
    title: str
    description: str
    date: str


class WorkshopResponse(BaseModel):
    id: int
    title: str
    description: str
    date: str