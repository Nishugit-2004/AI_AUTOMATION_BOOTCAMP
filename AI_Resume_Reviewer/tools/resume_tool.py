from langchain_core.tools import tool

from services.resume_service import ResumeService

resume_service = ResumeService()


@tool
def analyze_resume_tool(resume_text: str):
    """
    Analyze resume text and return structured resume information.
    """

    return resume_service.summarize_resume(resume_text)