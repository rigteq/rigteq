"use client";

import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWidgets() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openWhatsApp = () => {
        window.open("https://wa.me/918750399055", "_blank");
    };

    return (
        <div className="fixed bottom-8 right-8 z-[90] flex flex-col gap-4 items-center">
            {/* Scroll To Top */}
            <button
                onClick={scrollToTop}
                className={`w-12 h-12 bg-white text-[#0e3d52] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 border border-gray-100 ${showScroll ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>

            {/* WhatsApp Widget */}
            <button
                onClick={openWhatsApp}
                className="group relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce-subtle"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
                <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Chat with us!
                </span>
            </button>
        </div>
    );
}
