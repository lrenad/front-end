import { notFound } from "next/navigation";
import CookingTimer from "@/components/CookingTimer";
import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

async function getRecipe(id: string) {
  const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`, {
    cache: "no-store",
  });
  if (res.status === 404) notFound();
  if (!res.ok) notFound();
  const data = await res.json();
  return data.data.recipe;
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return (
    <div className={`${playfair.variable} max-w-3xl mx-auto px-6 py-10`}>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image
          src={recipe.image_url}
          alt={recipe.title}
          width={900}
          height={400}
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Title + Favorite */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-snug text-gray-900 dark:text-white">
          {recipe.title}
        </h1>
        <FavoriteButton
          id={recipe.id}
          title={recipe.title}
          publisher={recipe.publisher}
          image_url={recipe.image_url}
        />
      </div>

      {/* Meta pills */}
     {/* Meta pills */}
<div className="flex flex-wrap gap-3 mb-8">
  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm px-4 py-1.5 rounded-full shadow-sm">
    👤 {recipe.publisher}
  </span>
  <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm px-4 py-1.5 rounded-full shadow-sm">
    🍽️ {recipe.servings} servings
  </span>
  <span className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-sm px-4 py-1.5 rounded-full shadow-sm">
    ⏱️ {recipe.cooking_time} mins
  </span>
</div>

      {/* Timer */}
      <div className="mb-10">
        <CookingTimer minutes={recipe.cooking_time} />
      </div>

      {/* Ingredients */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
        <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gray-900 dark:text-white mb-5">
          Ingredients
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recipe.ingredients.map((ingredient: any, index: number) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-700 dark:text-gray-300 shadow-sm"
            >
              <span className="text-red-500 mt-0.5">•</span>
              <span>
                {ingredient.quantity ?? ""} {ingredient.unit}{" "}
                {ingredient.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}