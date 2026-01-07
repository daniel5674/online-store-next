'use client';

import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  if (!favorites || favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">אין מוצרים במועדפים ❤️</h1>
        <Link
          href="/"
          className="text-blue-600 underline hover:text-blue-800 text-lg"
        >
          לחזרה לקניות
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          המועדפים שלך ❤️
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((item: any) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition flex flex-col"
            >
              <img
                src={item.images?.[0] || item.image}
                alt={item.name}
                className="w-full h-40 object-contain mb-4"
              />

              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-green-600 font-semibold">₪{item.price}</p>

              {/* כפתורים */}
              <div className="flex justify-between mt-4">
                <Link
                  href={`/product/${item.id}`}
                  className="text-blue-600 underline"
                >
                  לפרטים
                </Link>

                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="text-red-600 hover:underline"
                >
                  הסר
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}