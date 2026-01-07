"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";

// ---- Types ----
type User = {
  name: string;
  email: string;
} | null;

type UserContextType = {
  user: User;
  login: (userData: User) => void;
  logout: () => void;
};

// ---- יצירת הקונטקסט ----
const UserContext = createContext<UserContextType | undefined>(undefined);

// ---- הוק לשימוש בקונטקסט ----
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside <UserProvider>");
  }
  return context;
};

// ---- Provider ----
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  // טוען משתמש מ-localStorage בתחילת הדרך (בדפדפן בלבד)
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

  const login = (userData: User) => {
    setUser(userData);
    if (typeof window !== "undefined" && userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;