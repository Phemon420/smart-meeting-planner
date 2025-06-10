from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import routing

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routing.router, prefix="", tags=["Home"])