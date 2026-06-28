"use client";
import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "@/context/FavoritesContext";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className={`${playfair.variable} max-w-4xl mx-auto px-6 pt-10`}>

      {/* Heading */}
      <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 dark:text-white mb-2">
        My Favorites
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        {favorites.length} saved {favorites.length === 1 ? "recipe" : "recipes"}
      </p>

      {/* Empty state */}
      {favorites.length === 0 ? (
        <div className="text-center py-24 text-gray-400 dark:text-gray-600">
          <div className="text-5xl mb-4">🤍</div>
          <p className="text-base">No favorite recipes yet.</p>
          <Link
            href="/recipes"
            className="inline-block mt-4 text-sm text-red-700 dark:text-red-400 hover:underline"
          >
            Browse recipes →
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {favorites.map((recipe) => (
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
                <h2 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-gray-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors mb-1">
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