"use client";

import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 opacity-0"
        aria-label="Loading theme toggle"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <BsMoon className="w-5 h-5 text-gray-800" />
      ) : (
        <BsSun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}
