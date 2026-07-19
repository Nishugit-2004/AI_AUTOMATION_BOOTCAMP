from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import HTTPException
from fastapi import File

import shutil
import os

from graph.graph_builder import graph

from utils.logger import logger

from models import (
    ChatRequest,
    ChatResponse,
    ResumeAnalysisResponse,
    ResumeScoreResponse,
)
from services.chat_service import ChatService
from services.resume_score_service import ResumeScoreService

from storage.session_store import session_store

router = APIRouter()
chat_service = ChatService()
resume_score_service = ResumeScoreService()
@router.get("/")
def home():

    return {
        "message": "AI Resume Reviewer API"
    }
    
@router.post("/resume/analyze")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: UploadFile = File(...)
):

    if not resume.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Resume must be a PDF."
        )

    if not job_description.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Job Description must be a PDF."
        )

    # Create uploads directory using an absolute path
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    UPLOAD_DIR = os.path.join(BASE_DIR, "..", "uploads")
    UPLOAD_DIR = os.path.abspath(UPLOAD_DIR)

    os.makedirs(UPLOAD_DIR, exist_ok=True)

    print("Current Working Directory:", os.getcwd())
    print("Base Directory:", BASE_DIR)
    print("Upload Directory:", UPLOAD_DIR)
    print("Uploads Exists:", os.path.exists(UPLOAD_DIR))

    resume_path = os.path.join(UPLOAD_DIR, resume.filename)
    job_description_path = os.path.join(UPLOAD_DIR, job_description.filename)

    with open(resume_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    with open(job_description_path, "wb") as buffer:
        shutil.copyfileobj(job_description.file, buffer)

    print("Resume saved to:", resume_path)
    print("JD saved to:", job_description_path)

    try:

        state = {
            "resume_path": resume_path,
            "job_description_path": job_description_path,
        }

        result = graph.invoke(state)

        session_id = session_store.create_session(result)

        return {
            "session_id": session_id,
            "resume": result["resume"].model_dump(),
            "job_description": result["jd"].model_dump(),
            "match": result["match"].model_dump(),
            "ats": result["ats"].model_dump(),
        }

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    except Exception as e:

        logger.exception("Resume analysis failed")

        raise HTTPException(
            status_code=500,
            detail="Internal Server Error"
        )

    finally:

        if os.path.exists(resume_path):
            os.remove(resume_path)

        if os.path.exists(job_description_path):
            os.remove(job_description_path)


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):

    data = session_store.get_session(request.session_id)

    if data is None:
        raise HTTPException(
            status_code=404,
            detail="Session not found."
        )

    result = chat_service.answer_question(
        resume=data["resume"],
        jd=data["jd"],
        match=data["match"],
        ats=data["ats"],
        question=request.question,
    )
    
    print("RESULT =", result)
    print("TYPE =", type(result))
    print("CONTENT =", result.content)
    print("CONTENT TYPE =", type(result.content))

    if isinstance(result.content, list):
        answer = ""

        for item in result.content:
            if isinstance(item, dict):
                if item.get("type") == "text":
                    answer += item.get("text", "")
            else:
                # Handles LangChain TextContentBlock objects
                if getattr(item, "type", None) == "text":
                    answer += getattr(item, "text", "")

    else:
        answer = str(result.content)

    return ChatResponse(
        answer=answer
    )
    
    
@router.get(
    "/resume/score/{session_id}",
    response_model=ResumeScoreResponse,
)
async def get_resume_score(session_id: str):

    data = session_store.get_session(session_id)

    if data is None:
        raise HTTPException(
            status_code=404,
            detail="Session not found."
        )

    score = resume_score_service.evaluate(
        resume=data["resume"],
        jd=data["jd"],
    )

    return score
        
  
    
