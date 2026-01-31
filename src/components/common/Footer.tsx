export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-6 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>📦</span>
          <span>© 2024 Personal Toolbox</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}
