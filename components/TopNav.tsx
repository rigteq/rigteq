"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail } from "lucide-react";

interface TopNavProps {
    setView?: (view: string) => void;
}

export default function TopNav({ setView }: TopNavProps) {
    const socialLinks = [
        { Icon: Facebook, href: "https://facebook.com" },
        { Icon: Instagram, href: "https://instagram.com" },
        { Icon: Twitter, href: "https://twitter.com" },
        { Icon: Linkedin, href: "https://linkedin.com" },
        { Icon: Youtube, href: "https://youtube.com" },
    ];

    const menuLinks = [
        { label: "Careers", view: "careers" },
        { label: "Clients", view: "home", id: "clients" }, // Scroll to section
        { label: "Testimonials", view: "home", id: "testimonials" }, // Scroll to section
        { label: "Support", view: "support" },
    ];

    const handleNavClick = (view: string, id?: string) => {
        if (setView) {
            setView(view);
            if (id) {
                setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="bg-[#0f172a] text-gray-300 py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs font-medium border-b border-white/5 relative z-[101]">
            <div className="flex items-center gap-6 mb-2 md:mb-0">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('contact')}>
                    <Phone size={14} className="text-blue-500" />
                    <span>+91 87503 99055</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('contact')}>
                    <Mail size={14} className="text-red-500" />
                    <span>ops@rigteq.com</span>
                </div>
            </div>

            <div className="md:hidden flex flex-wrap justify-center gap-4 w-full mt-2">
                <div className="flex gap-4 border-r border-gray-700 pr-4 mr-2">
                    {socialLinks.map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-all duration-200"
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-wrap gap-3 text-[10px] justify-center">
                    {menuLinks.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleNavClick(item.view, item.id)}
                            className="hover:text-blue-400 transition-colors uppercase tracking-wider bg-transparent border-none cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-6">
                <div className="flex gap-4 border-r border-gray-700 pr-6 mr-2">
                    {socialLinks.map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white hover:scale-110 transition-all duration-200"
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </div>

                <div className="flex gap-6">
                    {menuLinks.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleNavClick(item.view, item.id)}
                            className="hover:text-blue-400 transition-colors uppercase tracking-wider bg-transparent border-none cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
