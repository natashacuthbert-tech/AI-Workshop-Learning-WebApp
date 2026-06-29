from fastapi import FastAPI
from backend.routes.users import router as user_router
from backend.routes import auth
from backend.database import Base, engine
from backend.models.user import User
from backend.routes import profile
from backend.routes import dashboard
from backend.routes import workshop
from backend.models.registration import Registration
from backend.routes import registration
from backend.models.speaker import Speaker
from backend.routes import speaker
from backend.models.blog import Blog
from backend.routes import blog
from backend.models.session import SessionModel
from backend.routes import session
from backend.models.feedback import Feedback
from backend.routes import feedback
from backend.routes import admin
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="AI Workshop Learning WebApp",
    version="1.0.0"
)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
from backend.models.workshop import Workshop
Base.metadata.create_all(bind=engine)

app.include_router(user_router, prefix="/users", tags=["Users"])
app.include_router(auth.router)
app.include_router(profile.router)
app.include_router(dashboard.router)
app.include_router(workshop.router)
app.include_router(registration.router)
app.include_router(speaker.router)
app.include_router(blog.router)
app.include_router(session.router)
app.include_router(feedback.router)
app.include_router(admin.router)
@app.get("/")
def home():
    return {"message": "AI Workshop Learning WebApp API is running"}