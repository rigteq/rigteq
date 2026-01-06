"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const websiteDesignMenu = {
    col1: [
        "Website Designing",
        "Static Website Design",
        "Startup Website Design",
        "Free Website Design",
        "Dynamic Website Design",
        "Corporate Website Design",
        "CMS Development",
        "CRM Development",
        "E-Commerce Website Development",
    ],
    col2: [
        "Psd To HTML Design",
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

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<"design" | "services" | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            <nav className={`sticky top-0 z-50 px-4 md:px-12 py-3 flex items-center justify-between transition-all duration-300 ${scrolled
                ? "bg-white shadow-md border-b border-gray-200"
                : "bg-white/5 backdrop-blur-md border-b border-white/10"
                }`}>
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/images/logos/main_logo.png" alt="Rigteq Logo" className="h-10 md:h-12 w-auto object-contain" />
                </div>

                {/* Navigation Links + Buttons - All in one container with equal spacing */}
                <div className={`hidden lg:flex items-center gap-8 text-[15px] font-medium ml-24 ${scrolled ? "text-gray-800" : "text-white"
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
                    >
                        Services <ChevronDown size={14} className={`transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                    </div>
                    <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
                    <a href="#industries" className="hover:text-blue-600 transition-colors">Industries</a>
                    <a href="#media" className="hover:text-blue-600 transition-colors">Media</a>
                    <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
                    <div className={`px-5 py-1.5 rounded-full font-semibold cursor-pointer transition-all ${scrolled
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600/20 text-[#7bbde8] border border-[#7bbde8]/30 hover:bg-blue-600/30"
                        }`}>
                        Packages
                    </div>
                    <a href="#contact" className={`font-medium transition-colors ${scrolled ? "hover:text-blue-600" : "hover:text-blue-400"
                        }`}>Contact Us</a>
                    <button className={`px-6 py-2 rounded-full font-semibold transition-all ${scrolled
                        ? "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                        : "border border-white/40 text-white hover:bg-white hover:text-black"
                        }`}>
                        Order Now
                    </button>
                </div>
            </nav>

            {/* Website Design Dropdown */}
            <div
                className={`absolute left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40 transition-all duration-300 ${activeDropdown === "design" ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onMouseEnter={() => setActiveDropdown("design")}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-4 gap-4 min-h-[400px]">
                    {/* Card 1 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {websiteDesignMenu.col1.map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Card 2 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {websiteDesignMenu.col2.map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </a>
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
                            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded text-sm transition-colors">
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
                            <button className="w-full border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 px-4 rounded text-sm transition-colors">
                                Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Dropdown */}
            <div
                className={`absolute left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40 transition-all duration-300 ${activeDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-4 gap-4 min-h-[400px]">
                    {/* Card 1 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {servicesMenu.col1.map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Card 2 - Menu Links */}
                    <div className="bg-white border border-gray-100 p-4 space-y-1">
                        {servicesMenu.col2.map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors border-b border-gray-100 py-2"
                            >
                                {item}
                            </a>
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
                            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded text-sm transition-colors">
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
                            <button className="w-full border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 px-4 rounded text-sm transition-colors">
                                Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
