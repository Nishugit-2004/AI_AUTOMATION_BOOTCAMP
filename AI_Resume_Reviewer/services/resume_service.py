from chains import summary_chain


class ResumeService:

    def summarize_resume(self, resume_text: str):

        resume = summary_chain.invoke(
            {
                "resume": resume_text
            }
        )

        return resume