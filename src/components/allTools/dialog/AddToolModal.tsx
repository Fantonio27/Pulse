"use client";

import { useState, useEffect } from "react";
import {
  X,
  Image,
  Edit3,
  Link,
  Globe,
  ChevronDown,
  PlusCircle,
} from "lucide-react";
import { categories } from "@/constants/allTools";

interface AddToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTool: (tool: {
    name: string;
    description: string;
    category: string;
    tags: string[];
    iconUrl: string;
    url: string;
  }) => void;
}

const categoryColorMap: Record<string, string> = {
  Design: "bg-purple-400",
  Productivity: "bg-blue-400",
  Development: "bg-slate-400",
  Marketing: "bg-emerald-400",
  Writing: "bg-orange-400",
};

export default function AddToolModal({
  isOpen,
  onClose,
  onAddTool,
}: AddToolModalProps) {
  const [iconUrlMode, setIconUrlMode] = useState<"url" | "upload">("url");
  const [iconUrl, setIconUrl] = useState("");
  const [name, setName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [category, setCategory] = useState("Design");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [description, setDescription] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle animation on open/close
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 200);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.startsWith("#") ? tagInput : `#${tagInput}`;
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && category) {
      onAddTool({
        name,
        description,
        category,
        tags,
        iconUrl,
        url: websiteUrl,
      });
      // Reset form
      setName("");
      setDescription("");
      setCategory("Design");
      setTags([]);
      setIconUrl("");
      setWebsiteUrl("");
      handleClose();
    }
  };

  if (!isOpen) return null;

  const availableCategories = categories.filter((cat) => cat !== "All");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/10 dark:bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[560px] max-h-[90vh] flex flex-col bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border border-white/60 dark:border-gray-700/60 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 ring-1 ring-black/5 dark:ring-white/5 ${
          isAnimating
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100/80 dark:border-gray-700/80 bg-white/40 dark:bg-gray-800/40">
          <h2 className="text-slate-800 dark:text-white text-xl font-bold tracking-tight">
            Add New Tool
          </h2>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full p-1 hover:bg-slate-100 dark:hover:bg-gray-700"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Tool Icon */}
            <div className="flex flex-col gap-3">
              <label className="text-slate-700 dark:text-gray-200 text-sm font-semibold">
                Tool Icon
              </label>
              <div className="flex items-start gap-5">
                <div className="shrink-0 relative group cursor-pointer">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-slate-50 dark:bg-gray-800 border-2 border-dashed border-slate-300 dark:border-gray-600 flex items-center justify-center overflow-hidden relative transition-all hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt="Tool icon"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <Image className="size-8 text-slate-300 dark:text-gray-500 group-hover:text-indigo-400" />
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 text-indigo-500 p-1.5 rounded-full border border-slate-100 dark:border-gray-700 shadow-sm flex items-center justify-center hover:text-indigo-600 transition-colors">
                    <Edit3 className="size-3.5" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex gap-4 border-b border-slate-200 dark:border-gray-700 pb-1">
                    <button
                      type="button"
                      onClick={() => setIconUrlMode("url")}
                      className={`text-sm font-semibold pb-2 -mb-1.5 transition-colors ${
                        iconUrlMode === "url"
                          ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500"
                          : "text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white"
                      }`}
                    >
                      Paste URL
                    </button>
                    <button
                      type="button"
                      onClick={() => setIconUrlMode("upload")}
                      className={`text-sm font-medium pb-2 -mb-1.5 transition-colors ${
                        iconUrlMode === "upload"
                          ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500"
                          : "text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white"
                      }`}
                    >
                      Upload
                    </button>
                  </div>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 size-4" />
                    <input
                      type="text"
                      value={iconUrl}
                      onChange={(e) => setIconUrl(e.target.value)}
                      className="w-full bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-600 text-slate-800 dark:text-white text-sm py-3 pl-10 pr-4 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Name and Website URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-gray-200 text-sm font-semibold">
                  Tool Name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-600 text-slate-800 dark:text-white text-sm h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                  placeholder="e.g. Figma"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-gray-200 text-sm font-semibold">
                  Website URL
                </span>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 size-4" />
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-600 text-slate-800 dark:text-white text-sm h-12 pl-10 pr-4 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                    placeholder="https://"
                  />
                </div>
              </label>
            </div>

            {/* Category and Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Category Dropdown */}
              <div className="flex flex-col gap-2 relative">
                <span className="text-slate-700 dark:text-gray-200 text-sm font-semibold">
                  Category
                </span>
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="w-full bg-white dark:bg-gray-800 rounded-xl h-12 px-4 flex items-center justify-between text-left border border-slate-200 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-slate-50 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2.5 h-2.5 rounded-full shadow-sm ${
                        categoryColorMap[category] || "bg-slate-400"
                      }`}
                    />
                    <span className="text-slate-800 dark:text-white text-sm font-medium">
                      {category}
                    </span>
                  </div>
                  <ChevronDown className="size-4 text-slate-400 dark:text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-600 shadow-lg z-10 overflow-hidden">
                    {availableCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setCategory(cat);
                          setShowCategoryDropdown(false);
                        }}
                        className="w-full px-4 py-3 flex items-center gap-2 text-left hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full shadow-sm ${
                            categoryColorMap[cat] || "bg-slate-400"
                          }`}
                        />
                        <span className="text-slate-800 dark:text-white text-sm font-medium">
                          {cat}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags */}
              <label className="flex flex-col gap-2">
                <span className="text-slate-700 dark:text-gray-200 text-sm font-semibold">
                  Tags
                </span>
                <div className="w-full bg-white dark:bg-gray-800 rounded-xl min-h-[48px] px-2 py-1.5 flex flex-wrap items-center gap-2 border border-slate-200 dark:border-gray-600 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 border border-indigo-100 dark:border-indigo-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
                      >
                        <X className="size-3.5" />
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    className="bg-transparent border-none text-slate-800 dark:text-white text-sm p-1 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-0 min-w-[60px] flex-1 outline-none"
                    placeholder="Add..."
                  />
                </div>
              </label>
            </div>

            {/* Description */}
            <label className="flex flex-col gap-2">
              <span className="text-slate-700 dark:text-gray-200 text-sm font-semibold flex justify-between">
                Description
                <span className="text-slate-400 dark:text-gray-500 font-normal text-xs">
                  Optional
                </span>
              </span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-600 text-slate-800 dark:text-white text-sm p-4 placeholder:text-slate-400 dark:placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                placeholder="What is this tool used for?"
                rows={3}
              />
            </label>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-slate-100 dark:border-gray-700 bg-slate-50/50 dark:bg-gray-800/50 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full sm:flex-1 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-400 text-white font-bold text-sm shadow-[0_4px_20px_rgba(129,140,248,0.4)] hover:shadow-lg hover:brightness-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PlusCircle className="size-4" />
            Add Tool
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="text-slate-500 dark:text-gray-400 text-sm font-semibold hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-700 transition-all px-6 py-3 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
