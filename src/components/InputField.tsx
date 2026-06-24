"use client";

import { forwardRef } from "react";

type InputFieldProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<
  HTMLInputElement,
  InputFieldProps
>(({ label, error, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 text-black">
        {label}
      </label>

      <input
        ref={ref}
        {...props}
        className="w-full border rounded p-2 bg-white text-black"
      />

      {error && (
        <p className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
});

InputField.displayName = "InputField";

export default InputField;