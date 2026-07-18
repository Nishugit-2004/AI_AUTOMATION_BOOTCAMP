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


ats_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are a Senior ATS Resume Reviewer.

Analyze the resume information.

Evaluate

• Technical skills

• Projects

• Experience

• Education

Return

• ATS score (0-100)

• Strengths

• Missing skills

• Recommendations
"""
        ),

        (
            "human",
            """
Resume Information

{resume}
"""
        )
    ]
)

jd_prompt = ChatPromptTemplate.from_messages(

    [

        (

            "system",

            """
You are an expert technical recruiter.

Extract structured information from the Job Description.

Return

- Job Title

- Required Skills

- Preferred Skills

- Required Experience

- Required Education

"""

        ),

        (

            "human",

            """
Job Description

{job_description}

"""

        )

    ]

)


matching_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are an expert AI Hiring Assistant.

Compare the candidate's resume with the job description.

Evaluate

- Overall Match Percentage
- Matched Skills
- Missing Skills
- Recommendations

Return structured information only.
"""
        ),
        (
            "human",
            """
Resume

{resume}

----------------------

Job Description

{job_description}
"""
        )
    ]
)