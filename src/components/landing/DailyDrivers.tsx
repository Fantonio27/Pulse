const dailyDrivers = [
  {
    name: "GitHub",
    description: "Where the world builds software.",
    category: "Dev",
    categoryColor: "#10B981",
    icon: "⚫",
    starred: true,
  },
  {
    name: "Notion",
    description: "All-in-one workspace.",
    category: "Productivity",
    categoryColor: "#F59E0B",
    icon: "📝",
    starred: true,
  },
  {
    name: "Figma",
    description: "Collaborative interface design.",
    category: "Design",
    categoryColor: "#8B5CF6",
    icon: "🎯",
    starred: true,
  },
  {
    name: "ChatGPT",
    description: "AI conversational agent.",
    category: "AI",
    categoryColor: "#06B6D4",
    icon: "🤖",
    starred: true,
  },
];

export default function DailyDrivers() {
  return (
    <section className="mb-10">
      <div className="bg-gradient-to-r from-[#ecfdf5] to-[#fff7ed] rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⚡</span>
            <h2 className="font-semibold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>Daily Drivers</h2>
          </div>
          <button className="text-sm text-[#2563EB] hover:underline">Edit Favorites</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dailyDrivers.map((tool) => (
            <div
              key={tool.name}
              className="relative bg-white/80 backdrop-blur-md rounded-xl p-5 hover:shadow-lg hover:bg-white/80 transition-all cursor-pointer group border border-white/50"
            >
              <button className="absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ⭐
              </button>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm">
                {tool.icon}
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-medium flex items-center gap-1"
                  style={{ color: tool.categoryColor }}
                >
                  <span>●</span> {tool.category}
                </span>
                <span className="text-gray-400 text-sm">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
