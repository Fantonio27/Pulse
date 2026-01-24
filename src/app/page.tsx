import {
  Header,
  HeroSection,
  RecentlyUsed,
  SearchFilter,
  DailyDrivers,
  AllTools,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />

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
