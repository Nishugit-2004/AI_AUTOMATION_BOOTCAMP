from chains import ats_chain


class ATSService:

    def analyze_resume(self, resume):

        report = ats_chain.invoke(
            {
                "resume": resume
            }
        )

        return report