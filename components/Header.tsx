'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const { user } = useUser();
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center relative">
      {/* לוגו / שם אתר */}
      <Link href="/" className="text-2xl font-bold text-blue-700 hover:underline">
        סניקרס סטייל ⭐👟
      </Link>

      {/* צד ימין – כפתור תפריט + סטטוס משתמש */}
      <div className="flex items-center gap-6">
        {user && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded cursor-default select-none">
            מחובר
          </span>
        )}

        <button
          className="text-3xl text-gray-600 hover:text-blue-600"
          onClick={() => setMenuOpen(true)}
          aria-label="פתח תפריט"
        >
          ☰
        </button>
      </div>

      {/* תפריט נפתח */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border rounded shadow p-2 z-50 w-48">
          <button
            className="text-xs text-gray-600 hover:text-red-500 absolute top-1 right-2"
            onClick={() => setMenuOpen(false)}
            aria-label="סגור תפריט"
          >
            &times;
          </button>

          <div className="pt-6 space-y-1">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              דף הבית 🏠
            </Link>

            {user ? (
              <Link href="/user" className="block text-gray-700 hover:text-blue-600">
                אזור אישי
              </Link>
            ) : (
              <Link href="/user" className="block text-gray-700 hover:text-blue-600">
                התחבר
              </Link>
            )}

            <Link href="/favorites" className="block text-gray-700 hover:text-pink-600">
              מועדפים ❤️
            </Link>

            <Link href="/cart" className="block text-gray-700 hover:text-blue-600">
              עגלה 🛒 ({cartItems.length})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;