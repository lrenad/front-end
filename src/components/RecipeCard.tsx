"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";

export interface RecipeCardProps {
  id: string;
  title: string;
  publisher: string;
  cookingTime: number;
  servings: number;
  imageUrl: string;
  status: "available" | "unavailable";
  onFavorite: (id: string) => void;
  notes?: string;
}

export default function RecipeCard({
  id,
  title,
  publisher,
  cookingTime,
  servings,
  imageUrl,
  status,
  onFavorite,
  notes,
}: RecipeCardProps) {
  const [noteText, setNoteText] = useState("");

  function handleNoteChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setNoteText(event.target.value);
  }

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-red-900">
            {title}
          </h2>

          <span
            className={`px-3 py-1 rounded text-white text-sm ${
              status === "available"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="text-gray-600 mb-2">
          Publisher: {publisher}
        </p>

        <p className="text-gray-600">
          Cooking Time: {cookingTime} mins
        </p>

        <p className="text-gray-600 mb-3">
          Servings: {servings}
        </p>

        {notes && (
          <div className="mb-3">
            <p className="font-semibold">
              Notes:
            </p>
            <p>{notes}</p>
          </div>
        )}

        <input
          type="text"
          placeholder="Add a quick note..."
          value={noteText}
          onChange={handleNoteChange}
          className="w-full border rounded p-2 mb-3"
        />

        <p className="text-sm text-gray-500 mb-3">
          Current Note: {noteText}
        </p>

        <button
          onClick={() => onFavorite(id)}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-900"
        >
          Favorite
        </button>
      </div>
    </div>
  );
}