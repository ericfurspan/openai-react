import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const { VITE_OPENAI_API_KEY } = import.meta.env;

const configuration = new Configuration({ apiKey: VITE_OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function askGpt(prompt: string, messages: ChatCompletionRequestMessage[]) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });

  const { message } = completion.data.choices[0];

  return message;
}
