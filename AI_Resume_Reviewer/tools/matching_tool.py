from langchain_core.tools import tool

from services.matching_service import MatchingService

matching_service = MatchingService()


@tool
def matching_tool(
    resume,
    job_description,
):
    """
    Compare a resume with a job description.
    """

    return matching_service.compare(
        resume,
        job_description,
    )