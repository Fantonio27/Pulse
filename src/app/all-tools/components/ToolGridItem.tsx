"use client";

import { Heart, ExternalLink } from "lucide-react";
import { Tool, CategoryColors } from "@/types/allTools";

interface ToolGridItemProps {
  tool: Tool;
  categoryColors: CategoryColors;
  onToggleFavorite: (id: number) => void;
}

export default function ToolGridItem({
  tool,
  categoryColors,
  onToggleFavorite,
}: ToolGridItemProps) {
  const colors = categoryColors[tool.categoryColor] || categoryColors.slate;

  return (
    <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-all cursor-pointer">
      <button
        onClick={() => onToggleFavorite(tool.id)}
        className={`absolute top-4 right-4 size-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ${
          tool.starred ? "text-red-500 opacity-100" : "text-gray-400 hover:text-red-500"
        }`}
      >
        <Heart className={`size-4 ${tool.starred ? "fill-current" : ""}`} />
      </button>
      <div
        className={`size-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 ${colors.border} border overflow-hidden`}
      >
        <div
          className="bg-cover bg-center size-8"
          style={{ backgroundImage: `url('${tool.iconUrl}')` }}
        ></div>
      </div>
      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{tool.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
        {tool.description}
      </p>
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
}
