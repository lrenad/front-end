import RecipeSearch from "@/components/RecipeSearch";

export type Recipe = {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
};

async function getRecipes(search = "pizza") {
  const res = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes?search=${search}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await res.json();

  return data.data.recipes;
}

export default async function RecipesPage() {
  const initialRecipes = await getRecipes("pizza");

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-red-900">
        Recipes
      </h1>

      <RecipeSearch initialRecipes={initialRecipes} />
    </div>
  );
}
console.log("SERVER FETCH");