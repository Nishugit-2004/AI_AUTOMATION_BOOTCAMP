import {
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  User,
} from "lucide-react";

interface ResumeSummaryCardProps {
  resume: {
    name: string;
    email: string;
    phone: string;
    education: string[];
    experience: string[];
  };
}

export default function ResumeSummaryCard({
  resume,
}: ResumeSummaryCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">

      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-full bg-blue-100 p-3">
          <User className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Resume Summary
          </h2>

          <p className="text-sm text-gray-500">
            AI extracted candidate information
          </p>
        </div>
      </div>

      <div className="space-y-6">

        <div className="flex items-start gap-3">
          <User className="mt-1 h-5 w-5 text-gray-500" />

          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-semibold text-gray-800">
              {resume.name}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 text-gray-500" />

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="break-all text-gray-700">
              {resume.email}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-gray-500" />

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-gray-700">
              {resume.phone}
            </p>
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />

            <h3 className="font-semibold text-gray-800">
              Education
            </h3>
          </div>

          <ul className="space-y-2">
            {resume.education.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-gray-50 px-4 py-3 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-green-600" />

            <h3 className="font-semibold text-gray-800">
              Experience
            </h3>
          </div>

          <ul className="space-y-2">
            {resume.experience.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-gray-50 px-4 py-3 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}