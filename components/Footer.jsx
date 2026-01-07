import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-6 mt-12">
      <div className="max-w-[1280px] mx-auto px-4 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Sneakers Style. כל הזכויות שמורות.</p>
        <p>נעליים איכותיות, משלוחים לכל הארץ ⭐👟</p>
      </div>
    </footer>
  );
}