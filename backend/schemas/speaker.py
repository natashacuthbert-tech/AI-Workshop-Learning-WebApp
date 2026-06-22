from pydantic import BaseModel


class SpeakerCreate(BaseModel):
    name: str
    title: str
    bio: str