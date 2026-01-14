"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const OrdersContext = createContext(null);

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) {
    throw new Error("useOrders must be used inside OrdersProvider");
  }
  return ctx;
}

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("orders");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);

  function addOrder(order) {
    setOrders((prev) => [...prev, order]);
  }

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
