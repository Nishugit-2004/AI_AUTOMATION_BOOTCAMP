"use client";

import { useEffect, useState } from "react";

import { useSession } from "@/contexts/SessionContext";

import StatCard from "@/components/dashboard/StatCard";
import SkillsCard from "@/components/dashboard/SkillsCard";
import RecommendationsCard from "@/components/dashboard/RecommendationsCard";
import ResumeSummaryCard from "@/components/dashboard/ResumeSummaryCard";
import ResumeScoreCard from "@/components/dashboard/ResumeScoreCard";
import ChatBox from "@/components/chat/ChatBox";
import Navbar from "@/components/layout/Navbar";

import {
  getResumeScore,
  ResumeScoreResponse,
} from "@/services/api";
export default function Dashboard() {

    const { analysis } = useSession();
    const [resumeScore, setResumeScore] =
        useState<ResumeScoreResponse | null>(null);

    useEffect(() => {
    if (!analysis) return;

    const fetchScore = async () => {
        try {
        const data = await getResumeScore(
            analysis.session_id
        );

        setResumeScore(data);
        } catch (error) {
        console.error(error);
        }
    };

    fetchScore();
    }, [analysis]);
    

    if (!analysis) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                No Analysis Found
            </main>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-12 rounded-3xl bg-white p-8 shadow-sm">

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                        <div>

                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                                AI Resume Reviewer
                            </p>

                            <h1 className="mt-2 text-4xl font-extrabold text-gray-900">
                                Resume Analysis Dashboard
                            </h1>

                            <p className="mt-3 max-w-2xl text-gray-600">
                                Analyze your resume, improve ATS compatibility,
                                identify missing skills, and receive AI-powered
                                recommendations to strengthen your job applications.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-white">

                            <p className="text-sm opacity-80">
                                Overall ATS Score
                            </p>

                            <p className="mt-2 text-5xl font-bold">
                                {analysis.ats.ats_score}%
                            </p>

                        </div>

                    </div>

                </div>

                {/* Score Cards */}
                <h2 className="mb-5 text-xl font-bold text-gray-800">
                    📊 Performance Overview
                </h2>
                <section className="grid gap-6 md:grid-cols-2">

                    <StatCard
                    title="ATS Score"
                    value={`${analysis.ats.ats_score}%`}
                    color="text-green-600"
                    />

                    <StatCard
                    title="Match Score"
                    value={`${analysis.match.match_score}%`}
                    color="text-blue-600"
                    />

                </section>

                {/* Resume Summary + Resume Score */}
                <div className="mt-12">

                    <h2 className="mb-5 text-xl font-bold text-gray-800">
                        👤 Candidate Profile
                    </h2>
                    <section className="mt-8 grid gap-6 lg:grid-cols-2">

                        <ResumeSummaryCard
                            resume={analysis.resume}
                        />

                        {resumeScore && (
                            <ResumeScoreCard
                                score={resumeScore}
                            />
                        )}

                    </section>
                </div>


                {/* Skills */}
                <div className="mt-12">

                    <h2 className="mb-5 text-xl font-bold text-gray-800">
                        🛠 Skills Analysis
                    </h2>
                    <section className="mt-8 grid gap-6 lg:grid-cols-2">

                        <SkillsCard
                        title="Matched Skills"
                        skills={analysis.match.matched_skills}
                        color="green"
                        />

                        <SkillsCard
                        title="Missing Skills"
                        skills={analysis.match.missing_skills}
                        color="red"
                        />

                    </section>
                </div>

                {/* Recommendations */}
                <div className="mt-12">

                    <h2 className="mb-5 text-xl font-bold text-gray-800">
                        💡 AI Recommendations
                    </h2>
                    <section className="mt-8">

                        <RecommendationsCard
                        recommendations={analysis.match.recommendations}
                        />

                    </section>
                </div>

                {/* Chat */}
                <div className="mt-12">

                    <h2 className="mb-5 text-xl font-bold text-gray-800">
                        🤖 AI Career Assistant
                    </h2>
                    <section className="mt-8">

                        <ChatBox />

                    </section>
                </div>

            </div>
            </main>
        </>
    );
}