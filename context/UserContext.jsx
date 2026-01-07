"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// ---- יצירת הקונטקסט ----
const UserContext = createContext(null);

// ---- הוק לשימוש בקונטקסט ----
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside <UserProvider>");
  }
  return context;
}

// ---- Provider ----
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // טוען משתמש מ-localStorage (בדפדפן בלבד)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        console.error("Failed to parse stored user");
      }
    }
  }, []);

  function login(userData) {
    setUser(userData);
    if (typeof window !== "undefined" && userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  }

  function logout() {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
