'use client';

import CartProvider from '@/context/CartContext';
import FavoritesProvider from '@/context/FavoritesContext';
import UserProvider from '@/context/UserContext';
import OrdersProvider from '@/context/OrdersContext';

export function AppProviders({ children }) {
  return (
    <UserProvider>
      <CartProvider>
        <FavoritesProvider>
          <OrdersProvider>{children}</OrdersProvider>
        </FavoritesProvider>
      </CartProvider>
    </UserProvider>
  );
}