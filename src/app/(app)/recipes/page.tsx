import RecipeSearch from "@/components/RecipeSearch";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export type Recipe = {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
};

async function getRecipes(search = "pasta") {
  const res = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes?search=${search}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch recipes");
  const data = await res.json();
  return data.data.recipes;
}

export default async function RecipesPage() {
  const initialRecipes = await getRecipes("pasta");
  return (
    <div className={playfair.variable}>
      <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Recipes
      </h1>
      <RecipeSearch initialRecipes={initialRecipes} />
    </div>
  );
}