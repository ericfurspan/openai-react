import { Configuration, OpenAIApi } from "openai";

/**
 * References
 * @link https://platform.openai.com/docs/api-reference
 *
 */
const OPENAI_API_KEY = "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";

const configuration = new Configuration({ apiKey: OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function askGpt(prompt: string) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.data.choices[0].message?.content;
}
