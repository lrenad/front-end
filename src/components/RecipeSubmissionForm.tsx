"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { recipeSchema, RecipeFormInput } from "@/lib/schemas/recipe";

export default function RecipeSubmissionForm() {
  const [success, setSuccess] = useState("");
  const [generalError, setGeneralError] = useState("");

  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting } } =
    useForm<RecipeFormInput>({ resolver: zodResolver(recipeSchema) });

  async function onSubmit(data: RecipeFormInput) {
    setSuccess("");
    setGeneralError("");
    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.status === 422) {
        Object.entries(result.errors).forEach(([field, messages]) => {
          setError(field as any, { message: (messages as string[])[0] });
        });
        return;
      }
      if (!response.ok) throw new Error("Something went wrong");
      setSuccess("Recipe submitted successfully!");
      reset();
    } catch {
      setGeneralError("Failed to submit recipe.");
    }
  }

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-red-500 text-sm transition-colors";
  const errorClass = "text-red-500 dark:text-red-400 text-xs mt-1";

  const fields = [
    { name: "title",       placeholder: "Title",        type: "text"   },
    { name: "publisher",   placeholder: "Publisher",    type: "text"   },
    { name: "cookingTime", placeholder: "Cooking Time (mins)", type: "number" },
    { name: "servings",    placeholder: "Servings",     type: "number" },
    { name: "imageUrl",    placeholder: "Image URL",    type: "text"   },
  ] as const;

  return (
    <div className="max-w-xl mx-auto">

      {/* Alerts */}
      {generalError && (
        <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-sm px-4 py-3 rounded-lg mb-6">
          {generalError}
        </div>
      )}
      {success && (
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 text-sm px-4 py-3 rounded-lg mb-6">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {fields.map(({ name, placeholder, type }) => (
          <div key={name}>
            <input
              placeholder={placeholder}
              type={type}
              disabled={isSubmitting}
              {...register(name)}
              className={inputClass}
            />
            {errors[name] && (
              <p className={errorClass}>{errors[name]?.message}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-60 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Submit Recipe"}
        </button>
      </form>
    </div>
  );
}