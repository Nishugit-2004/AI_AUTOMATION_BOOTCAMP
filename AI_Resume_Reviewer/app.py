from utils.pdf_loader import load_pdf

from chains import summary_chain

resume_text = load_pdf("data/resume.pdf")

resume = summary_chain.invoke(
    {
        "resume": resume_text
    }
)

print("\nCandidate Name")
print(resume.name)

print("\nEducation")
print(resume.education)

print("\nSkills")
print(resume.skills)

print("\nProjects")
print(resume.projects)

print("\nExperience")
print(resume.experience)