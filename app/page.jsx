'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const products = [
  {
    id: '1',
    name: 'Adidas Campus',
    price: 399,
    image:
      'https://www.mayers.co.il/wp-content/uploads/2023/08/627ccb88-c62d-4621-ad27-7d81df7a935f.png',
  },
  {
    id: '13',
    name: 'Puma RS-X',
    price: 419,
    image: 'https://api.sportspirit.md/uploads/products/PU39192801.jpg',
  },
  {
    id: '19',
    name: 'New Balance 327',
    price: 449,
    image:
      'https://nb.scene7.com/is/image/NB/ms327cp_nb_02_i?$pdpflexf2$&wid=880&hei=880',
  },
];

const sliderImages = [
  'https://preview.redd.it/which-is-your-top-pair-of-2023-v0-tjgkgcm2v88c1.jpeg?width=1080&crop=smart&auto=webp&s=09adb58796614942beb758f981ec9c22d60cdfdd',
  'https://i.ebayimg.com/images/g/aMcAAOSwWhtgzetK/s-l1200.jpg',
  'https://media.gq.com/photos/60d21930430ae505071c3806/16:9/w_2560%2Cc_limit/SNEAKER_GUIDE_OPENER.jpg',
];

const categories = [
  {
    name: 'adidas',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
  },
  {
    name: 'nike',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  },
  {
    name: 'puma',
    image:
      'https://play-lh.googleusercontent.com/z_vCy-lqs9Sgwe9ZiVzKO4UpDBWTGUFKe_Pnv73lvgJkxuBhQwusfiLvk_l0NvJbEYk2',
  },
  {
    name: 'newbalance',
    image: 'https://www.orthopedix.co.il/files/tinymceuploads/new_balance.jpg',
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md p-4 text-center text-2xl font-bold">
        ברוכים הבאים לחנות הנעליים שלנו!
      </header>

      {/* Slider */}
      <section className="relative w-full max-w-5xl mx-auto mt-6 overflow-hidden rounded-lg shadow-lg h-[500px]">
        {sliderImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className={`
              absolute top-0 left-0 w-full h-full object-cover
              transition-opacity duration-1000
              ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            `}
          />
        ))}

        {/* נקודות ניווט */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-4 h-4 rounded-full ${
                idx === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* מוצרים */}
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-xl font-semibold mb-6">מוצרים מובילים</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain p-4"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price} ש&quot;ח</p>
                <Link
                  href={`/product/${product.id}`}
                  className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-center"
                >
                  לפרטים
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* קטגוריות */}
      <section className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-semibold mb-6 text-center">קטגוריות</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.name}`}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-24 h-24 object-contain mb-2"
              />
              <span className="capitalize text-gray-700 font-semibold">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}