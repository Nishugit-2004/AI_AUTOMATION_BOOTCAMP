import {
  Lightbulb,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface RecommendationsCardProps {
  recommendations: string[];
}

export default function RecommendationsCard({
  recommendations,
}: RecommendationsCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Top Gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="p-6">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-blue-100 p-3">
              <Lightbulb className="h-7 w-7 text-blue-600" />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                AI Recommendations
              </h2>

              <p className="text-sm text-gray-500">
                Personalized suggestions to improve your resume
              </p>

            </div>

          </div>

          <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            {recommendations.length} Tips
          </div>

        </div>

        {recommendations.length === 0 ? (

          <div className="rounded-2xl border-2 border-dashed border-gray-300 py-12 text-center">

            <Sparkles className="mx-auto mb-3 h-8 w-8 text-gray-400" />

            <p className="font-medium text-gray-500">
              No recommendations available
            </p>

          </div>

        ) : (

          <div className="max-h-[500px] space-y-4 overflow-y-auto pr-2">

            {recommendations.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border
                  border-blue-100
                  bg-gradient-to-r
                  from-blue-50
                  to-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-lg
                "
              >

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-blue-600 p-3">

                    <Sparkles className="h-5 w-5 text-white" />

                  </div>

                  <div className="flex-1">

                    <div className="mb-2 flex items-center justify-between">

                      <h3 className="font-semibold text-blue-700">
                        Recommendation {index + 1}
                      </h3>

                      <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />

                    </div>

                    <p className="leading-7 text-gray-700">
                      {item}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}