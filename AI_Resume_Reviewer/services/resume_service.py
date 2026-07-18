from utils.pdf_loader import load_pdf
from chains import summary_chain


class ResumeService:

    def summarize_resume(self, pdf_path):

        resume_text = load_pdf(pdf_path)

        resume = summary_chain.invoke(
            {
                "resume": resume_text
            }
        )

        return resume