"use client";

import { motion } from "framer-motion";

export default function CompaniesSection() {
    const companies = [
        "/images/Amar_Ujala_Logo.webp",
        "/images/Emaar_logo.webp",
        "/images/IIT_Delhi_logo.webp",
        "/images/Luxor_pen_logo.webp",
        "/images/Samsung_Logo.webp",
        "/images/antriksh_logo.webp",
        "/images/clutch.webp",
        "/images/cookeandkelvey-logo.webp",
        "/images/durr.webp",
        "/images/exoticahousing.webp",
        "/images/gaur.webp",
        "/images/goodfirms.webp",
        "/images/google.webp",
        "/images/hyundai.webp",
        "/images/jakpower.webp",
        "/images/mohinitea.webp",
        "/images/nicf.webp",
        "/images/rolex-logo.webp",
        "/images/rvcj.webp",
        "/images/saya.webp",
        "/images/stylam.webp",
        "/images/trustpilot.webp",
    ];

    // Double the array for seamless infinite scroll
    const marqueeCompanies = [...companies, ...companies];

    return (
        <section className="bg-white py-12 md:py-20 overflow-hidden relative border-y border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

            <div className="text-center mb-12 relative z-20">
                <h3 className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Trusted By Industry Leaders
                </h3>
            </div>

            <div className="flex relative z-0">
                <motion.div
                    className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30 // Slow smooth scroll
                    }}
                >
                    {marqueeCompanies.map((logo, index) => (
                        <div
                            key={index}
                            className="w-32 md:w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center shrink-0"
                        >
                            <img
                                src={logo}
                                alt={`Company Logo ${index}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
