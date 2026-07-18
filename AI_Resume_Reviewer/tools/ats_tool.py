from langchain_core.tools import tool

from services.ats_service import ATSService

ats_service = ATSService()


@tool
def ats_tool(resume):
    """
    Analyze the resume and generate an ATS report.
    """

    return ats_service.analyze_resume(resume)