from langchain_core.prompts import ChatPromptTemplate

resume_summary_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are an expert HR Recruiter.

Read the given resume carefully.

Generate a professional summary.

Rules:

• Write between 120–180 words.
• Mention the candidate's education.
• Mention important technical skills.
• Mention projects.
• Mention strengths.
• Keep it professional.
• Return only the summary.
"""
        ),

        (
            "human",
            """
Resume:

{resume}
"""
        )
    ]
)