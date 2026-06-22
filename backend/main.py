from fastapi import FastAPI
from backend.routes.users import router as user_router
from backend.routes import auth
from backend.database import Base, engine
from backend.models.user import User
from backend.routes import profile
from backend.routes import dashboard
from backend.routes import workshop

app = FastAPI(
    title="AI Workshop Learning WebApp",
    version="1.0.0"
)
from backend.models.workshop import Workshop
Base.metadata.create_all(bind=engine)

app.include_router(user_router, prefix="/users", tags=["Users"])
app.include_router(auth.router)
app.include_router(profile.router)
app.include_router(dashboard.router)
app.include_router(workshop.router)

@app.get("/")
def home():
    return {"message": "AI Workshop Learning WebApp API is running"}