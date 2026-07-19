from utils.pdf_loader import load_pdf
from chains import summary_chain


class ResumeService:

    def summarize_resume(self, pdf_path):

        # Load resume PDF
        resume_text = load_pdf(pdf_path)

        # Generate resume summary
        resume = summary_chain.invoke(
            {
                "resume": resume_text
            }
        )

        return resume