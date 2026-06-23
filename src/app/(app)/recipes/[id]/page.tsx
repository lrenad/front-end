import { notFound } from "next/navigation";
import CookingTimer from "@/components/CookingTimer";

async function getRecipe(id: string) {
  const res = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes/${id}`,
    {
      cache: "no-store",
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    notFound();
  }

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
    <div className="max-w-4xl mx-auto text-black"> 
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-64 rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">
        {recipe.title}
      </h1>

      <p className="mt-2">
        Publisher: {recipe.publisher}
      </p>

      <p>Servings: {recipe.servings}</p>

      <p>Cooking Time: {recipe.cooking_time} mins</p>
      <CookingTimer
      minutes={recipe.cooking_time}/>
      <h2 className="text-2xl font-bold mt-6">
        Ingredients
      </h2>

      <ul className="list-disc ml-6">
        {recipe.ingredients.map(
          (ingredient: any, index: number) => (
            <li key={index}>
              {ingredient.quantity ?? ""}{" "}
              {ingredient.unit}{" "}
              {ingredient.description}
            </li>
          )
        )}
      </ul>
    </div>
  );
}