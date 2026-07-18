from langchain_core.tools import tool

from services.resume_service import ResumeService

resume_service = ResumeService()


@tool
def analyze_resume_tool(pdf_path: str):
    """
    Analyze a resume PDF and return structured resume information.
    """

    return resume_service.summarize_resume(pdf_path)