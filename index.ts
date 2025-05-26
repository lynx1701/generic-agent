import * as dotenv from "dotenv";
import { openaiClient } from "./config/openai";
import { createAssistant } from "./openai/createAssistant";
import { createRun } from "./openai/createRun";
import { createThread } from "./openai/createThread";
dotenv.config();

async function main() {
  const client = openaiClient;

  const assistant = await createAssistant(client);
  const thread = await createThread(client, "test");
  const run = createRun(client, thread, assistant.id);
}
