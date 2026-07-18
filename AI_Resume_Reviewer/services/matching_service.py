from chains import matching_chain


class MatchingService:

    def compare(
        self,
        resume,
        job_description
    ):

        return matching_chain.invoke(
            {
                "resume": resume,
                "job_description": job_description
            }
        )