"use client";

import { useState } from "react";
import {
  Bot,
  Send,
  Loader2,
} from "lucide-react";

import ChatMessage from "./ChatMessage";

import { useSession } from "@/contexts/SessionContext";
import { chatWithAI } from "@/services/api";

export default function ChatBox() {
  const { analysis } = useSession();

  const [messages, setMessages] = useState([
    {
      sender: "ai" as const,
      message: "Hello! 👋 Ask me anything about your resume.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!question.trim() || !analysis || loading) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: userQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const response = await chatWithAI({
        session_id: analysis.session_id,
        question: userQuestion,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: response.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message:
            "Sorry, I couldn't get a response. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Top Gradient */}

      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

      {/* Header */}

      <div className="flex items-center gap-4 border-b border-gray-200 p-6">

        <div className="rounded-2xl bg-blue-100 p-3">
          <Bot className="h-7 w-7 text-blue-600" />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            AI Resume Assistant
          </h2>

          <p className="text-sm text-gray-500">
            Ask questions about your resume analysis
          </p>

        </div>

      </div>

      {/* Messages */}

      <div className="h-[420px] space-y-4 overflow-y-auto bg-gray-50 p-5">

        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-blue-600">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm">
              AI is thinking...
            </span>
          </div>
        )}

      </div>

      {/* Input */}

      <div className="border-t border-gray-200 bg-white p-5">

        <div className="flex gap-3">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask anything about your resume..."
            disabled={loading}
            className="
              flex-1
              rounded-2xl
              border
              border-gray-300
              px-5
              py-3
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-200
            "
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
              hover:shadow-lg
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}

            Send
          </button>

        </div>

      </div>

    </div>
  );
}