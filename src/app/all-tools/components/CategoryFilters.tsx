"use client";

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) {
  return (
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
            activeCategory === category
              ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/20"
              : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:border-[#2563EB]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
