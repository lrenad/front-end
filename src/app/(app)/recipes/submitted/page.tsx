"use client";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

type Recipe = {
  id: string;
  title: string;
  publisher: string;
  cookingTime: number;
  servings: number;
  imageUrl: string;
  submittedAt: string;
};

export default function SubmittedRecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("/api/recipes");
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch {
        setError("Could not load submitted recipes.");
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className={`${playfair.variable} pt-10 max-w-3xl mx-auto px-6`}>
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 animate-pulse">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-3" />
              <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/3 mb-2" />
              <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${playfair.variable} pt-10 max-w-3xl mx-auto px-6`}>
        <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className={`${playfair.variable} pt-10 max-w-3xl mx-auto px-6`}>

      {/* Heading */}
      <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 dark:text-white mb-2">
        Submitted Recipes
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
        {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"} submitted by the community.
      </p>

      {/* Empty state */}
      {recipes.length === 0 ? (
        <div className="text-center py-20 text-gray-400 dark:text-gray-600">
          <div className="text-5xl mb-4">🍽️</div>
          <p className="text-base">No recipes submitted yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:border-red-200 dark:hover:border-red-900 transition-colors"
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gray-900 dark:text-white mb-3">
                {recipe.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                  👤 {recipe.publisher}
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                  ⏱️ {recipe.cookingTime} mins
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                  🍽️ {recipe.servings} servings
                </span>
              </div>

              <p className="text-xs text-gray-400 dark:text-gray-600">
                Submitted on {new Date(recipe.submittedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}