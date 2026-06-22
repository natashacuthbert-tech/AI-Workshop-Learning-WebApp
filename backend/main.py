from fastapi import FastAPI

app = FastAPI(
    title="AI Workshop Learning WebApp",
    version="1.0.0"
)

@app.get("/")
def home():
    return {"message": "AI Workshop Learning WebApp API is running"}