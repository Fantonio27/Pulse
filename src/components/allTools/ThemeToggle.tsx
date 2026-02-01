"use client";

import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={onToggle}
        className="size-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform"
      >
        <Moon className="size-5 dark:hidden" />
        <Sun className="size-5 hidden dark:block" />
      </button>
    </div>
  );
}
