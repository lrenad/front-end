"use client"; //client comp.

import { useState } from "react"; //hook

type Recipe = {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
};

type Props = {
  initialRecipes: Recipe[];
};

export default function RecipeSearch({
  initialRecipes,
}: Props) {
  const [recipes, setRecipes] =
    useState(initialRecipes);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSearch() {
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`
      );

      const data = await res.json();

      setRecipes(data.data.recipes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex gap-2 mb-6 text-red-900">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="border p-2 rounded flex-1"
        />

        <button
          onClick={handleSearch}
          className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-900"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-red-900">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg overflow-hidden shadow"
          >
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg">
                {recipe.title}
              </h2>

              <p className="text-gray-500">
                {recipe.publisher}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}