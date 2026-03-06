'use client';

import { Phone, Mail } from 'lucide-react';

export function TopBar() {
    return (
        <div className="bg-slate-900 text-white text-sm py-2.5 hidden md:block border-b border-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Left: phone numbers */}
                <div className="flex items-center gap-6">
                    <a
                        href="tel:+918750399055"
                        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors font-medium"
                    >
                        <span className="text-base">🇮🇳</span>
                        <Phone size={14} className="text-blue-400 shrink-0" />
                        <span>+91 87503 99055</span>
                    </a>

                    <span className="text-slate-700">|</span>

                    <a
                        href="tel:+13502008444"
                        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors font-medium"
                    >
                        <span className="text-base">🇺🇸</span>
                        <Phone size={14} className="text-blue-400 shrink-0" />
                        <span>+1 3502 008-444</span>
                        <span className="text-gray-400 text-xs">(Houston, TX)</span>
                    </a>
                </div>

                {/* Right: email */}
                <div className="flex items-center gap-5">
                    <a
                        href="mailto:sales@rigteq.com"
                        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors font-medium"
                    >
                        <Mail size={14} className="text-blue-400 shrink-0" />
                        <span>sales@rigteq.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
