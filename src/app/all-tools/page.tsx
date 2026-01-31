"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  Plus,
  ArrowUpDown,
  ChevronDown,
  LayoutGrid,
  List,
  Pencil,
  Heart,
  ExternalLink,
  Moon,
  Sun,
  Box,
} from "lucide-react";

// Tool data with categories and tags
const toolsData = [
  {
    id: 1,
    name: "Figma",
    description: "Collaborative design and prototyping tool.",
    category: "Design",
    categoryColor: "purple",
    tags: ["#UI", "#Prototype"],
    iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS4hqV_ns5SbGm_f1qujYagEUZ_BJzWtNyly0DvV_2eBYbhMjGP14Ay1P9z3BbUOjhp2CM7fkUKzYdntO4mdjQD7MLgxVEd4h7LrrjFoMvUsG29j6wdMtPyiDOH9oihFEA7_4eu1eZUNSu2Ey2BYME9UkWW2_hLRdUaw5kqsBaNX7bK9vifry1GuGxhbEKAYLQwjDS-HNaZLseXFOYIGSjOYwUA6VwqQNiHhP2UJrZnKmRKl2g8fMYoHa-KPsGbW0qUjuQUyO24AM",
    starred: false,
    url: "https://figma.com",
  },
  {
    id: 2,
    name: "Notion",
    description: "The all-in-one workspace for notes & docs.",
    category: "Productivity",
    categoryColor: "blue",
    tags: ["#Notes", "#Wiki"],
    iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOp8m3GjP-C-Viwh5rpM7anNmLLQOE9x9lleLOMnBeN250MBeir35wD9Xl-ed-jD_IHF_OXTIPRCDTUd1JH_kq5UE0zWNcylT2FFXuPxncUYTi64ftrzHd-lEvPKFmCiLZCNM3H56nvwRh9K0o2J22Nah46tudtOzUTrdTWMOL5dKcLygDKFFoGL5x5vWoUOImnuux6UivYuco6CjWLfsHTjS7ldA2TS7qnMJzTLPM70WP7oMnhT3z_9r3i5m7wP4mgaS1an0jVX8",
    starred: true,
    url: "https://notion.so",
  },
  {
    id: 3,
    name: "GitHub",
    description: "Version control and source code hosting.",
    category: "Development",
    categoryColor: "slate",
    tags: ["#Git", "#Code"],
    iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9uvkSd-3fI09u0lGB6jKuLLlyscLSFh2YuLSkHP74uCVly9gK5vHzsrFGffPdIxKIJtBFtYEAv0RhHEMSyX4txaz3RW0viwG7GRhhPLOHqLj7vK2iqh9jVg4dZ5hGmVu-HMSByPM40ft-sd90DT6pqVdKF_d2uMwzTgDHOttLABEa6r9WGCmggc5MuU1Zy75TzY8Ihsvy_Bjc14s6byP2ssKr2WYo_hBY2fUmRA0DTIKTOxBa-WckRNmNEMiyHN2tLdnmg2LUQVc",
    starred: false,
    url: "https://github.com",
  },
  {
    id: 4,
    name: "Substack",
    description: "Email newsletters and publishing platform.",
    category: "Writing",
    categoryColor: "orange",
    tags: ["#Journalism"],
    iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFzhCgS2B8dNj2vtS5d4i36SgeWE41jvoAgajYGL-17XgRta8D5OFasEXuLIQWrBVY5ER9MBhrVgfWHC39ix_C9wmMZqxuJvQrRuLJGBB92Ny4ExPtRZLilmBXHegdzTPbrDtJaWsjuPMAtl71XIfxPD-XJ7Ieh-OnBXSJpwxuDeobSNTGyjHLEDKHdkboluxyAl9PWRuuD7UeN-q28V0c7mTl8i5iKbjZHex-rlMTlYUh0Jow-vTPCVS55q8VjqW-ksOR4GBnoM",
    starred: true,
    url: "https://substack.com",
  },
  {
    id: 5,
    name: "Mailchimp",
    description: "Email marketing and automation platform.",
    category: "Marketing",
    categoryColor: "emerald",
    tags: ["#Email", "#Automation"],
    iconUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFXtTSiOpJHzxeUit0u7DyRzbNXCAATrVk0XKb8CG0YgvzjjpwiVrp4w5Ba0Qvn5cZYFrzdlRyyHz1Ni_OjKensBxCGBqv53xlW37Q4NfckjyOL7_cM-eFutCxRCmTKAZmK4UNpEJXbMYxzaBdZT4rEv9tl1x0OOw_H7hA9AewAKxd3VKrt1rp-JHCcXQS1b3uto2SSra21bmAVX__m71iWYj4-5RtwlQjMHdj3wLvLVUkjjhmPWy_FtA7kmjiseGawDpkFlXr_hk",
    starred: false,
    url: "https://mailchimp.com",
  },
];

