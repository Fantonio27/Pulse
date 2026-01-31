export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">📦</span>
        </div>
        <span className="font-semibold text-gray-900">Branded Toolbox</span>
      </div>

      <nav className="flex items-center gap-8">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Dashboard
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Collections
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Community
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-[#2563EB] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1D4ED8] transition-colors">
          <span>+</span> Add New Tool
        </button>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 ring-2 ring-white shadow-sm"></div>
      </div>
    </header>
  );
}
