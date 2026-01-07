'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';

export default function UserPage() {
  const { user, login, logout } = useUser();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert('נא למלא שם ואימייל');
      return;
    }

    login({ name, email });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">אזור אישי 👤</h1>

        {/* אם המשתמש מחובר */}
        {user ? (
          <div className="space-y-4">
            <p className="text-lg">
              שלום, <span className="font-semibold">{user.name}</span> 👋
            </p>
            <p className="text-gray-600">אימייל: {user.email}</p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/orders"
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                ההזמנות שלי 🧾
              </Link>
              <Link
                href="/favorites"
                className="px-4 py-2 rounded bg-pink-600 text-white hover:bg-pink-700"
              >
                המועדפים שלי ❤️
              </Link>
            </div>

            <button
              onClick={logout}
              className="mt-6 text-red-600 hover:underline text-sm"
            >
              התנתק
            </button>
          </div>
        ) : (
          // אם לא מחובר – טופס התחברות פשוט
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">שם</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="דניאל אברהם"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">אימייל</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              התחבר
            </button>
          </form>
        )}
      </div>
    </div>
  );
}