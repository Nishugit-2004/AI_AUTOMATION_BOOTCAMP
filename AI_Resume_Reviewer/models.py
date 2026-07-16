from pydantic import BaseModel, Field

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