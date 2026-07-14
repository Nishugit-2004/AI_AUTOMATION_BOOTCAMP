from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import StrOutputParser

from prompts import email_prompt, linkedin_prompt, resume_prompt, cover_letter_prompt, grammar_prompt, meeting_prompt, interview_prompt

load_dotenv()

model = ChatGoogleGenerativeAI(
    model="gemini-3.1-flash-lite"
)

parser = StrOutputParser()

email_chain = email_prompt | model | parser
linkedin_chain = linkedin_prompt | model | parser
resume_chain = resume_prompt | model | parser
cover_letter_chain = cover_letter_prompt | model | parser
grammar_chain = grammar_prompt | model | parser
meeting_chain = meeting_prompt | model | parser
interview_chain = interview_prompt | model | parser

# ---------------- Menu ---------------- #

print("=" * 40)
print("     AI PROFESSIONAL ASSISTANT")
print("=" * 40)
print("1. Professional Email Writer")
print("2. LinkedIn Caption Generator")
print("3. Resume Bullet Point Generator")
print("4. Cover Letter Generator")
print("5. Grammar & Tone Improver")
print("6. Meeting Minutes Generator")
print("7. Interview Question Generator")
print("8. Exit")
    
choice = input("\nEnter your choice (1-8): ")

# ---------------- Email ---------------- #

if choice == "1":

    request = input("\nEnter your email request: ")

    response = email_chain.invoke(
        {
            "request": request
        }
    )

    print("\n" + "=" * 60)
    print("Generated Email")
    print("=" * 60)
    print(response)

# ---------------- LinkedIn ---------------- #

elif choice == "2":

    achievement = input("\nEnter your achievement: ")

    response = linkedin_chain.invoke(
        {
            "achievement": achievement
        }
    )

    print("\n" + "=" * 60)
    print("Generated LinkedIn Post")
    print("=" * 60)
    print(response)

# ---------------- Resume Bullet Point Generator ---------------- #

elif choice == "3":

    experience = input("\nEnter your project/experience: ")

    response = resume_chain.invoke(
        {
            "experience": experience
        }
    )

    print("\n" + "=" * 60)
    print("Resume Bullet")
    print("=" * 60)
    print(response)

# ---------------- Cover Letter Generator ---------------- #

elif choice == "4":

    company = input("\nCompany Name: ")

    role = input("Role: ")

    skills = input("Skills (comma separated): ")

    response = cover_letter_chain.invoke(
        {
            "company": company,
            "role": role,
            "skills": skills
        }
    )

    print("\n" + "=" * 60)
    print("Generated Cover Letter")
    print("=" * 60)
    print(response)

# ---------------- Grammar & Tone Improver ---------------- #

elif choice == "5":

    text = input("\nEnter text: ")

    print("\nChoose Tone")
    print("1. Formal")
    print("2. Friendly")
    print("3. Professional")
    print("4. Motivational")

    tone_choice = input("Choice: ")

    tone_map = {
        "1": "Formal",
        "2": "Friendly",
        "3": "Professional",
        "4": "Motivational"
    }

    tone = tone_map.get(tone_choice, "Professional")

    response = grammar_chain.invoke(
        {
            "tone": tone,
            "text": text
        }
    )

    print("\n" + "=" * 60)
    print("Improved Text")
    print("=" * 60)
    print(response)
    
    
# ---------------- Meeting Minutes Generator ---------------- #

elif choice == "6":

    print("\nPaste your meeting notes.")
    print("Type END on a new line when finished.\n")

    lines = []

    while True:
        line = input()

        if line.strip().upper() == "END":
            break

        lines.append(line)

    notes = "\n".join(lines)

    response = meeting_chain.invoke(
        {
            "notes": notes
        }
    )

    print("\n" + "=" * 60)
    print("Meeting Minutes")
    print("=" * 60)
    print(response)
    
# ---------------- Interview Question Generator ---------------- #

elif choice == "7":

    technology = input("\nTechnology: ")

    level = input("Experience Level: ")

    count = input("Number of Questions: ")

    response = interview_chain.invoke(
        {
            "technology": technology,
            "level": level,
            "count": count
        }
    )

    print("\n" + "=" * 60)
    print("Interview Questions")
    print("=" * 60)
    print(response)
    
    
elif choice == "8":

    print("\nThank you for using AI Professional Assistant!")

else:

    print("\nInvalid choice. Please choose a valid option.")
