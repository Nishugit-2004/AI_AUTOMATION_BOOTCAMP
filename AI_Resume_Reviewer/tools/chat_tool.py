from langchain.tools import StructuredTool
from pydantic import BaseModel

from services.chat_service import ChatService


class ChatInput(BaseModel):
    resume: dict
    jd: dict
    match: dict
    ats: dict
    question: str


service = ChatService()


def chat(
    resume,
    jd,
    match,
    ats,
    question,
):
    return service.answer_question(
        resume,
        jd,
        match,
        ats,
        question,
    )


chat_tool = StructuredTool.from_function(
    func=chat,
    name="Chat Tool",
    description="Answers recruiter questions using resume analysis.",
    args_schema=ChatInput,
)