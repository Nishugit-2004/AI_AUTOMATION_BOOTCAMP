export interface ChatRequest {
  session_id: string;
  question: string;
}

export interface ChatResponse {
  answer: string;
}