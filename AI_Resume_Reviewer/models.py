from typing import List, Any
from pydantic import BaseModel, Field

class ResumeValidation(BaseModel):
    is_resume: bool
    confidence: float
    reason: str
    
class JobDescriptionValidation(BaseModel):
    is_job_description: bool
    confidence: float
    reason: str

class ResumeInfo(BaseModel):

    name: str = Field(description="Candidate name")

    email: str = Field(description="Email address")

    phone: str = Field(description="Phone number")

    education: list[str] = Field(description="Education details")

    skills: list[str] = Field(description="Technical skills")

    projects: list[str] = Field(description="Projects")

    experience: list[str] = Field(description="Experience")

    certifications: list[str] = Field(description="Certifications")

    achievements: list[str] = Field(description="Achievements")

    languages: list[str] = Field(description="Languages known")

    summary: str = Field(description="Professional summary")
    

class ATSReport(BaseModel):

    ats_score: int = Field(
        description="ATS compatibility score from 0 to 100"
    )

    strengths: List[str] = Field(
        description="Strong points in the resume"
    )

    missing_skills: List[str] = Field(
        description="Important missing skills"
    )

    recommendations: List[str] = Field(
        description="Suggestions to improve the resume"
    )
    
    
class JobDescriptionInfo(BaseModel):

    title: str = Field(
        description="Job title"
    )

    required_skills: list[str] = Field(
        description="Required technical skills"
    )

    preferred_skills: list[str] = Field(
        description="Preferred skills"
    )

    experience: str = Field(
        description="Experience required"
    )

    education: str = Field(
        description="Education required"
    )
    
class MatchReport(BaseModel):

    match_score: int = Field(
        description="Resume match percentage"
    )

    matched_skills: list[str] = Field(
        description="Skills present in resume"
    )

    missing_skills: list[str] = Field(
        description="Missing skills"
    )

    recommendations: list[str] = Field(
        description="Suggestions to improve the resume"
    )
    
class ChatRequest(BaseModel):
    session_id: str
    question: str


class ChatResponse(BaseModel):
    answer: str
    
class ResumeAnalysisResponse(BaseModel):
    session_id: str

    resume: ResumeInfo

    jd: JobDescriptionInfo

    match: MatchReport

    ats: ATSReport
    
    
# ==========================================================
# Resume Improvement Score Models
# ==========================================================

class ResumeCategoryScores(BaseModel):
    technical_skills: str
    projects: str
    experience: str
    education: str
    formatting: str
    ai_readiness: str


class ResumeScoreResponse(BaseModel):
    overall_grade: str
    overall_score: int

    category_scores: ResumeCategoryScores

    strengths: list[str]

    improvements: list[str]
