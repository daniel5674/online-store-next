'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useUser } from '@/context/UserContext';

export default function Navbar() {
  const { cartItems } = useCart();
  const { favorites } = useFavorites();
  const { user } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const cartCount =
    cartItems?.reduce(
      (sum: number, item: any) => sum + (item.quantity || 1),
      0
    ) || 0;

  const favoritesCount = favorites?.length || 0;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur shadow-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* לוגו */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="text-2xl font-extrabold tracking-tight">
            Sneakers
            <span className="text-blue-600">Store</span>
          </span>
        </Link>

        {/* לינקים מרכזיים – דסקטופ */}
        <div className="hidden md:flex items-center gap-4 text-sm lg:text-base">
          <Link href="/category/adidas" className="hover:text-blue-600 transition">
            Adidas
          </Link>
          <Link href="/category/nike" className="hover:text-blue-600 transition">
            Nike
          </Link>
          <Link href="/category/puma" className="hover:text-blue-600 transition">
            Puma
          </Link>
          <Link
            href="/category/newbalance"
            className="hover:text-blue-600 transition"
          >
            New Balance
          </Link>
        </div>

        {/* אייקונים – דסקטופ */}
        <div className="hidden md:flex items-center gap-3 text-sm lg:text-base">
          {/* מועדפים */}
          <Link
            href="/favorites"
            className="relative flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 hover:border-pink-400 hover:bg-pink-50 transition"
          >
            <span>❤️</span>
            <span className="hidden sm:inline">מועדפים</span>
            {favoritesCount > 0 && (
              <span className="ml-1 text-xs font-semibold text-pink-600">
                ({favoritesCount})
              </span>
            )}
          </Link>

          {/* סל */}
          <Link
            href="/cart"
            className="relative flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 hover:border-green-400 hover:bg-green-50 transition"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">סל</span>
            {cartCount > 0 && (
              <span className="ml-1 text-xs font-semibold text-green-700">
                ({cartCount})
              </span>
            )}
          </Link>

          {/* ההזמנות שלי */}
          <Link
            href="/orders"
            className="relative flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 transition"
          >
            <span>📦</span>
            <span className="hidden sm:inline">ההזמנות שלי</span>
          </Link>

          {/* משתמש */}
          <Link
            href="/user"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
          >
            <span>👤</span>
            <span className="hidden sm:inline">
              {user ? user.name : 'התחברות'}
            </span>
          </Link>
        </div>

        {/* תפריט המבורגר – מובייל */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          onClick={toggleMenu}
          aria-label="תפריט"
        >
          {isOpen ? (
            <span className="text-xl font-bold">✕</span>
          ) : (
            <span className="text-2xl font-bold">☰</span>
          )}
        </button>
      </nav>

      {/* תפריט מובייל */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            {/* קטגוריות */}
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/category/adidas"
                onClick={closeMenu}
                className="block py-1 hover:text-blue-600"
              >
                Adidas
              </Link>
              <Link
                href="/category/nike"
                onClick={closeMenu}
                className="block py-1 hover:text-blue-600"
              >
                Nike
              </Link>
              <Link
                href="/category/puma"
                onClick={closeMenu}
                className="block py-1 hover:text-blue-600"
              >
                Puma
              </Link>
              <Link
                href="/category/newbalance"
                onClick={closeMenu}
                className="block py-1 hover:text-blue-600"
              >
                New Balance
              </Link>
            </div>

            <hr className="border-gray-200" />

            {/* מועדפים / סל / הזמנות / משתמש */}
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/favorites"
                onClick={closeMenu}
                className="flex items-center justify-between py-1"
              >
                <span>❤️ מועדפים</span>
                {favoritesCount > 0 && (
                  <span className="text-xs font-semibold text-pink-600">
                    ({favoritesCount})
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center justify-between py-1"
              >
                <span>🛒 סל</span>
                {cartCount > 0 && (
                  <span className="text-xs font-semibold text-green-700">
                    ({cartCount})
                  </span>
                )}
              </Link>

              <Link
                href="/orders"
                onClick={closeMenu}
                className="flex items-center justify-between py-1"
              >
                <span>📦 ההזמנות שלי</span>
              </Link>

              <Link
                href="/user"
                onClick={closeMenu}
                className="flex items-center justify-between py-1"
              >
                <span>👤 משתמש</span>
                <span className="text-xs text-gray-600">
                  {user ? user.name : 'התחברות'}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}