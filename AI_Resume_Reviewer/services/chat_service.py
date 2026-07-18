from langchain_core.prompts import ChatPromptTemplate

from config import model


class ChatService:

    def answer_question(
        self,
        resume,
        jd,
        match,
        ats,
        question,
    ):

        prompt = ChatPromptTemplate.from_messages(
            [
                (
                    "system",
                    """
You are an AI Recruitment Assistant.

Answer the recruiter's question using only the provided analysis.

If the answer cannot be determined from the provided data,
say that you don't have enough information.

Be concise and professional.
                    """,
                ),
                (
                    "human",
                    """
Resume

{resume}

Job Description

{jd}

Match Report

{match}

ATS Report

{ats}

Recruiter Question

{question}
                    """,
                ),
            ]
        )

        chain = prompt | model

        return chain.invoke(
            {
                "resume": resume,
                "jd": jd,
                "match": match,
                "ats": ats,
                "question": question,
            }
        )