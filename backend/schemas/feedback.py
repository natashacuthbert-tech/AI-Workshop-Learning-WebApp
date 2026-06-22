from pydantic import BaseModel


class FeedbackCreate(BaseModel):
    user_id: int
    workshop_id: int
    rating: int
    comment: str