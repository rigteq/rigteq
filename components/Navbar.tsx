"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const websiteDesignMenu = {
    col1: [
        "Website Designing",
        "Static Website Design",
        "Startup Website Design",
        "Dynamic Website Design",
        "Corporate Website Design",
        "CMS Development",
        "CRM Development",
        "E-Commerce Website Development",
    ],
    col2: [
        "PSD to HTML Design",
        "Landing Page Website",
        "Email Template Design",
        "Custom Website Development",
        "Multi Vendor Website Development",
        "Business Profile Website",
        "Informative Website",
        "Portfolio Website",
    ],
};

const servicesMenu = {
    col1: [
        "Node Js",
        "Laravel",
        "Shopify",
        "Website Design",
        "Email Hosting",
        "Domain",
        "AMC",
        "Hire Designer & Developer",
    ],
    col2: [
        "Hire HTML Designer",
        "Hire Frontend Developer",
        "Hire Shopify Developer",
        "Hire PHP Developer",
        "Hire Magento Developer",
        "Hire WordPress Developer",
        "Hire Framework Developer",
        "Hire Fullstack Developer",
    ],
};

import { useRouter } from "next/navigation";
import Image from "next/image"; // Optimization

// ... (menus remain same)

interface NavbarProps {
    currentView?: string;
    setView?: (view: string) => void;
}

