
from graph.state import HiringState
from chains import resume_validation_chain, jd_validation_chain
from utils.pdf_loader import load_pdf
from tools.resume_tool import analyze_resume_tool
from tools.ats_tool import ats_tool
from tools.jd_tool import jd_tool
from tools.matching_tool import matching_tool

def document_loader_node(state: HiringState):

    print("Running Document Loader Node")

    # Load Resume only once
    state["resume_text"] = load_pdf(
        state["resume_path"]
    )

    # Load JD only once (if provided)
    if state.get("job_description_path"):
        state["jd_text"] = load_pdf(
            state["job_description_path"]
        )

    return state

def resume_validation_node(state: HiringState):

    print("Running Resume Validation Node")

    resume_text = state["resume_text"]

    validation = resume_validation_chain.invoke(
        {
            "resume": resume_text
        }
    )
    
    print(validation)

    if not validation.is_resume:
        print(validation.reason)
        raise ValueError(
            f"Invalid Resume: {validation.reason}"
        )

    return state

def jd_validation_node(state: HiringState):

    print("Running JD Validation Node")

    jd_text = state["jd_text"]

    validation = jd_validation_chain.invoke(
        {
            "job_description": jd_text
        }
    )

    print(validation)

    if not validation.is_job_description:

        print(validation.reason)

        raise ValueError(
            f"Invalid Job Description: {validation.reason}"
        )

    return state

def resume_node(state: HiringState):

    print("Running Resume Node")

    resume = analyze_resume_tool.invoke(
        {
            "resume_text": state["resume_text"]
        }
    )

    state["resume"] = resume

    return state


def ats_node(state: HiringState):

    print("Running ATS Node")

    report = ats_tool.invoke(
        {
            "resume": state["resume"]
        }
    )

    state["ats"] = report

    return state

def jd_node(state: HiringState):

    print("Running JD Node")

    jd = jd_tool.invoke(
        {
            "jd_text": state["jd_text"]
        }
    )

    state["jd"] = jd

    return state


def matching_node(state: HiringState):

    print("Running Matching Node")

    match = matching_tool.invoke(
        {
            "resume": state["resume"],
            "job_description": state["jd"]
        }
    )

    state["match"] = match

    return state

def route_after_resume(state: HiringState):

    if state.get("job_description_path"):
        return "jd_node"

    return "ats_node"

def router(state):

    if state["request_type"] == "summary":

        return "end"

    return "ats_node"