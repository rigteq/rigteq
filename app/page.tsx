"use client";

import { useState } from "react";
import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionStats from "@/components/MissionStats";
import ServicesGrid from "@/components/ServicesGrid";
import WebsiteCostCalculator from "@/components/WebsiteCostCalculator";
import Testimonials from "@/components/Testimonials";
import CompaniesSection from "@/components/CompaniesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import ContactForm from "@/components/ContactForm";
import Media from "@/components/Media";
import Blog from "@/components/Blog";
import DebugLog from "@/components/DebugLog";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Careers from "@/components/Careers";
import Support from "@/components/Support";
import BrochureModal from "@/components/BrochureModal";

export default function Home() {
  const [view, setView] = useState("home");
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Function to open the brochure modal (can be passed down)
  const openBrochure = () => setIsBrochureOpen(true);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="sticky top-0 z-[100]">
        <TopNav setView={setView} />
        <Navbar currentView={view} setView={setView} />
      </div>

      {view === "home" && (
        <>
          <Hero setView={setView} />
          <MissionStats />
          <ServicesGrid />
          <div id="calculator">
            <WebsiteCostCalculator />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="clients">
            <CompaniesSection />
          </div>
          <div id="industries">
            <IndustriesSection setView={setView} />
          </div>
          <TechnologiesSection />
        </>
      )}

      {view === "contact" && (
        <section className="relative py-24 px-4 md:px-12 min-h-[80vh] flex items-center overflow-hidden bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-[#0e3d52] mb-6 font-serif tracking-tight">
                Let's Build Something <span className="text-blue-600">Extraordinary</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                Have a vision? We have the expertise. Reach out today and let's start your digital transformation journey.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      )}

      {view === "media" && <Media setView={setView} />}
      {view === "blog" && <Blog setView={setView} />}
      {view === "packages" && <Packages />}
      {view === "portfolio" && <Portfolio />}
      {view === "careers" && <Careers setView={setView} />}
      {view === "support" && <Support setView={setView} />}

      <Footer setView={setView} openBrochure={openBrochure} />
      <FloatingWidgets />
      <DebugLog />
      <BrochureModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} />
    </main>
  );
}