export default function Navbar({ currentView = "home", setView }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<"design" | "services" | "mobile" | null>(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleViewChange = (view: string, sectionId?: string) => {
        if (setView) {
            setView(view);
            if (sectionId) {
                setTimeout(() => {
                    const el = document.getElementById(sectionId);
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }, 50);
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            // If on a static page (Service Page), navigate to Home
            // Ideally, the Home page should handle query params to open views, but for now redirect root.
            router.push('/');
        }
    };

    return (
        <div className="relative">
            <nav className={`sticky top-0 z-50 px-4 md:px-12 py-2 flex items-center justify-between transition-all duration-300 ${scrolled
                ? "bg-white shadow-md border-b border-gray-200"
                : "bg-white/5 backdrop-blur-md border-b border-white/10"
                }`}>
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleViewChange("home")}
                >
                    <img src="/images/logos/main_logo.png" alt="Rigteq Logo" className="h-10 md:h-16 w-auto object-contain transition-transform hover:scale-105" />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setActiveDropdown(activeDropdown === "mobile" ? null : "mobile")}
                        className={`p-2 rounded-lg ${scrolled ? "text-gray-900" : "text-gray-800"}`}
                    >
                        {activeDropdown === "mobile" ? (
                            <div className="relative w-6 h-6">
                                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current rotate-45 transform transition-transform"></span>
                                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -rotate-45 transform transition-transform"></span>
                            </div>
                        ) : (
                            <div className="space-y-1.5">
                                <span className="block w-6 h-0.5 bg-current"></span>
                                <span className="block w-6 h-0.5 bg-current"></span>
                                <span className="block w-6 h-0.5 bg-current"></span>
                            </div>
                        )}
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className={`hidden lg:flex items-center gap-8 text-[15px] font-medium ml-24 ${scrolled ? "text-gray-900" : "text-gray-800"
                    }`}>
                    <div
                        className="flex items-center gap-1 cursor-pointer group hover:text-blue-600 transition-colors relative"
                        onMouseEnter={() => setActiveDropdown("design")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        Website Design <ChevronDown size={14} className={`transition-transform ${activeDropdown === "design" ? "rotate-180" : ""}`} />
                    </div>
                    <div
                        className="flex items-center gap-1 cursor-pointer group hover:text-blue-600 transition-colors"
                        onMouseEnter={() => setActiveDropdown("services")}
                        onMouseLeave={() => setActiveDropdown(null)}
                        onClick={() => handleViewChange("home", "services")}
                    >
                        Services <ChevronDown size={14} className={`transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                    </div>
                    <button
                        onClick={() => handleViewChange("solutions")}
                        className={`hover:text-blue-600 transition-colors ${currentView === "solutions" ? "text-blue-600" : ""}`}
                    >
                        Solutions
                    </button>
                    <button
                        onClick={() => handleViewChange("roi-central")}
                        className={`hover:text-blue-600 transition-colors ${currentView === "roi-central" ? "text-blue-600" : ""}`}
                    >
                        ROI Central
                    </button>
                    <button
                        onClick={() => handleViewChange("enterprise")}
                        className={`hover:text-blue-600 transition-colors ${currentView === "enterprise" ? "text-blue-600" : ""}`}
                    >
                        Enterprise
                    </button>
                    <button
                        onClick={() => handleViewChange("portfolio")}
                        className={`hover:text-blue-600 transition-colors ${currentView === "portfolio" ? "text-blue-600" : ""}`}
                    >
                        Portfolio
                    </button>
                    <button
                        onClick={() => handleViewChange("contact")}
                        className={`font-medium transition-colors ${currentView === "contact"
                            ? "text-blue-600"
                            : scrolled ? "hover:text-blue-600" : "hover:text-blue-400"
                            }`}
                    >
                        Contact Us
                    </button>
                    <div
                        onClick={() => handleViewChange("packages")}
                        className={`px-5 py-1.5 rounded-full font-semibold cursor-pointer transition-all ${scrolled
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-600/20 text-[#7bbde8] border border-[#7bbde8]/30 hover:bg-blue-600/30"
                            }`}>
                        Packages
                    </div>
                    <button
                        onClick={() => handleViewChange("contact")}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${scrolled
                            ? "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                            : "border border-white/40 text-white hover:bg-white hover:text-black"
                            }`}>
                        Order Now
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-gray-200 shadow-xl transition-all duration-300 overflow-hidden ${activeDropdown === "mobile" ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col p-4 space-y-4 overflow-y-auto max-h-[75vh]">
                    <button onClick={() => { handleViewChange("home"); setActiveDropdown(null); }} className="text-left font-medium text-gray-800 p-2 hover:bg-gray-50 rounded">Home</button>
                    <button onClick={() => { handleViewChange("solutions"); setActiveDropdown(null); }} className="text-left font-medium text-gray-800 p-2 hover:bg-gray-50 rounded">Solutions</button>
                    <button onClick={() => { handleViewChange("roi-central"); setActiveDropdown(null); }} className="text-left font-medium text-gray-800 p-2 hover:bg-gray-50 rounded">ROI Central</button>
                    <button onClick={() => { handleViewChange("enterprise"); setActiveDropdown(null); }} className="text-left font-medium text-gray-800 p-2 hover:bg-gray-50 rounded">Enterprise</button>
                    <button onClick={() => { handleViewChange("packages"); setActiveDropdown(null); }} className="text-left font-medium text-gray-800 p-2 hover:bg-gray-50 rounded">Packages</button>
                    <button onClick={() => { handleViewChange("portfolio"); setActiveDropdown(null); }} className="text-left font-medium text-gray-800 p-2 hover:bg-gray-50 rounded">Portfolio</button>
                    <button onClick={() => { handleViewChange("contact"); setActiveDropdown(null); }} className="text-left font-medium text-gray-800 p-2 hover:bg-gray-50 rounded">Contact</button>
                    <div className="pt-4 border-t border-gray-100">
                        <button
                            onClick={() => { handleViewChange("contact"); setActiveDropdown(null); }}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl mb-3"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Website Design Dropdown (Desktop) */}
            <div
                className={`hidden lg:block absolute left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40 transition-all duration-300 ${activeDropdown === "design" ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onMouseEnter={() => setActiveDropdown("design")}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-4 gap-4 min-h-[400px]">
                    {/* Card 1 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {websiteDesignMenu.col1.map((item, i) => (
                            <Link
                                key={i}
                                href={`/services/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Card 2 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {websiteDesignMenu.col2.map((item, i) => (
                            <Link
                                key={i}
                                href={`/services/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Card 3 - Image with Button */}
                    <div className="relative bg-white border border-gray-100 overflow-hidden">
                        <img
                            src="/images/menu_1.webp"
                            alt="Customise Your Website"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                            <button
                                onClick={() => handleViewChange("contact")}
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded text-sm transition-colors"
                            >
                                Customise Your Website
                            </button>
                        </div>
                    </div>

                    {/* Card 4 - Image with Button */}
                    <div className="relative bg-white border border-gray-100 overflow-hidden">
                        <img
                            src="/images/menu_2.webp"
                            alt="Packages"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                            <button
                                onClick={() => handleViewChange("packages")}
                                className="w-full border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 px-4 rounded text-sm transition-colors"
                            >
                                Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Dropdown (Desktop) */}
            <div
                className={`hidden lg:block absolute left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40 transition-all duration-300 ${activeDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-4 gap-4 min-h-[400px]">
                    {/* Card 1 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {servicesMenu.col1.map((item, i) => (
                            <Link
                                key={i}
                                href={`/services/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Card 2 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {servicesMenu.col2.map((item, i) => (
                            <Link
                                key={i}
                                href={`/services/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Card 3 - Image with Button */}
                    <div className="relative bg-white border border-gray-100 overflow-hidden">
                        <img
                            src="/images/menu_3.webp"
                            alt="Website Calculator"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                            <button
                                onClick={() => handleViewChange("home", "calculator")}
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded text-sm transition-colors"
                            >
                                Website Calculator
                            </button>
                        </div>
                    </div>

                    {/* Card 4 - Image with Button */}
                    <div className="relative bg-white border border-gray-100 overflow-hidden">
                        <img
                            src="/images/menu_4.webp"
                            alt="Packages"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                            <button
                                onClick={() => handleViewChange("packages")}
                                className="w-full border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 px-4 rounded text-sm transition-colors"
                            >
                                Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
