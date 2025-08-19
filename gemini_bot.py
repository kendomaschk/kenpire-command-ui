from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate

# 🔐 Your Gemini API Key
llm = ChatGoogleGenerativeAI(
    model="gemini-pro",
    google_api_key="sk-svcacct-gdP5zeUY5KIXmQTokwu9HCHbEv6JMl3xzBopaeX-6r-H1qtUAJ3Yu4y66mZRpnouZoWTaEf6woT3BlbkFJt9TLoZtGWvagqIdPar4Mv53pyl0nmtdik5CgPnI_zWg99u-DsFzeqVc1SaCvzU1cPBE-NHSAA"
)

# 💬 Build and send prompt
prompt = PromptTemplate.from_template("What is the purpose of life?")
response = llm.invoke(prompt.format())

# 🖨️ Print Gemini’s response
print(response.content)
