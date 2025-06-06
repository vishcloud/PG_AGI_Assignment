from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend!"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/message")
def get_message():
    return {"message": "Hello from backend"}