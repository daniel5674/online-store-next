// 'use client';

// import { use } from 'react';
// import products from '@/data/products';
// import Link from 'next/link';

// export default function CategoryPage({ params }) {
//   // לפתוח את ה-Promise של params
//   const { name } = use(params);

//   const category = name.toLowerCase();

//   const categoryProducts = products.filter(
//     (p) => p.category?.toLowerCase() === category
//   );

//   return (
//     <div className="p-8 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         קטגוריה: {category}
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {categoryProducts.map((product) => (
//           <Link
//             key={product.id}
//             href={`/product/${product.id}`}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
//           >
//             <img
//               src={product.images?.[0]}
//               alt={product.name}
//               className="w-full h-40 object-contain mb-4"
//             />
//             <h2 className="font-bold text-lg">{product.name}</h2>
//             <p className="text-green-600 font-semibold">₪{product.price}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import Link from 'next/link';

export default async function CategoryPage({ params }) {
  const category = params?.name?.toLowerCase();

  if (!category) {
    return <div className="p-8 text-center">קטגוריה לא נמצאה</div>;
  }

  const res = await fetch(
    `http://localhost:3000/api/products?category=${category}`,
    { cache: 'no-store' }
  );

  const products = await res.json();

  if (!products.length) {
    return (
      <div className="p-8 text-center text-xl">
        אין מוצרים בקטגוריה {category}
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        קטגוריה: {category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/product/${product._id}`}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={product.images?.[0]}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-green-600 font-semibold">₪{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}