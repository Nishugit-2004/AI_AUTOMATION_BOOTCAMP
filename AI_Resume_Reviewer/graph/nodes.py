from graph.state import HiringState

from tools.resume_tool import analyze_resume_tool
from tools.ats_tool import ats_tool
from tools.jd_tool import jd_tool
from tools.matching_tool import matching_tool


def resume_node(state: HiringState):

    print("Running Resume Node")

    resume = analyze_resume_tool.invoke(
        {
            "pdf_path": state["resume_path"]
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
            "pdf_path": state["job_description_path"]
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