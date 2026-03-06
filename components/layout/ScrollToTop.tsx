'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-24 right-4 sm:right-6 z-[9998] w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all duration-300 border border-blue-400/20"
        >
            <ArrowUp size={22} strokeWidth={2.5} />
        </button>
    );
}
