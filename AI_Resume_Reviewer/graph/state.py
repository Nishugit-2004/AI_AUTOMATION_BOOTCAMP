from typing import TypedDict

from models import (
    ResumeInfo,
    ATSReport,
    JobDescriptionInfo,
    MatchReport,
)

class HiringState(TypedDict, total=False):

    resume_path: str

    job_description_path: str

    resume: ResumeInfo

    jd: JobDescriptionInfo

    match: MatchReport

    ats: ATSReport

    final_report: dict
    
    request_type: str