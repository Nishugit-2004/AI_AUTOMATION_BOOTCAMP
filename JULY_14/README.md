# 🤖 AI Professional Assistant

An AI-powered command-line application built using **Python**, **LangChain**, and **Google Gemini**. The project demonstrates modern LangChain development using **ChatPromptTemplate**, **LCEL (LangChain Expression Language)**, and **StrOutputParser** to generate professional content for different business and career-related tasks.

---

## 🚀 Features

* 📧 Professional Email Writer
* 💼 LinkedIn Caption Generator
* 📄 Resume Bullet Generator
* 📝 Cover Letter Generator
* ✨ Grammar & Tone Improver
* 📋 Meeting Minutes Generator
* 🎯 Interview Question Generator

---

## 🛠️ Technologies Used

* Python
* LangChain
* Google Gemini API
* ChatPromptTemplate
* LCEL (LangChain Expression Language)
* StrOutputParser
* python-dotenv

---

## 📁 Project Structure

```text
AI_Professional_Assistant/
│
├── app.py
├── prompts.py
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

---

## 🔄 Application Workflow

```text
User Input
      │
      ▼
ChatPromptTemplate
      │
      ▼
Google Gemini
      │
      ▼
StrOutputParser
      │
      ▼
Generated Output
```

---

## 📚 Key Concepts Learned

* Understanding **ChatPromptTemplate** for role-based prompts.
* Creating reusable prompt templates using **System** and **Human** messages.
* Building AI pipelines with **LCEL** using the `|` operator.
* Using **StrOutputParser** to convert AI responses into clean text.
* Implementing multiple AI tools using reusable LangChain chains.
* Designing a menu-driven AI application using Python.

---

## ▶️ How to Run

1. Clone the repository.
2. Create a virtual environment.
3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Add your Gemini API key to the `.env` file:

```env
GOOGLE_API_KEY=YOUR_API_KEY
```

5. Run the application:

```bash
python app.py
```

---

## 🎯 Learning Outcome

This project strengthened my understanding of modern LangChain development by replacing traditional prompt formatting with **ChatPromptTemplate**, **LCEL**, and **StrOutputParser**. It also improved my skills in building modular AI applications capable of generating professional content for real-world use cases.

---

## 🚀 Future Enhancements

* PDF Resume Analyzer
* ATS Score Generator
* Resume Skill Extraction
* Job Description Matching
* RAG (Retrieval-Augmented Generation)
* Agentic AI Workflow
* Streamlit Web Interface
* FastAPI Backend
