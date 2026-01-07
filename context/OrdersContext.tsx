'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;           // נשתמש במחרוזת
  items: OrderItem[];
  total: number;
  createdAt: string;    // נשמור בתור ISO string
  fullName: string;
  phone: string;
  address: string;
  note?: string;        // שדה אופציונלי
};

type OrdersContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const useOrders = () => {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error('useOrders must be used inside OrdersProvider');
  return ctx;
};

export default function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('orders');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}