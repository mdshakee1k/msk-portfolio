// ─────────────────────────────────────────────────────────────────
//  POST /api/chat
//  Receives conversation history, prepends the portfolio knowledge
//  base as the system prompt, and streams Gemini's response.
//
//  Required env var: GEMINI_API_KEY
// ─────────────────────────────────────────────────────────────────

import { NextRequest } from "next/server";
import { GoogleGenerativeAI, type GenerateContentStreamResult } from "@google/generative-ai";
import { PORTFOLIO_KNOWLEDGE } from "@/lib/knowledge";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is not set. Add it to .env.local");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM = `
You are the portfolio assistant for Mohammed Shakeel K.
Answer ONLY from the knowledge base below. Be concise, warm, and professional.
Keep answers under 150 words unless real detail is needed. Use bullet points for lists.
When relevant, suggest the recruiter visit a specific section of the portfolio.

KNOWLEDGE BASE:
${PORTFOLIO_KNOWLEDGE}
`.trim();

const MAX_HISTORY = 12;

interface Msg { role: "user" | "assistant"; content: string }

function validate(raw: unknown): Msg[] {
  if (!Array.isArray(raw)) throw new Error("messages must be an array");
  return (raw as Msg[])
    .filter(m => (m.role === "user" || m.role === "assistant") && m.content?.trim())
    .slice(-MAX_HISTORY);
}

const RESPONSE_TIMEOUT = 15000; // 15 seconds (Gemini should respond within this)

export async function POST(req: NextRequest) {
  try {
    const body    = await req.json();
    const messages = validate(body.messages);
    if (!messages.length) return new Response("No messages", { status: 400 });
    if (messages[0]?.role === "assistant") messages.shift();

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 500,
      },
    });

    // Convert messages to Gemini format
    const geminiMessages = messages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const stream = model.startChat({
      history: geminiMessages.slice(0, -1),
    });

    const readable = new ReadableStream({
      async start(controller) {
        const enc = new TextEncoder();
        const startTime = Date.now();
        const timeoutHandle = setTimeout(() => {
          controller.enqueue(enc.encode("\n\n⏱️ Response taking too long. Try asking a simpler question."));
          controller.close();
        }, RESPONSE_TIMEOUT);

        try {
          const response = await Promise.race([
            stream.sendMessageStream(
              geminiMessages[geminiMessages.length - 1]?.parts[0]?.text || ""
            ),
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error("API timeout")), RESPONSE_TIMEOUT)
            ),
          ]) as GenerateContentStreamResult;

          for await (const chunk of response.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(enc.encode(text));
            }
          }
          clearTimeout(timeoutHandle);
        } catch (e) {
          clearTimeout(timeoutHandle);
          if (e instanceof Error && e.message !== "API timeout") {
            controller.enqueue(enc.encode(`\n\n⚠️ Error: ${e.message}`));
          }
        } finally { 
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type":      "text/plain; charset=utf-8",
        "Cache-Control":     "no-cache",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    console.error("[/api/chat]", err);
    return new Response("Server error", { status: 500 });
  }
}
