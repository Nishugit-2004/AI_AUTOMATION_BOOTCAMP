from langchain_core.prompts import PromptTemplate

email_prompt = PromptTemplate.from_template(
    """
    You are a professional HR manager.

    Write ONLY one professional email.

    Do not provide multiple options.

    Do not give explanations.

    Do not give tips.

    Do not include headings like Option 1.

    Return only the email.

    Request:

    {request}
    """
)



linkedin_prompt = PromptTemplate.from_template(
    """
    You are a professional LinkedIn content writer.

    Generate ONLY one professional LinkedIn post.

    The post should:
    - Be professional and engaging
    - Be around 100–150 words
    - Express enthusiasm and gratitude
    - Include 4-6 relevant hashtags at the end
    - Do not provide multiple options
    - Do not explain your answer
    - Return only the LinkedIn post

    Achievement:
    {achievement}
    """
)