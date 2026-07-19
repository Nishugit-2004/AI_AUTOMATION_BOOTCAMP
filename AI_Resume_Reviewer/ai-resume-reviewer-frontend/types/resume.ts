export interface ResumeInfo {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  education: string[];
  experience: string[];
}

export interface JobDescriptionInfo {
  job_title: string;
  required_skills: string[];
  responsibilities: string[];
}

export interface MatchReport {
    match_score: number;
    matched_skills: string[];
    missing_skills: string[];
    recommendations: string[];
}

export interface ATSReport {
    ats_score: number;
    strengths: string[];
    missing_skills: string[];
    recommendations: string[];
}

export interface ResumeAnalysisResponse {
  session_id: string;
  resume: ResumeInfo;
  job_description: JobDescriptionInfo;
  match: MatchReport;
  ats: ATSReport;
}