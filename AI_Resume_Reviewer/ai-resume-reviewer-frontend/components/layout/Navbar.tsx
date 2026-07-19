"use client";

import { Bot, LayoutDashboard } from "lucide-react";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2">
            <Bot className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              AI Resume Reviewer
            </h1>

            <p className="text-xs text-gray-500">
              AI Career Assistant
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">

          <div className="flex items-center gap-2 text-gray-600">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </div>

            <a
            href="https://github.com/Nishugit2004/AI_Resume_Reviewer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition hover:text-blue-600"
            >
            GitHub
            </a>

        </nav>

      </div>
    </header>
  );
}