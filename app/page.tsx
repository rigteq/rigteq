"use client";

import { useState } from "react";
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
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [view, setView] = useState("home");

  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <div className="sticky top-0 z-[100]">
        <TopNav />
        <Navbar currentView={view} setView={setView} />
      </div>

      {view === "home" ? (
        <>
          <Hero />
          <MissionStats />
          <ServicesGrid />
          <TransparentPrice />
          <Testimonials />
          <CompaniesSection />
          <IndustriesSection />
          <TechnologiesSection />
        </>
      ) : view === "contact" ? (
        <div className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[playfair]">Contact Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      ) : null}

      <Footer setView={setView} />
      <FloatingWidgets />
    </main>
  );
}