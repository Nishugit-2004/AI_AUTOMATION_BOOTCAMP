import {
  Award,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  XCircle,
} from "lucide-react";

interface ResumeScoreProps {
  score: {
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
  };
}

export default function ResumeScoreCard({
  score,
}: ResumeScoreProps) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const progress =
    circumference -
    (score.overall_score / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Top Gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />

      <div className="p-8">

        {/* Header */}
        <div className="mb-8 flex items-center gap-4">

          <div className="rounded-2xl bg-yellow-100 p-4">
            <Award className="h-7 w-7 text-yellow-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Resume Quality Score
            </h2>

            <p className="text-sm text-gray-500">
              AI-powered resume evaluation
            </p>
          </div>

        </div>

        {/* Overall Score */}

        <div className="mb-10 flex flex-col items-center">

          <div className="relative h-40 w-40">

            <svg
              width="160"
              height="160"
              className="-rotate-90"
            >
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="#E5E7EB"
                strokeWidth="12"
                fill="none"
              />

              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="#2563EB"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={progress}
                style={{
                  transition:
                    "stroke-dashoffset 1s ease",
                }}
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className="text-5xl font-extrabold text-blue-600">
                {score.overall_score}
              </span>

              <span className="text-sm font-semibold text-gray-500">
                /100
              </span>

            </div>

          </div>

          <div className="mt-5 rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
            Grade : {score.overall_grade}
          </div>

        </div>

        {/* Categories */}

        <div className="mb-8">

          <h3 className="mb-5 text-lg font-bold text-gray-800">
            📊 Category Breakdown
          </h3>

          <div className="space-y-4">

            <Category
              title="Technical Skills"
              value={score.category_scores.technical_skills}
            />

            <Category
              title="Projects"
              value={score.category_scores.projects}
            />

            <Category
              title="Experience"
              value={score.category_scores.experience}
            />

            <Category
              title="Education"
              value={score.category_scores.education}
            />

            <Category
              title="Formatting"
              value={score.category_scores.formatting}
            />

            <Category
              title="AI Readiness"
              value={score.category_scores.ai_readiness}
            />

          </div>

        </div>

        <h3 className="mb-5 text-lg font-bold text-gray-800">
          ✨ AI Insights
        </h3>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Strengths */}

          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-5">

            <div className="mb-5 flex items-center gap-2">

              <CheckCircle2 className="h-5 w-5 text-green-600" />

              <h3 className="font-semibold text-green-700">
                Strengths
              </h3>

            </div>

            <div className="space-y-3">

              {score.strengths.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-green-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <Sparkles className="mt-1 h-4 w-4 text-green-600" />

                  <p className="text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Improvements */}

          <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-5">

            <div className="mb-5 flex items-center gap-2">

              <XCircle className="h-5 w-5 text-red-600" />

              <h3 className="font-semibold text-red-700">
                Improvements
              </h3>

            </div>

            <div className="space-y-3">

              {score.improvements.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-red-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <TrendingUp className="mt-1 h-4 w-4 text-red-500" />

                  <p className="text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );


}

function Category({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  const scoreMap: Record<string, number> = {
    Excellent: 95,
    VeryGood: 88,
    "Very Good": 88,
    Good: 78,
    Average: 60,
    Fair: 50,
    Poor: 30,
  };

  const percentage = scoreMap[value] ?? 75;

  const getColor = () => {
    if (percentage >= 90)
      return {
        bar: "bg-green-500",
        badge: "bg-green-100 text-green-700",
      };

    if (percentage >= 75)
      return {
        bar: "bg-blue-500",
        badge: "bg-blue-100 text-blue-700",
      };

    if (percentage >= 60)
      return {
        bar: "bg-yellow-500",
        badge: "bg-yellow-100 text-yellow-700",
      };

    return {
      bar: "bg-red-500",
      badge: "bg-red-100 text-red-700",
    };
  };

  const colors = getColor();

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-3 flex items-center justify-between">

        <span className="font-semibold text-gray-700">
          {title}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${colors.badge}`}
        >
          {value}
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">

        <div
          className={`h-full rounded-full ${colors.bar} transition-all duration-1000`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="mt-2 flex justify-end">

        <span className="text-xs font-medium text-gray-500">
          {percentage}%
        </span>

      </div>

    </div>
  );
}

