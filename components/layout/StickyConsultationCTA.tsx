'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';

export function StickyConsultationCTA() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Show after user scrolls 400px, but don't show if dismissed
        const handleScroll = () => {
            if (!dismissed) setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dismissed]);

    if (dismissed || !visible) return null;

    return (
        // bottom-[168px] keeps this above the chatbot (bottom-[90px]) + WhatsApp (bottom-[84px]) stack
        <div className="fixed bottom-[168px] right-4 sm:right-6 z-[9998] animate-fade-in-up">
            <div className="relative flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-blue-500/40 max-w-[240px] sm:max-w-xs">
                {/* Static pulse dot — no animate-ping to avoid infinite GPU compositing */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>

                <Link
                    href="#contact"
                    className="flex items-center gap-2 flex-1"
                    onClick={() => setDismissed(true)}
                >
                    <Calendar size={14} className="shrink-0" />
                    <span className="text-xs font-bold leading-tight">
                        Book Free Consultation<br />
                        <span className="font-normal opacity-80">Limited slots — respond in 24h</span>
                    </span>
                </Link>

                <button
                    onClick={() => setDismissed(true)}
                    aria-label="Dismiss consultation prompt"
                    className="shrink-0 hover:opacity-70 transition-opacity"
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}
