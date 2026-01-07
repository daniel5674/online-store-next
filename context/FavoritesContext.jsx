"use client";

import React, { createContext, useContext, useState } from "react";

// ---- יצירת הקונטקסט ---- //
const FavoritesContext = createContext(null);

// ---- Provider ---- //
export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(product) {
    setFavorites((prev) => {
      // אם המוצר כבר קיים – לא מוסיפים שוב
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  }

  function removeFromFavorites(id) {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  }

  function isFavorite(id) {
    return favorites.some((p) => p.id === id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// ---- Hook שימוש בקונטקסט ---- //
export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
