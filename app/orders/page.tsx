'use client';

import React from 'react';
import { useOrders } from '@/context/OrdersContext';
import Link from 'next/link';

export default function OrdersPage() {
  const { orders } = useOrders() as { orders: any[] };

  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-3">ההזמנות שלי 📦</h1>
        <p className="text-gray-600 mb-4 text-center">
          עדיין לא ביצעת הזמנות במערכת.
        </p>
        <Link
          href="/"
          className="text-blue-600 underline hover:text-blue-800"
        >
          חזרה לחנות
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">ההזמנות שלי 📦</h1>

        <div className="space-y-4 max-h-[70vh] overflow-y-auto">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="border rounded-md p-3 flex flex-col gap-1"
            >
              <p className="text-sm text-gray-600">
                תאריך:{' '}
                <span className="font-semibold">
                  {new Date(order.createdAt).toLocaleString('he-IL')}
                </span>
              </p>
              <p className="text-sm">
                סה״כ:{' '}
                <span className="font-bold text-green-600">
                  ₪{order.total}
                </span>
              </p>
              <p className="text-xs text-gray-500">
                מספר פריטים: {order.items.length}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-blue-600 underline hover:text-blue-800"
          >
            חזרה לחנות
          </Link>
        </div>
      </div>
    </div>
  );
}