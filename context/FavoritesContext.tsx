'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import type { Product } from '@/data/products';

// ---- Types ---- //
interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: string | number) => void;
  isFavorite: (id: string | number) => boolean;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

// ---- יצירת הקונטקסט ---- //
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// ---- Provider ---- //
export default function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToFavorites = (product: Product) => {
    setFavorites((prev) => {
      // אם המוצר כבר קיים – לא מוסיפים שוב
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromFavorites = (id: string | number) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  const isFavorite = (id: string | number) => {
    return favorites.some((p) => p.id === id);
  };

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
    throw new Error('useFavorites must be used inside FavoritesProvider');
  }

  return context;
}