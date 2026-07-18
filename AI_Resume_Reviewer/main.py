from fastapi import FastAPI

from api.routes import router

from middlewares.exception_handler import global_exception_handler
from middlewares.logging_middleware import LoggingMiddleware

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