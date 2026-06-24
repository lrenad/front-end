"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  recipeSchema,
  RecipeFormInput,
} from "@/lib/schemas/recipe";

export default function RecipeSubmissionForm() {
  const [success, setSuccess] =
    useState("");

  const [generalError, setGeneralError] =
    useState("");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RecipeFormInput>({
    resolver: zodResolver(recipeSchema),
  });

  async function onSubmit(
    data: RecipeFormInput
  ) {
    setSuccess("");
    setGeneralError("");

    try {
      const response = await fetch(
        "/api/recipes/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result =
        await response.json();

      if (response.status === 422) {
        Object.entries(
          result.errors
        ).forEach(([field, messages]) => {
          setError(field as any, {
            message: (
              messages as string[]
            )[0],
          });
        });

        return;
      }

      if (!response.ok) {
        throw new Error(
          "Something went wrong"
        );
      }

      setSuccess(
        "Recipe submitted successfully!"
      );

      reset();
    } catch {
      setGeneralError(
        "Failed to submit recipe."
      );
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      {generalError && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
          {generalError}
        </div>
      )}

      {success && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          {success}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          placeholder="Title"
          disabled={isSubmitting}
          {...register("title")}
          className="w-full border p-2 rounded bg-white text-black"
        />

        <p className="text-red-600">
          {errors.title?.message}
        </p>

        <input
          placeholder="Publisher"
          disabled={isSubmitting}
          {...register("publisher")}
          className="w-full border p-2 rounded bg-white text-black"
        />

        <p className="text-red-600">
          {errors.publisher?.message}
        </p>

        <input
          placeholder="Cooking Time"
          type="number"
          disabled={isSubmitting}
          {...register("cookingTime")}
          className="w-full border p-2 rounded bg-white text-black"
        />

        <p className="text-red-600">
          {errors.cookingTime?.message}
        </p>

        <input
          placeholder="Servings"
          type="number"
          disabled={isSubmitting}
          {...register("servings")}
          className="w-full border p-2 rounded bg-white text-black"
        />

        <p className="text-red-600">
          {errors.servings?.message}
        </p>

        <input
          placeholder="Image URL"
          disabled={isSubmitting}
          {...register("imageUrl")}
          className="w-full border p-2 rounded bg-white text-black"
        />

        <p className="text-red-600">
          {errors.imageUrl?.message}
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-700 text-white px-4 py-2 rounded"
        >
          {isSubmitting
            ? "Submitting..."
            : "Submit Recipe"}
        </button>
      </form>
    </div>
  );
}