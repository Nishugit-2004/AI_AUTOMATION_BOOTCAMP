import {
  Award,
  Target,
  TrendingUp,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatCard({
  title,
  value,
  color = "text-blue-600",
}: StatCardProps) {
  const numericValue =
    typeof value === "number"
      ? value
      : parseInt(value.toString());

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress =
    circumference -
    (numericValue / 100) * circumference;

  const getIcon = () => {
    switch (title.toLowerCase()) {
      case "ats score":
        return <TrendingUp className="h-6 w-6 text-blue-600" />;

      case "match score":
        return <Target className="h-6 w-6 text-green-600" />;

      case "resume score":
        return <Award className="h-6 w-6 text-yellow-500" />;

      default:
        return <TrendingUp className="h-6 w-6 text-blue-600" />;
    }
  };

  const getStatus = () => {
    if (numericValue >= 90)
      return {
        text: "Excellent",
        bg: "bg-green-100",
        textColor: "text-green-700",
      };

    if (numericValue >= 75)
      return {
        text: "Good",
        bg: "bg-blue-100",
        textColor: "text-blue-700",
      };

    if (numericValue >= 60)
      return {
        text: "Average",
        bg: "bg-yellow-100",
        textColor: "text-yellow-700",
      };

    return {
      text: "Needs Improvement",
      bg: "bg-red-100",
      textColor: "text-red-700",
    };
  };

  const status = getStatus();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Gradient Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="p-6">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              {title}
            </p>

            <h2 className={`mt-2 text-5xl font-bold ${color}`}>
              {value}
            </h2>

            <div
              className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${status.bg} ${status.textColor}`}
            >
              {status.text}
            </div>

          </div>

          <div className="rounded-2xl bg-blue-50 p-3">
            {getIcon()}
          </div>

        </div>

        {/* Progress Ring */}
        <div className="mt-8 flex justify-center">

          <div className="relative h-24 w-24">

            <svg
              className="-rotate-90"
              width="96"
              height="96"
            >
              <circle
                cx="48"
                cy="48"
                r={radius}
                stroke="#E5E7EB"
                strokeWidth="8"
                fill="none"
              />

              <circle
                cx="48"
                cy="48"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={progress}
                className={color}
                style={{
                  transition:
                    "stroke-dashoffset 1s ease-in-out",
                }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-2xl font-bold ${color}`}>
                {value}
              </span>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-100 pt-4">

          <p className="text-center text-sm text-gray-500">
            Performance indicator based on AI analysis
          </p>

        </div>

      </div>

    </div>
  );
}