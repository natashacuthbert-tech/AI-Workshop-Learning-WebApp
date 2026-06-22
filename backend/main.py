from fastapi import FastAPI
from backend.routes.users import router as user_router

app = FastAPI(
    title="AI Workshop Learning WebApp",
    version="1.0.0"
)

app.include_router(user_router, prefix="/users", tags=["Users"])

@app.get("/")
def home():
    return {"message": "AI Workshop Learning WebApp API is running"}
from backend.routes import auth
app.include_router(auth.router)