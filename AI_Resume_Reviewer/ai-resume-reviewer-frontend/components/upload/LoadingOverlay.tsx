"use client";

import { Loader2 } from "lucide-react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-[420px] rounded-2xl bg-white p-8 shadow-2xl">

        <div className="flex flex-col items-center">

          <Loader2 className="h-16 w-16 animate-spin text-blue-600" />

          <h2 className="mt-6 text-2xl font-bold">
            AI Resume Reviewer
          </h2>

          <p className="mt-2 text-center text-gray-600">
            Analyzing your resume...
          </p>

        </div>

        <div className="mt-8 space-y-4 text-sm">

          <LoadingStep text="📄 Parsing Resume" />

          <LoadingStep text="📋 Reading Job Description" />

          <LoadingStep text="🧠 Matching Skills" />

          <LoadingStep text="📊 Calculating ATS Score" />

          <LoadingStep text="✨ Generating AI Insights" />

        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          This usually takes 10–20 seconds.
        </p>

      </div>

    </div>
  );
}

function LoadingStep({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">

      <Loader2 className="h-4 w-4 animate-spin text-blue-500" />

      <span>{text}</span>

    </div>
  );
}