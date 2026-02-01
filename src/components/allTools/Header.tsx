"use client";

import { Bell, Settings, Box } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#101322]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#2563EB] p-1.5 rounded-lg text-white">
              <Box className="size-5" />
            </div>
            <h2
              className="text-gray-900 dark:text-white text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Toolbox
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="text-gray-500 hover:text-[#2563EB] text-sm font-semibold transition-colors"
              href="/"
            >
              Dashboard
            </Link>
            <Link
              className="text-[#2563EB] text-sm font-bold transition-colors"
              href="/all-tools"
            >
              All Tools
            </Link>
            <Link
              className="text-gray-500 hover:text-[#2563EB] text-sm font-semibold transition-colors"
              href="#"
            >
              Collections
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Bell className="size-5" />
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Settings className="size-5" />
            </button>
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-[#2563EB]/20 bg-linear-to-br from-amber-400 to-orange-500 ring-2 ring-white dark:ring-gray-800 shadow-sm cursor-pointer"></div>
        </div>
      </div>
    </header>
  );
}
