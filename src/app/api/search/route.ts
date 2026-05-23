import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { query, agentTitles } = await req.json();

    if (!query || !process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ overview: null }, { status: 200 });
    }

    const agentList = (agentTitles as string[]).join(", ");

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 120,
      messages: [
        {
          role: "user",
          content: `You are an AI assistant for K-Nexus.AI, an enterprise AI agent marketplace.
A user searched for: "${query}"
Matching agents: ${agentList || "none"}.
Write a 2-sentence overview (max 40 words) that briefly explains what the matching agents can help with for this query. Be direct and specific. Do not start with "I" or "These agents".`,
        },
      ],
    });

    const overview =
      message.content[0].type === "text" ? message.content[0].text : null;

    return NextResponse.json({ overview });
  } catch {
    return NextResponse.json({ overview: null }, { status: 200 });
  }
}
