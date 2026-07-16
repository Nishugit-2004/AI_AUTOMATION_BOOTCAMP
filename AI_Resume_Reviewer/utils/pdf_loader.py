from pypdf import PdfReader


def load_pdf(file_path):
    """
    Reads a PDF and returns all extracted text.
    """

    reader = PdfReader(file_path)

    text = ""

    for page in reader.pages:
        extracted = page.extract_text()

        if extracted:
            text += extracted + "\n"

    return text