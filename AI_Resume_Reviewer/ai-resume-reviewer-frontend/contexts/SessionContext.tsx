"use client";

import { createContext, useContext, useState } from "react";
import { ResumeAnalysisResponse } from "@/types";

interface SessionContextType {
  analysis: ResumeAnalysisResponse | null;
  setAnalysis: (analysis: ResumeAnalysisResponse) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);

export function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [analysis, setAnalysis] =
    useState<ResumeAnalysisResponse | null>(null);

  return (
    <SessionContext.Provider
      value={{
        analysis,
        setAnalysis,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used inside SessionProvider");
  }

  return context;
}