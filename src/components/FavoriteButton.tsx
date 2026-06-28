"use client";
import { useFavorites } from "@/context/FavoritesContext";
import { useState } from "react";

type FavoriteButtonProps = {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
};

export default function FavoriteButton({ id, title, publisher, image_url }: FavoriteButtonProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(id);
  const [animating, setAnimating] = useState(false);

  function handleClick() {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, title, publisher, image_url });
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      className="group relative p-2 rounded-full transition-colors hover:bg-red-50 dark:hover:bg-red-950"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-7 h-7 transition-all duration-300 ${
          animating ? "scale-125" : "scale-100"
        } ${
          favorite
            ? "fill-red-600 stroke-red-600"
            : "fill-none stroke-gray-400 dark:stroke-gray-500 group-hover:stroke-red-500"
        }`}
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.5c0-2.485-2.015-4.5-4.5-4.5A4.478 4.478 0 0 0 12 6.262 4.478 4.478 0 0 0 7.5 4C5.015 4 3 6.015 3 8.5c0 5.5 9 11 9 11s9-5.5 9-11Z"
        />
      </svg>
    </button>
  );
}