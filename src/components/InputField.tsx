"use client";
import { forwardRef } from "react";

type InputFieldProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${
            error
              ? "border-red-400 dark:border-red-600 focus:border-red-500"
              : "border-gray-200 dark:border-gray-700 focus:border-red-500"
          }`}
        />
        {error && (
          <p className="text-red-500 dark:text-red-400 text-xs mt-1.5">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;