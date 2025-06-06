# DevOps Assignment – Two-Tier Web Application Deployment

## 🏗️ Architecture Overview

This is a monorepo structured DevOps assignment involving:
- `frontend/`: A Next.js application
- `backend/`: A Python (FastAPI/Flask) application

Both will be containerized and deployed on AWS using:
- Docker
- Terraform
- GitHub Actions (CI/CD)
- AWS ECS, ALB, CloudWatch, and other services

## 🧪 Branching Strategy

We follow a Git-based branching strategy:

- `main`: Stable, production-ready code
- `develop`: Ongoing development (merged from feature branches)
- `feature/*`: For individual features or fixes (e.g., `feature/dockerize-backend`)
- `ci/*`: For CI/CD specific updates
- All pull requests must be reviewed before merging into `develop` or `main`

## 🔧 Setup Instructions (To Be Updated)

Instructions to run and deploy the applications will be added after Docker and Terraform setup.

---

