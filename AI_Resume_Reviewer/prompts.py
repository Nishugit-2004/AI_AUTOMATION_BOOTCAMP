from langchain_core.prompts import ChatPromptTemplate

resume_validation_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are an AI document classifier.

Determine whether the uploaded document is a professional resume/CV.

A valid resume usually contains several of these:
- Candidate information
- Education
- Skills
- Work Experience
- Projects
- Certifications
- Contact details

The following are NOT resumes:
- Bank statements
- Electricity bills
- Aadhaar/PAN cards
- Newspaper articles
- Question papers
- Research papers
- Invoices
- Transaction histories

Return ONLY JSON:

{{
    "is_resume": true,
    "confidence": 0.98,
    "reason": "..."
}}
"""
        ),
        (
            "human",
            """
Document:

{resume}
"""
        ),
    ]
)

jd_validation_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are an expert HR recruiter and Job Description validator.

Your task is to determine whether the uploaded document is a valid Job Description (JD).

A valid Job Description usually contains:
- Job Title
- Company Name (optional)
- Job Summary
- Roles & Responsibilities
- Required Skills
- Qualifications
- Experience Requirements
- Preferred Skills
- Salary / Benefits (optional)
- Location (optional)

Return TRUE if the document is clearly a Job Description or Job Posting.

Return FALSE if the document is:
- Resume
- CV
- Biodata
- Bank Statement
- Invoice
- Receipt
- Question Paper
- Research Paper
- College Notes
- Transaction History
- Medical Report
- Certificate
- Passport
- Aadhaar Card
- PAN Card
- Any unrelated document
- Empty document

If the document is partially readable but still clearly represents a Job Description, classify it as TRUE.

Return ONLY JSON:

{{
    "is_job_description": true,
    "confidence": 0.98,
    "reason": "Brief reason"
}}
"""
        ),
        (
            "human",
            """
Document:

{job_description}
"""
        ),
    ]
)

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