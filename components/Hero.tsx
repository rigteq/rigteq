"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

interface HeroProps {
    setView?: (view: string) => void;
}

export default function Hero({ setView }: HeroProps) {
    const handleEnquire = () => {
        if (setView) setView("contact");
    };

    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-24 pt-24 pb-12 overflow-hidden bg-white text-center">
            {/* Abstract Art / Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 blur-3xl animate-float" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-rose-100/40 to-orange-100/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto space-y-6 md:space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold border border-blue-100 shadow-sm">
                        <Star size={14} className="fill-blue-700" />
                        Rated #1 Website Design Agency in India
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] text-gray-900 tracking-tight"
                >
                    Helping Businesses <br />
                    <span className="text-gradient">
                        Thrive Digitally
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2"
                >
                    Your Vision, Our Code. Rigteq defines the future of digital presence with premium, high-fidelity web solutions. From startups to enterprises, we engineer success.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-8 w-full sm:w-auto"
                >
                    <button
                        onClick={handleEnquire}
                        className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-base md:text-lg font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Start Your Project
                        <ArrowRight size={20} />
                    </button>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white hover:bg-gray-50 text-gray-800 text-base md:text-lg font-medium px-8 py-4 rounded-full border border-gray-200 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        Explore Services
                    </button>
                </motion.div>
            </div>

            {/* Floating UI Elements as Abstract Art */}
            <motion.img
                src="/images/menu_1.webp"
                alt="UI Element"
                className="absolute top-1/4 left-[5%] w-48 rounded-lg shadow-2xl skew-y-3 hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
            />
            <motion.img
                src="/images/menu_2.webp"
                alt="UI Element"
                className="absolute bottom-1/4 right-[5%] w-56 rounded-lg shadow-2xl -skew-y-3 hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
            />
        </section>
    );
}