const categories = ["All", "Design", "Productivity", "Development", "Marketing", "Writing"];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  purple: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-700 dark:text-purple-300", border: "border-purple-100 dark:border-purple-800" },
  blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300", border: "border-blue-100 dark:border-blue-800" },
  slate: { bg: "bg-slate-100 dark:bg-slate-800/50", text: "text-slate-700 dark:text-slate-300", border: "border-slate-100 dark:border-slate-700" },
  orange: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-700 dark:text-orange-300", border: "border-orange-100 dark:border-orange-800" },
  emerald: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-100 dark:border-emerald-800" },
};

export default function AllToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [tools, setTools] = useState(toolsData);
  const [isDark, setIsDark] = useState(false);

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

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-[#101322] transition-colors duration-300`}>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#101322]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#2563EB] p-1.5 rounded-lg text-white">
                <Box className="size-5" />
              </div>
              <h2 className="text-gray-900 dark:text-white text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Toolbox
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-gray-500 hover:text-[#2563EB] text-sm font-semibold transition-colors" href="/">
                Dashboard
              </a>
              <a className="text-[#2563EB] text-sm font-bold transition-colors" href="/all-tools">
                All Tools
              </a>
              <a className="text-gray-500 hover:text-[#2563EB] text-sm font-semibold transition-colors" href="#">
                Collections
              </a>
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
            <div
              className="h-10 w-10 rounded-full border-2 border-[#2563EB]/20 bg-gradient-to-br from-amber-400 to-orange-500 ring-2 ring-white dark:ring-gray-800 shadow-sm cursor-pointer"
            ></div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="flex flex-col">
            <h1 className="text-gray-900 dark:text-white text-3xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
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

        {/* Toolbar Section */}
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
                onChange={(e) => setSearchQuery(e.target.value)}
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
                onClick={() => setViewMode("grid")}
                className={`flex items-center justify-center px-4 h-10 rounded-full transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#2563EB]/10 text-[#2563EB]"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-400 hover:text-[#2563EB]"
                }`}
              >
                <LayoutGrid className="size-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
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

        {/* Filter Quick Tabs */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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

        {/* Tool List View */}
        {viewMode === "list" ? (
          <div className="flex flex-col gap-3">
            {filteredTools.map((tool) => {
              const colors = categoryColors[tool.categoryColor] || categoryColors.slate;
              return (
                <div
                  key={tool.id}
                  className="tool-row group flex items-center gap-4 bg-white dark:bg-gray-900 p-3 rounded-full border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/5 hover:-translate-y-0.5"
                >
                  <div className={`size-12 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0 ${colors.border} border overflow-hidden`}>
                    <div
                      className="bg-cover bg-center size-8"
                      style={{ backgroundImage: `url('${tool.iconUrl}')` }}
                    ></div>
                  </div>
                  <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
                    <div className="min-w-[180px]">
                      <h3 className="text-gray-900 dark:text-white font-bold leading-none mb-1">{tool.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs truncate max-w-[250px]">{tool.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-[10px] font-bold uppercase tracking-wider rounded-full`}>
                        {tool.category}
                      </span>
                      <div className="flex gap-1.5">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[11px] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 pr-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="size-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#2563EB] transition-colors" title="Edit">
                      <Pencil className="size-4" />
                    </button>
                    <button
                      onClick={() => toggleFavorite(tool.id)}
                      className={`size-9 rounded-full flex items-center justify-center transition-colors ${
                        tool.starred
                          ? "text-red-500 bg-red-50 dark:bg-red-500/10"
                          : "text-gray-500 hover:bg-red-50 hover:text-red-500"
                      }`}
                      title="Favorite"
                    >
                      <Heart className={`size-4 ${tool.starred ? "fill-current" : ""}`} />
                    </button>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-9 rounded-full flex items-center justify-center bg-[#2563EB]/10 text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all shadow-sm"
                      title="Open External"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTools.map((tool) => {
              const colors = categoryColors[tool.categoryColor] || categoryColors.slate;
              return (
                <div
                  key={tool.id}
                  className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-all cursor-pointer"
                >
                  <button
                    onClick={() => toggleFavorite(tool.id)}
                    className={`absolute top-4 right-4 size-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ${
                      tool.starred ? "text-red-500 opacity-100" : "text-gray-400 hover:text-red-500"
                    }`}
                  >
                    <Heart className={`size-4 ${tool.starred ? "fill-current" : ""}`} />
                  </button>
                  <div className={`size-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 ${colors.border} border overflow-hidden`}>
                    <div
                      className="bg-cover bg-center size-8"
                      style={{ backgroundImage: `url('${tool.iconUrl}')` }}
                    ></div>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium flex items-center gap-1 ${colors.text}`}>
                      <span>●</span> {tool.category}
                    </span>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-[#2563EB] transition-colors flex items-center gap-1"
                    >
                      Open <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer / Load More */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm font-semibold cursor-pointer hover:bg-white dark:hover:bg-gray-900 transition-all">
            Load More Tools
          </button>
        </div>
      </main>

      {/* Theme Toggle Floating Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleDarkMode}
          className="size-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform"
        >
          <Moon className="size-5 dark:hidden" />
          <Sun className="size-5 hidden dark:block" />
        </button>
      </div>
    </div>
  );
}
