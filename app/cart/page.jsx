'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

const total = cartItems.reduce(
(sum: number, item: any) => sum + item.price * (item.quantity || 1),
0
);

if (!cartItems || cartItems.length === 0) {
return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <h1 className="text-3xl font-bold mb-4">הסל שלך ריק 🛒</h1>
    <Link href="/" className="text-blue-600 underline hover:text-blue-800 text-lg">
    חזרה לקניות
    </Link>
</div>
);
}

return (
<div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">סל הקניות שלך 🛒</h1>

        <div className="space-y-4">
            {cartItems.map((item: any) => (
            <div key={item.id + '-' + item.selectedSize + '-' + item.selectedColor}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-4 gap-4">
                <div className="flex items-center gap-4">
                    <img src={item.images?.[0] || item.image} alt={item.name}
                        className="w-20 h-20 object-contain rounded border" />
                    <div>
                        <p className="font-semibold text-lg">{item.name}</p>
                        {item.selectedSize && (
                        <p className="text-sm text-gray-600">
                            מידה: {item.selectedSize}
                        </p>
                        )}
                        {item.selectedColor && (
                        <p className="text-sm text-gray-600">
                            צבע: {item.selectedColor}
                        </p>
                        )}
                        <p className="text-green-600 font-bold mt-1">
                            ₪{item.price}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* כמות */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">כמות:</span>
                        <input type="number" min={1} value={item.quantity || 1} onChange={(e)=> {
                        const value = parseInt(e.target.value, 10);
                        if (!isNaN(value)) {
                        updateQuantity(item.id, value);
                        }
                        }}
                        className="w-16 border rounded px-2 py-1 text-center"
                        />
                    </div>

                    {/* כפתור מחיקה */}
                    <button onClick={()=> removeFromCart(item.id)}
                        className="text-red-600 hover:underline text-sm"
                        >
                        הסר
                    </button>
                </div>
            </div>
            ))}
        </div>

        {/* סיכום */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <button onClick={clearCart} className="text-red-600 hover:underline text-sm">
                נקה את כל הסל
            </button>

            <div className="text-xl font-bold">
                סה״כ לתשלום: <span className="text-green-600">₪{total}</span>
            </div>
        </div>

        <div className="mt-6 flex justify-between">
            <Link href="/" className="text-blue-600 underline hover:text-blue-800">
            ← חזרה לחנות
            </Link>

            <Link href="/checkout">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                המשך לתשלום
            </button>
            </Link>
        </div>
    </div>
</div>
);
}