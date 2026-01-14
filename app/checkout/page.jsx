'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useOrders } from '@/context/OrdersContext';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const { addOrder } = useOrders();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !phone || !address) {
      alert('אנא מלא שם, טלפון וכתובת');
      return;
    }

    const newOrder = {
      id: Date.now().toString(),
      fullName,
      phone,
      address,
      note,
      total,
      items: cartItems,
      createdAt: new Date().toISOString(),
    };

    addOrder(newOrder);

    setSubmitted(true);
    clearCart();
  };

  if ((!cartItems || cartItems.length === 0) && !submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">הסל שלך ריק 🛒</h1>
        <Link href="/" className="text-blue-600 underline hover:text-blue-800 text-lg">
          חזרה לקניות
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">תודה על ההזמנה! ✅</h1>
          <p className="mb-4">
            ההזמנה התקבלה למערכת. ניצור איתך קשר בטלפון: <br />
            <span className="font-semibold">{phone}</span>
          </p>
          <Link href="/" className="text-blue-600 underline hover:text-blue-800 text-lg">
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[2fr,1.5fr]">
        {/* טופס פרטים */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">פרטי משלוח ותשלום</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">שם מלא</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="לדוגמה: דניאל אברהם"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">טלפון</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="05x-xxxxxxx"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">כתובת</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="רחוב, מספר, עיר"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                הערות להזמנה (לא חובה)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                placeholder="לדוגמה: להשאיר אצל השכן, בניין בלי מעלית וכו'..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition text-lg font-semibold"
            >
              אישור הזמנה
            </button>
          </form>
        </div>

        {/* סיכום הזמנה */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">סיכום הזמנה</h2>

          <div className="space-y-3 max-h-80 overflow-y-auto border-b pb-4 mb-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.images?.[0] || item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain rounded border"
                  />
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    {item.selectedSize && (
                      <p className="text-xs text-gray-600">מידה: {item.selectedSize}</p>
                    )}
                    {item.selectedColor && (
                      <p className="text-xs text-gray-600">צבע: {item.selectedColor}</p>
                    )}
                  </div>
                </div>

                <div className="text-right text-sm">
                  <p>כמות: {item.quantity || 1}</p>
                  <p className="font-semibold">₪{item.price * (item.quantity || 1)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>סה״כ לתשלום:</span>
            <span className="text-green-600">₪{total}</span>
          </div>

          <div className="mt-4 text-center">
            <Link href="/cart" className="text-blue-600 underline hover:text-blue-800 text-sm">
              ← חזרה לסל
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}