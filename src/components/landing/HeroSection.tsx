export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#E0E7FF] via-[#EDE9FE] to-[#FCE7F3] rounded-3xl p-12 mb-12 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#A5B4FC] to-[#818CF8] rounded-full opacity-60 blur-sm"></div>
      <div className="absolute bottom-12 left-24 w-16 h-16 bg-gradient-to-br from-[#6EE7B7] to-[#34D399] rounded-2xl rotate-12 opacity-70"></div>
      <div className="absolute top-16 right-32 w-12 h-12 bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] rounded-xl opacity-70"></div>
      <div className="absolute bottom-8 right-16 w-24 h-24 bg-gradient-to-br from-[#FDBA74] to-[#FB923C] rounded-full opacity-50 blur-sm"></div>

      {/* Stats card */}
      <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total Tools</p>
        <p className="text-3xl font-bold text-gray-900">124</p>
        <p className="text-xs text-[#2563EB]">Top Cat: Dev</p>
      </div>

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          All your tools,
          <br />
          beautifully organized.
        </h1>
        <p className="text-gray-600 mb-8">
          Access your favorite apps, bookmark resources, and boost your productivity in one serene space.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            Browse Library
          </button>
        </div>
      </div>
    </section>
  );
}
