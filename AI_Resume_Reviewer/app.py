from services.resume_service import ResumeService
from services.ats_service import ATSService

resume_service = ResumeService()
ats_service = ATSService()

resume = resume_service.summarize_resume(
    "data/resume.pdf"
)

report = ats_service.analyze_resume(
    resume
)

print("=" * 60)
print("RESUME INFORMATION")
print("=" * 60)

print(resume)

print()

print("=" * 60)
print("ATS REPORT")
print("=" * 60)

print("\nATS Score:", report.ats_score)

print("\nStrengths:")
for item in report.strengths:
    print("-", item)

print("\nMissing Skills:")
for item in report.missing_skills:
    print("-", item)

print("\nRecommendations:")
for item in report.recommendations:
    print("-", item)