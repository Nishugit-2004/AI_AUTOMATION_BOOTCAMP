from langchain_core.tools import tool

from services.jd_service import JDService

jd_service = JDService()


@tool
def jd_tool(jd_text: str):
    """
    Extract structured information from Job Description text.
    """

    return jd_service.extract_job_details(jd_text)