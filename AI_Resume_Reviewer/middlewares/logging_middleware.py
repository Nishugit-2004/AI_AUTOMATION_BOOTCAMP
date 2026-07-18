import time

from starlette.middleware.base import BaseHTTPMiddleware

from utils.logger import logger


class LoggingMiddleware(BaseHTTPMiddleware):

    async def dispatch(
        self,
        request,
        call_next
    ):

        start = time.time()

        response = await call_next(request)

        end = time.time()

        logger.info(

            f"{request.method} {request.url.path} "

            f"{round(end-start,2)} sec"

        )

        return response