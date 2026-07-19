from langchain_core.prompts import ChatPromptTemplate

from config import model
from models import ResumeScoreResponse


class ResumeScoreService:

    def __init__(self):

        prompt = ChatPromptTemplate.from_messages(
            [
                (
                    "system",
                    """
You are an expert ATS evaluator, Senior Technical Recruiter and AI Career Coach.

Evaluate the resume against the job description.

Return ONLY a ResumeScoreResponse object.

The response must contain:

- overall_grade
- overall_score

category_scores:
- technical_skills
- projects
- experience
- education
- formatting
- ai_readiness

- strengths
- improvements

Rules:

- Overall score must be between 0 and 100.
- Grades must be one of: A+, A, B+, B, C+, C.
- Return only the structured response.
                    """,
                ),
                (
                    "human",
                    """
Resume

{resume}

Job Description

{jd}
                    """,
                ),
            ]
        )

        self.chain = prompt | model.with_structured_output(
            ResumeScoreResponse
        )

    def evaluate(
        self,
        resume,
        jd,
    ) -> ResumeScoreResponse:

        return self.chain.invoke(
            {
                "resume": resume,
                "jd": jd,
            }
        )