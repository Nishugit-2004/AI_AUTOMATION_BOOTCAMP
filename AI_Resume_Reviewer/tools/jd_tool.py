from langchain_core.tools import tool

from services.jd_service import JDService

jd_service = JDService()


@tool
def jd_tool(pdf_path: str):
    """
    Extract structured information from a Job Description PDF.
    """

    return jd_service.extract_job_details(pdf_path)