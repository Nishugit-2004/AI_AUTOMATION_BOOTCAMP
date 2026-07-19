"use client";

import { CheckCircle, FileText, Upload } from "lucide-react";

interface FileInputProps {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
}

export default function FileInput({
  label,
  file,
  onChange,
}: FileInputProps) {
  return (
    <div className="w-full">

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <label
        className="
          flex cursor-pointer flex-col items-center
          justify-center rounded-xl border-2 border-dashed
          border-gray-300 bg-gray-50 p-8
          transition-all duration-300
          hover:border-blue-500
          hover:bg-blue-50
        "
      >
        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) =>
            onChange(
              e.target.files ? e.target.files[0] : null
            )
          }
        />

        {!file ? (
          <>
            <Upload className="mb-3 h-10 w-10 text-blue-600" />

            <p className="font-semibold text-gray-700">
              Click to upload PDF
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Resume or Job Description
            </p>
          </>
        ) : (
          <>
            <CheckCircle className="mb-3 h-10 w-10 text-green-600" />

            <FileText className="mb-2 h-8 w-8 text-gray-700" />

            <p className="max-w-full break-all text-center font-semibold text-green-700">
              {file.name}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Click to replace file
            </p>
          </>
        )}
      </label>
    </div>
  );
}