import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import RecentlyUsed from "@/components/landing/RecentlyUsed";
import SearchFilter from "@/components/landing/SearchFilter";
import DailyDrivers from "@/components/landing/DailyDrivers";
import AllTools from "@/components/landing/AllTools";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-8 py-8">
        <HeroSection />
        <RecentlyUsed />
        <SearchFilter />
        <DailyDrivers />
        <AllTools />
      </main>

      <Footer />
    </div>
  );
}
