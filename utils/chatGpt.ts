import { Configuration, OpenAIApi } from "openai";

interface GetCompletionFromOpenAISampleType {
  role: string;
  content: string;
}

// const completion = await openai.createChatCompletion()

function chatGpt() {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // any : test 완료 후 변경
  async function getCompletionFromOpenAISample(messages: any) {
    const completion: any = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.5,
    });

    const { finish_reason, message } = completion.data.choices.at(0);

    const result = message.content
      .split("\n")
      .map((text: string) => text.replace(/\d{1,2}.\s/, ""));
    return result;
  }

  return {
    getCompletionFromOpenAISample,
  };
}

export default chatGpt;
