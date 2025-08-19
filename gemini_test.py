from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate

llm = ChatGoogleGenerativeAI(
    model="gemini-pro",
    google_api_key="YOUR_GEMINI_API_KEY"  # 🔐 replace with your actual key
)

prompt = PromptTemplate.from_template("What is the purpose of life?")
response = llm.invoke(prompt.format())

print(response.content)
