from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_message():
    response = client.get("/api/message")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello from backend"}
