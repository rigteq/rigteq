import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionStats from "@/components/MissionStats";
import ServicesGrid from "@/components/ServicesGrid";
import TransparentPrice from "@/components/TransparentPrice";
import Testimonials from "@/components/Testimonials";
import CompaniesSection from "@/components/CompaniesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <div className="sticky top-0 z-[100]">
        <TopNav />
        <Navbar />
      </div>
      <Hero />
      <MissionStats />
      <ServicesGrid />
      <TransparentPrice />
      <Testimonials />
      <CompaniesSection />
      <IndustriesSection />
      <TechnologiesSection />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}