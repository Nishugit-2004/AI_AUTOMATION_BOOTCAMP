import axios from "axios";
import {
  ResumeAnalysisResponse,
  ChatRequest,
  ChatResponse,
} from "@/types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;

// Upload Resume + JD
export const analyzeResume = async (
  resume: File,
  jobDescription: File
): Promise<ResumeAnalysisResponse> => {
  const formData = new FormData();

  formData.append("resume", resume);
  formData.append("job_description", jobDescription);

  const response = await api.post<ResumeAnalysisResponse>(
    "/resume/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

// Chat
export const askQuestion = async (
  data: ChatRequest
): Promise<ChatResponse> => {
  const response = await api.post<ChatResponse>("/chat", data);

  return response.data;
};

export const chatWithAI = async (
  data: ChatRequest
): Promise<ChatResponse> => {
  const response = await api.post("/chat", data);
  return response.data;
};

export interface ResumeScoreResponse {
  overall_grade: string;
  overall_score: number;

  category_scores: {
    technical_skills: string;
    projects: string;
    experience: string;
    education: string;
    formatting: string;
    ai_readiness: string;
  };

  strengths: string[];

  improvements: string[];
}

export const getResumeScore = async (
  sessionId: string
): Promise<ResumeScoreResponse> => {

  const response = await api.get<ResumeScoreResponse>(
    `/resume/score/${sessionId}`
  );

  return response.data;
};