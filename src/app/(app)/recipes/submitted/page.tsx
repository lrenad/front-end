"use client";

import {
  useEffect,
  useState,
} from "react";

export default function SubmittedRecipesPage() {
  const [recipes, setRecipes] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadRecipes() {
      try {
        const response =
          await fetch(
            "/api/recipes/submissions"
          );

        const data =
          await response.json();

        setRecipes(data.recipes);
      } catch {
        setError(
          "Failed to load recipes"
        );
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return (
      <p className="text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-red-900">
        Submitted Recipes
      </h1>

      <div className="grid gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="font-bold">
              {recipe.title}
            </h2>

            <p>
              Publisher:{" "}
              {recipe.publisher}
            </p>

            <p>
              Cooking Time:{" "}
              {recipe.cookingTime} mins
            </p>

            <p>
              Servings:{" "}
              {recipe.servings}
            </p>

            <p>
              Submitted:
              {" "}
              {new Date(
                recipe.submittedAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}