"use client";

import { Pencil, Heart, ExternalLink } from "lucide-react";
import { Tool, CategoryColors } from "@/types/allTools";

interface ToolListItemProps {
  tool: Tool;
  categoryColors: CategoryColors;
  onToggleFavorite: (id: number) => void;
}

export default function ToolListItem({
  tool,
  categoryColors,
  onToggleFavorite,
}: ToolListItemProps) {
  const colors = categoryColors[tool.categoryColor] || categoryColors.slate;

  return (
    <div className="tool-row group flex items-center gap-4 bg-white dark:bg-gray-900 p-3 rounded-full border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/5 hover:-translate-y-0.5">
      <div
        className={`size-12 rounded-full ${colors.bg} flex items-center justify-center shrink-0 ${colors.border} border overflow-hidden`}
      >
        <div
          className="bg-cover bg-center size-8"
          style={{ backgroundImage: `url('${tool.iconUrl}')` }}
        ></div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
        <div className="min-w-[180px]">
          <h3 className="text-gray-900 dark:text-white font-bold leading-none mb-1">
            {tool.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs truncate max-w-[250px]">
            {tool.description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 ${colors.bg} ${colors.text} text-[10px] font-bold uppercase tracking-wider rounded-full`}
          >
            {tool.category}
          </span>
          <div className="flex gap-1.5">
            {tool.tags.map((tag: string) => (
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
        <button
          className="size-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#2563EB] transition-colors"
          title="Edit"
        >
          <Pencil className="size-4" />
        </button>
        <button
          onClick={() => onToggleFavorite(tool.id)}
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
}
