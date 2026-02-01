"use client";

import { Plus } from "lucide-react";

export default function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      <div className="flex flex-col gap-0.5">
        <h1
          className="text-gray-900 dark:text-white text-3xl font-black tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          All Tools
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-md">
          Organized access to your favorite digital resources.
        </p>
      </div>
      <button className="flex items-center justify-center gap-1 bg-[#2563EB] text-sm text-white font-semibold px-5 py-3 rounded-full hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-[#2563EB]/30 transition-all active:scale-95">
        <Plus className="size-5" />
        <span>Add New Tool</span>
      </button>
    </div>
  );
}
