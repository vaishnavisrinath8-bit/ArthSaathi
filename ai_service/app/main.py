# ai_service/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Existing routers
#from app.routes import ocr_routes, scam_routes  # your existing imports

# ── ADD THESE ──
from app.routes.chat_routes import router as chat_router
from app.routes.speech_routes import router as speech_router

app = FastAPI(
    title="ArthSaathi AI Service",
    description="Multilingual financial intelligence for rural India",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Existing routers
# app.include_router(ocr_routes.router)
# app.include_router(scam_routes.router)

# ── ADD THESE ──
app.include_router(chat_router)
app.include_router(speech_router)


@app.get("/health")
async def health():
    return {"status": "ok", "service": "ArthSaathi AI"}