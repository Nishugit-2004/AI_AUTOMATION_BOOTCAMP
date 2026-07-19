import {
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

interface SkillsCardProps {
  title: string;
  skills: string[];
  color?: "green" | "red";
}

export default function SkillsCard({
  title,
  skills,
  color = "green",
}: SkillsCardProps) {
  const isPositive = color === "green";

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Top Gradient */}
      <div
        className={`h-1 w-full ${
          isPositive
            ? "bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500"
            : "bg-gradient-to-r from-red-500 via-rose-500 to-orange-500"
        }`}
      />

      <div className="p-6">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div
              className={`rounded-2xl p-3 ${
                isPositive
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              {isPositive ? (
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              ) : (
                <XCircle className="h-6 w-6 text-red-600" />
              )}
            </div>

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                {title}
              </h2>

              <p className="text-sm text-gray-500">
                AI Skill Analysis
              </p>

            </div>

          </div>

          <div
            className={`rounded-full px-4 py-2 text-sm font-bold ${
              isPositive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {skills.length} Skills
          </div>

        </div>

        {/* Skills */}

        {skills.length === 0 ? (

          <div className="rounded-2xl border-2 border-dashed border-gray-300 py-12 text-center">

            <Sparkles className="mx-auto mb-3 h-8 w-8 text-gray-400" />

            <p className="font-medium text-gray-500">
              No skills found
            </p>

          </div>

        ) : (

          <div className="max-h-72 overflow-y-auto pr-2">

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (

                <div
                  key={skill}
                  className={`
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:shadow-md

                    ${
                      isPositive
                        ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                        : "border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
                    }
                  `}
                >
                  {skill}
                </div>

              ))}

            </div>

          </div>

        )}

      </div>
    </div>
  );
}