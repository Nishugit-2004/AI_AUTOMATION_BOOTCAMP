from dotenv import load_dotenv
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from prompts import email_prompt, linkedin_prompt

load_dotenv()

model = ChatGoogleGenerativeAI(
    model="gemini-3.1-flash-lite"
)

print("=" * 40)
print("      AI CONTENT GENERATOR")
print("=" * 40)
print("1. Email Writer")
print("2. LinkedIn Caption Generator")
print("3. Exit")

choice = input("\nEnter your choice (1-3): ")

if choice == "1":
    user_request = input("\nEnter your email request: ")
    
    formatted_prompt = email_prompt.format(
        request=user_request
    )
    
    response = model.invoke(formatted_prompt)
    
    print("\n" + "=" * 50)
    print("Generated Email")
    print("=" * 50)

    print(response.content[0]["text"])

elif choice == "2":
    achievement = input("\nEnter your achievement: ")

    formatted_prompt = linkedin_prompt.format(
        achievement=achievement
    )

    response = model.invoke(formatted_prompt)

    print("\n" + "=" * 50)
    print("Generated LinkedIn Post")
    print("=" * 50)

    print(response.content[0]["text"])
    
elif choice == "3":
    print("Thank you for using AI Content Generator!")

else:
    print("Invalid choice. Please select 1, 2 or 3.")


