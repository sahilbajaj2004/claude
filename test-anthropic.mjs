import Anthropic from "@anthropic-ai/sdk";
import "dotenv/config";

const apiKey = process.env.ANTHROPIC_API_KEY;

if (!apiKey) {
  console.error("Missing ANTHROPIC_API_KEY environment variable.");
  process.exit(1);
}

const anthropic = new Anthropic({ apiKey });

try {
  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-latest",
    max_tokens: 20,
    messages: [{ role: "user", content: "Reply with: OK" }],
  });

  console.log("API key works.");
  console.log(JSON.stringify(response.content, null, 2));
} catch (error) {
  console.error("API key test failed.");
  console.error("Status:", error?.status ?? "unknown");
  console.error("Message:", error?.message ?? String(error));
  process.exit(1);
}
