from config import model

from prompts import resume_summary_prompt, ats_prompt, jd_prompt, matching_prompt, resume_validation_prompt, jd_validation_prompt

from models import ResumeInfo, ATSReport, JobDescriptionInfo, MatchReport, ResumeValidation, JobDescriptionValidation

validation_model = model.with_structured_output(
    ResumeValidation
)

jd_validation_model = model.with_structured_output(
    JobDescriptionValidation
)

structured_model = model.with_structured_output(
    ResumeInfo
)

ats_model = model.with_structured_output(
    ATSReport
)

jd_model = model.with_structured_output(
    JobDescriptionInfo
)

matching_model = model.with_structured_output(
    MatchReport
)

resume_validation_chain = (
    resume_validation_prompt
    | validation_model
)
jd_validation_chain = jd_validation_prompt | jd_validation_model
summary_chain = resume_summary_prompt | structured_model
ats_chain = ats_prompt | ats_model
jd_chain = jd_prompt | jd_model
matching_chain = matching_prompt | matching_model
