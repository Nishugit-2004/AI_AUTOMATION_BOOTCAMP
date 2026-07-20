from chains import jd_chain


class JDService:

    def extract_job_details(self, jd_text: str):

        return jd_chain.invoke(
            {
                "job_description": jd_text
            }
        )