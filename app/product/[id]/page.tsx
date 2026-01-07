'use client';

import { use, useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import products from '@/data/products';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  // ⬅️ כאן אנחנו פותחים את ה-Promise של params
  const { id } = use(params);
  const productId = String(id);

  // למצוא את המוצר לפי ה-id
  const product = products.find((p: any) => String(p.id) === productId);

  const { addToCart } = useCart();
  const { favorites, addToFavorites } = useFavorites();

  const [mainImage, setMainImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [message, setMessage] = useState('');

  // לבדוק אם המוצר כבר במועדפים
  useEffect(() => {
    if (!product) return;
    const found = favorites.some((item: any) => item.id === product.id);
    setIsFavorite(found);
  }, [favorites, product]);

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 2500);
  };

  const handleAddToFavorites = () => {
    if (!product) return;

    if (!isFavorite) {
      addToFavorites(product);
      showMessage('המוצר נוסף למועדפים ✅');
    } else {
      showMessage('המוצר כבר במועדפים');
    }
  };

  const handleAddToCart = () => {
    if (!product) return;

    if (!selectedSize) {
      showMessage('אנא בחר מידה 🧍‍♂️');
      return;
    }

    addToCart({ ...product, selectedColor, selectedSize });
    showMessage('המוצר נוסף לסל 🛒');
  };

  // אם לא נמצא מוצר
  if (!product) {
    return (
      <div className="p-8 text-center text-red-600 text-xl font-semibold">
        ❌ המוצר לא נמצא (id: {productId})
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* תמונות */}
        <div className="w-full md:w-1/2">
          <img
            src={product.images[mainImage]}
            alt={product.name}
            className="rounded border"
            style={{ width: '300px', height: 'auto' }}
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`תמונה ${index + 1}`}
                onClick={() => setMainImage(index)}
                style={{
                  width: '50px',
                  height: '40px',
                  objectFit: 'cover',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  border:
                    mainImage === index
                      ? '2px solid #2563eb'
                      : '1px solid #d1d5db',
                }}
              />
            ))}
          </div>
        </div>

        {/* פרטי מוצר */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-2xl text-green-600 font-bold">₪{product.price}</p>
          <p className="text-sm text-gray-500">קטגוריה: {product.category}</p>

          {/* צבעים */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="font-semibold mb-2">בחר צבע:</p>
              <div className="flex gap-2">
                {product.colors.map((color: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition ${
                      selectedColor === color
                        ? 'border-black scale-110'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-gray-600 mt-2">
                  צבע נבחר: {selectedColor}
                </p>
              )}
            </div>
          )}

          {/* מידות */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <p className="font-semibold mb-2 mt-4">בחר מידה:</p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded transition ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white text-black border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-sm text-gray-600 mt-2">
                  מידה נבחרת: {selectedSize}
                </p>
              )}
            </div>
          )}

          {/* כפתורים */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            הוסף לסל 🛒
          </button>

          <button
            onClick={handleAddToFavorites}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition block mt-2"
          >
            {isFavorite ? 'כבר במועדפים ❤️' : 'הוסף למועדפים 🤍'}
          </button>

          {/* הודעה */}
          {message && (
            <div className="mt-4 p-2 bg-green-100 text-green-800 rounded font-semibold">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}