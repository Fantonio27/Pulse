"use client";

import { useState } from "react";
import {
  Header,
  PageHeader,
  Toolbar,
  CategoryFilters,
  ToolListItem,
  ToolGridItem,
  ThemeToggle,
  AddToolModal,
} from "@/components/allTools";
import { toolsData, categories, categoryColors } from "@/constants/allTools";

const categoryColorMap: Record<string, string> = {
  Design: "purple",
  Productivity: "blue",
  Development: "slate",
  Marketing: "emerald",
  Writing: "orange",
};

export default function AllToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [tools, setTools] = useState(toolsData);
  const [isDark, setIsDark] = useState(false);
  const [isAddToolModalOpen, setIsAddToolModalOpen] = useState(false);

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setTools(tools.map((tool) => (tool.id === id ? { ...tool, starred: !tool.starred } : tool)));
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleAddTool = (toolData: {
    name: string;
    description: string;
    category: string;
    tags: string[];
    iconUrl: string;
    url: string;
  }) => {
    const newTool = {
      id: Math.max(...tools.map((t) => t.id)) + 1,
      name: toolData.name,
      description: toolData.description,
      category: toolData.category,
      categoryColor: categoryColorMap[toolData.category] || "slate",
      tags: toolData.tags,
      iconUrl: toolData.iconUrl,
      starred: false,
      url: toolData.url,
    };
    setTools([newTool, ...tools]);
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-[#101322] transition-colors duration-300`}>
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <PageHeader onAddToolClick={() => setIsAddToolModalOpen(true)} />

        <Toolbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Tool List View */}
        {viewMode === "list" ? (
          <div className="flex flex-col gap-3">
            {filteredTools.map((tool) => (
              <ToolListItem
                key={tool.id}
                tool={tool}
                categoryColors={categoryColors}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTools.map((tool) => (
              <ToolGridItem
                key={tool.id}
                tool={tool}
                categoryColors={categoryColors}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}

        {/* Footer / Load More */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm font-semibold cursor-pointer hover:bg-white dark:hover:bg-gray-900 transition-all">
            Load More Tools
          </button>
        </div>
      </main>

      <ThemeToggle isDark={isDark} onToggle={toggleDarkMode} />

      {/* Add Tool Modal */}
      <AddToolModal
        isOpen={isAddToolModalOpen}
        onClose={() => setIsAddToolModalOpen(false)}
        onAddTool={handleAddTool}
      />
    </div>
  );
}

