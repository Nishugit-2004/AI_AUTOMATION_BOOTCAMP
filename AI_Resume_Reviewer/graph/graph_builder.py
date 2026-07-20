from langgraph.graph import StateGraph, END

from graph.state import HiringState

from graph.nodes import (
    document_loader_node,
    resume_validation_node,
    jd_validation_node,
    resume_node,
    ats_node,
    jd_node,
    matching_node,
    route_after_resume,
)

builder = StateGraph(HiringState)

builder.add_node(
    "document_loader_node",
    document_loader_node
)
builder.add_node("resume_validation_node", resume_validation_node)
builder.add_node("resume_node", resume_node)
builder.add_node("jd_node", jd_node)
builder.add_node("jd_validation_node", jd_validation_node)
builder.add_node("matching_node", matching_node)
builder.add_node("ats_node", ats_node)

builder.set_entry_point("document_loader_node")

builder.add_edge(
    "document_loader_node",
    "resume_validation_node"
)

builder.add_edge(
    "resume_validation_node",
    "resume_node"
)

builder.add_conditional_edges(
    "resume_node",
    route_after_resume,
    {
        "jd_node": "jd_validation_node",
        "ats_node": "ats_node",
    },
)

builder.add_edge(
    "jd_validation_node",
    "jd_node"
)

builder.add_edge("jd_node", "matching_node")
builder.add_edge("matching_node", "ats_node")
builder.add_edge("ats_node", END)

graph = builder.compile()