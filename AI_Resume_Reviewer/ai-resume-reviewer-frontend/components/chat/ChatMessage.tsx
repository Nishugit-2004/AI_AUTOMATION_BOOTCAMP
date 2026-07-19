import {
  Bot,
  User,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  sender: "user" | "ai";
  message: string;
}

export default function ChatMessage({
  sender,
  message,
}: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`mb-5 flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
          <Bot className="h-5 w-5 text-white" />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-3xl px-5 py-4 shadow-md transition-all duration-300 hover:shadow-lg ${
          isUser
            ? "rounded-br-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            : "rounded-bl-lg border border-gray-200 bg-white text-gray-800"
        }`}
      >
        <div
          className={`mb-2 text-xs font-bold uppercase tracking-wide ${
            isUser ? "text-blue-100" : "text-gray-400"
          }`}
        >
          {isUser ? "You" : "AI Assistant"}
        </div>

        <div
          className={`prose prose-sm max-w-none ${
            isUser ? "prose-invert" : ""
          }`}
        >
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </div>

      {isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-md">
          <User className="h-5 w-5 text-white" />
        </div>
      )}
    </div>
  );
}