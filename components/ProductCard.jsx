'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const isFav = favorites.some((item) => item.id === product.id);
    setIsFavorite(isFav);
  }, [favorites, product.id]);

  const handleImageHover = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMessage('המוצר נוסף לסל ✅');

    setTimeout(() => setSuccessMessage(''), 2500);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition duration-300 flex gap-4">
      <Link href={`/product/${product.id}`} className="flex-shrink-0">
        <img
          src={product.images?.[currentImage]}
          alt={product.name}
          onMouseEnter={handleImageHover}
          className="w-[60px] h-[60px] object-cover rounded-md"
        />
      </Link>

      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold mb-2">
              <Link
                href={`/product/${product.id}`}
                className="block text-black transition-all duration-200 hover:text-blue-800 hover:scale-105 active:text-blue-600"
              >
                {product.name}
              </Link>
            </h3>

            <button onClick={toggleFavorite} className="text-2xl leading-none">
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>

          <p className="text-gray-600 text-sm">
            <Link href={`/category/${product.category}`}>{product.category}</Link>
          </p>
          <p className="mt-1 font-bold text-green-600">₪{product.price}</p>
        </div>

        {successMessage && (
          <div className="mb-2 text-green-700 font-semibold">
            {successMessage}
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-start"
        >
          הוסף לסל 🛒
        </button>
      </div>
    </div>
  );
}