from pydantic import BaseModel


class SessionCreate(BaseModel):
    workshop_id: int
    title: str
    speaker: str
    start_time: str
    end_time: str