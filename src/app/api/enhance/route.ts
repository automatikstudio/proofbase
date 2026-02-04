import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { text, name } = await request.json();

    if (!text) {
      return NextResponse.json({ error: "Missing text" }, { status: 400 });
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: `You are a testimonial editor. Polish the following customer testimonial to make it more compelling and professional, while keeping the original voice, sentiment, and meaning completely authentic. Do NOT add claims they didn't make. Keep it concise (2-3 sentences max). Only return the enhanced text, nothing else.

Customer name: ${name || "Customer"}
Original testimonial: "${text}"`,
        },
      ],
    });

    const enhanced =
      message.content[0].type === "text" ? message.content[0].text : text;

    return NextResponse.json({ enhanced });
  } catch (error) {
    console.error("Enhance error:", error);
    return NextResponse.json(
      { error: "Enhancement failed", enhanced: null },
      { status: 500 }
    );
  }
}
