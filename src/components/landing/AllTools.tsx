const allTools = [
  {
    name: "VS Code",
    description: "Code editing. Redefined. Built on open source.",
    category: "Dev",
    categoryColor: "#10B981",
    icon: "💻",
    iconBg: "#007ACC",
    starred: true,
  },
  {
    name: "Slack",
    description: "Team communication for the 21st century.",
    category: "Comm",
    categoryColor: "#F59E0B",
    icon: "💬",
    iconBg: "#4A154B",
    starred: true,
  },
  {
    name: "Spotify",
    description: "Music for everyone. Millions of songs. No credit card needed.",
    category: "Media",
    categoryColor: "#10B981",
    icon: "🎵",
    iconBg: "#1DB954",
    starred: false,
  },
  {
    name: "Midjourney",
    description: "AI art generator. Explore new mediums of thought.",
    category: "AI",
    categoryColor: "#06B6D4",
    icon: "🎨",
    iconBg: "#000",
    starred: false,
  },
  {
    name: "Trello",
    description: "Collaborate, manage projects, and reach new productivity peaks.",
    category: "Productivity",
    categoryColor: "#F59E0B",
    icon: "📋",
    iconBg: "#0079BF",
    starred: true,
  },
  {
    name: "Google Analytics",
    description: "Get a deeper understanding of your customers.",
    category: "Analytics",
    categoryColor: "#F59E0B",
    icon: "📊",
    iconBg: "#E37400",
    starred: false,
  },
];

export default function AllTools() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>All Tools</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Sort by:</span>
          <select className="bg-transparent font-medium text-gray-700 cursor-pointer focus:outline-none">
            <option>Most Used</option>
            <option>Name</option>
            <option>Recently Added</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {allTools.map((tool) => (
          <div
            key={tool.name}
            className="relative bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group"
          >
            <button className="absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {tool.starred ? "⭐" : "☆"}
            </button>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{ backgroundColor: tool.iconBg }}
            >
              <span className="text-white">{tool.icon}</span>
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
              <button className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
                Open ↗
              </button>
            </div>
          </div>
        ))}

        {/* Add Custom Tool Card */}
        <div className="bg-[#FAFAFA] rounded-xl p-5 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all min-h-[200px]">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm text-gray-400">
            +
          </div>
          <h3 className="font-medium text-gray-700 mb-1">Add Custom Tool</h3>
          <p className="text-sm text-gray-400">Link a new resource</p>
        </div>
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors">
          Load more tools ▼
        </button>
      </div>
    </section>
  );
}
