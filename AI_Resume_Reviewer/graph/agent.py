from graph.graph_builder import graph
from utils.display import print_state

initial_state = {

    "resume_path": "data/resume.pdf",

    "job_description_path": "data/job_description.pdf"

}

result = graph.invoke(initial_state)

print_state(result)