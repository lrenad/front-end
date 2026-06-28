"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type FavoriteRecipe = {
  id: string;
  title: string;
  image_url: string;
  publisher: string;
};

type FavoritesContextType = {
  favorites: FavoriteRecipe[];
  addFavorite: (
    recipe: FavoriteRecipe
  ) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext =
  createContext<FavoritesContextType | null>(
    null
  );

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] =
    useState<FavoriteRecipe[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function addFavorite(
    recipe: FavoriteRecipe
  ) {
    setFavorites((prev) => {
      if (
        prev.some(
          (r) => r.id === recipe.id
        )
      ) {
        return prev;
      }

      return [...prev, recipe];
    });
  }

  function removeFavorite(id: string) {
    setFavorites((prev) =>
      prev.filter((r) => r.id !== id)
    );
  }

  function isFavorite(id: string) {
    return favorites.some(
      (r) => r.id === id
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context =
    useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used inside FavoritesProvider"
    );
  }

  return context;
}