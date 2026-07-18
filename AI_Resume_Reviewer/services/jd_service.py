from utils.pdf_loader import load_pdf

from chains import jd_chain


class JDService:

    def extract_job_details(self, pdf_path):

        jd_text = load_pdf(pdf_path)

        return jd_chain.invoke(
            {
                "job_description": jd_text
            }
        )