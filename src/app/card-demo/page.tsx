"use client";

import RecipeCard from "@/components/RecipeCard";

export default function CardDemoPage() {
  function handleFavorite(id: string) {
    alert(`Favorited recipe ${id}`);
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <RecipeCard
        id="pizza-123"
        title="Homemade Pizza"
        publisher="Forkify"
        imageUrl="https://picsum.photos/600/400"
        cookingTime={30}
        servings={4}
        status="available"
        notes="Great dinner"
        onFavorite={handleFavorite}
      />
    </div>
  );
}