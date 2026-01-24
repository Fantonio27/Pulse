const recentlyUsedTools = [
  { name: "VS Code", time: "2 min ago", icon: "💻", color: "#007ACC" },
  { name: "Midjourney", time: "1 hour ago", icon: "🎨", color: "#000" },
  { name: "Spotify", time: "3 hours ago", icon: "🎵", color: "#1DB954" },
  { name: "Figma", time: "Yesterday", icon: "🎯", color: "#F24E1E" },
  { name: "Slack", time: "Yesterday", icon: "💬", color: "#4A154B" },
];

export default function RecentlyUsed() {
  return (
    <section className="mb-10">
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-medium">Recently Used</p>
      <div className="flex gap-3 flex-wrap">
        {recentlyUsedTools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
              style={{ backgroundColor: tool.color }}
            >
              {tool.icon}
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">{tool.name}</p>
              <p className="text-xs text-gray-400">{tool.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
