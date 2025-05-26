import { OpenAI } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

export const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function chatWithOpenAI() {
  const response = await openaiClient.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: "Hello, who are you?" }],
  });

  console.log(response.choices[0].message.content);
}
