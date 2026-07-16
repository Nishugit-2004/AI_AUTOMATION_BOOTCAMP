from config import model

from prompts import resume_summary_prompt

from models import ResumeInfo

structured_model = model.with_structured_output(
    ResumeInfo
)

summary_chain = resume_summary_prompt | structured_model