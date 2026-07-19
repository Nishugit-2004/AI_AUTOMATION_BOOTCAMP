"use client";

import { Loader2 } from "lucide-react";

interface AnalyzeButtonProps {
  loading: boolean;
  onClick: () => void;
}

export default function AnalyzeButton({
  loading,
  onClick,
}: AnalyzeButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        flex w-full items-center justify-center gap-2
        rounded-lg bg-blue-600 py-3
        font-semibold text-white
        transition-all duration-200
        hover:bg-blue-700
        hover:shadow-lg
        disabled:cursor-not-allowed
        disabled:bg-gray-400
        disabled:shadow-none
      "
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Analyzing Resume...
        </>
      ) : (
        <>
          🚀 Analyze Resume
        </>
      )}
    </button>
  );
}