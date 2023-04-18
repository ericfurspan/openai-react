import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const { VITE_OPENAI_API_KEY } = import.meta.env;

const configuration = new Configuration({ apiKey: VITE_OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function askGpt(prompt: string, chatHistory: string[] | null) {
  const messages: ChatCompletionRequestMessage[] = [];
  if (chatHistory) {
    const previous: ChatCompletionRequestMessage[] = chatHistory.map((msg, idx) => ({
      role: idx % 2 ? "system" : "user",
      content: msg,
    }));

    messages.push(...previous);
  }

  messages.push({ role: "user", content: prompt });

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });

  return completion.data.choices[0].message?.content;
}
