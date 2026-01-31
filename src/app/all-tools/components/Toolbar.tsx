"use client";

import { Search, ArrowUpDown, ChevronDown, LayoutGrid, List } from "lucide-react";

interface ToolbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: "list" | "grid";
  onViewModeChange: (mode: "list" | "grid") => void;
}

export default function Toolbar({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
}: ToolbarProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-3 mb-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row gap-4">
      {/* Search */}
      <div className="flex-1 px-2">
        <label className="relative flex items-center w-full group">
          <div className="absolute left-4 text-gray-400 group-focus-within:text-[#2563EB] transition-colors">
            <Search className="size-5" />
          </div>
          <input
            className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-2xl h-12 pl-12 pr-4 text-base focus:ring-2 text-gray-600 focus:ring-[#2563EB]/20 placeholder:text-gray-400 dark:text-white focus:outline-none"
            placeholder="Search your toolbox by name, category, or tag..."
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </label>
      </div>
      <div className="flex items-center gap-3 px-2 overflow-x-auto pb-1 lg:pb-0">
        {/* Sort Dropdown */}
        <button className="flex items-center gap-2 px-4 h-12 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
          <ArrowUpDown className="size-4" />
          <span>Recently Added</span>
          <ChevronDown className="size-4" />
        </button>
        {/* View Toggle */}
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden lg:block cursor-pointer"></div>
        <div className="flex gap-2">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`flex items-center justify-center px-4 h-10 rounded-full transition-colors ${
              viewMode === "grid"
                ? "bg-[#2563EB]/10 text-[#2563EB]"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 hover:text-[#2563EB]"
            }`}
          >
            <LayoutGrid className="size-5" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`flex items-center justify-center px-4 h-10 rounded-full transition-colors cursor-pointer ${
              viewMode === "list"
                ? "bg-[#2563EB]/10 text-[#2563EB]"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 hover:text-[#2563EB]"
            }`}
          >
            <List className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
