from fastapi import FastAPI

from api.routes import router

from middlewares.exception_handler import global_exception_handler
from middlewares.logging_middleware import LoggingMiddleware
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI Resume Reviewer",
    version="1.0.0"
)

app.include_router(router)

app.add_exception_handler(
    Exception,
    global_exception_handler
)

app.add_middleware(
    LoggingMiddleware
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)