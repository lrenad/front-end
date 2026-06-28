"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Recipe = {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
};

type Props = {
  initialRecipes: Recipe[];
};

export default function RecipeSearch({ initialRecipes }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [recipes, setRecipes] = useState(initialRecipes);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [loading, setLoading] = useState(false);

  async function handleSearch(term = searchTerm) {
    if (!term.trim()) return;
    try {
      setLoading(true);
      router.push(`/recipes?search=${term}`);
      const res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${term}`
      );
      const data = await res.json();
      setRecipes(data.data.recipes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!initialSearch) return;
    handleSearch(initialSearch);
  }, []);

  return (
    <div>
      {/* Search bar */}
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-red-500 text-sm transition-colors shadow-sm"
        />
        <button
          onClick={() => handleSearch()}
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Search
        </button>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm animate-pulse">
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Grid */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-red-300 dark:hover:border-red-800 hover:shadow-md shadow-sm transition-all block"
            >
              <div className="overflow-hidden">
                <Image
                  src={recipe.image_url}
                  alt={recipe.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-gray-900 dark:text-white text-base leading-snug mb-1 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                  {recipe.title}
                </h2>
                <p className="text-sm text-gray-400">
                  {recipe.publisher}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}