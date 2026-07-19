"use client";

import { useState } from "react";

import { analyzeResume } from "@/services/api";
import { useSession } from "@/contexts/SessionContext";
import { useRouter } from "next/navigation";

import FileInput from "./FileInput";
import AnalyzeButton from "./AnalyzeButton";
import LoadingOverlay from "./LoadingOverlay";

import toast from "react-hot-toast";

export default function UploadForm() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] =
    useState<File | null>(null);



    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const { setAnalysis } = useSession();


    const handleAnalyze = async () => {

        if (!resume || !jobDescription) {
            toast.error(
              "Please upload both Resume and Job Description PDFs."
            );
            return;
        }

        try {

            setLoading(true);

            const result = await analyzeResume(
                resume,
                jobDescription
            );

            console.log("API Result:", result);

            toast.success("API Success");

            setAnalysis(result);

            toast.success(
              "Resume analyzed successfully!"
            );

            router.push("/dashboard");

        } 
        
        catch (error: any) {

            console.error("Full Error:", error);

            console.error("Response:", error?.response);

            console.error("Response Data:", error?.response?.data);

            console.error("Message:", error?.message);

            toast.error(
                error?.response?.data?.detail ||
                error?.message ||
                "Analysis failed"
            );
        }        

        finally {

            setLoading(false);

        }

    };

  return (
    <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-lg">

      <h1 className="mb-2 text-center text-3xl font-bold">
        AI Resume Reviewer
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Upload your Resume and Job Description
      </p>

      <div className="space-y-6">

        <FileInput
          label="Resume (PDF)"
          file={resume}
          onChange={setResume}
        />

        <FileInput
          label="Job Description (PDF)"
          file={jobDescription}
          onChange={setJobDescription}
        />

        <AnalyzeButton
          loading={loading}
          onClick={handleAnalyze}
        />

      </div>
      <>
        {loading && <LoadingOverlay />}

        <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-lg">

          ...
          
        </div>
      </>
    </div>
  );
}

