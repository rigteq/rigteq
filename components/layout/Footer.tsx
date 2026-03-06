'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
    company: [
        { name: 'About Elite', href: '#about' },
        { name: 'Core Services', href: '#services' },
        { name: 'Our Portfolio', href: '/portfolio' },
        { name: 'Global Presence', href: '#locations' },
        { name: 'Contact Us', href: '#contact' },
    ],
    services: [
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile App Dev', href: '#services' },
        { name: 'Cloud SaaS', href: '#services' },
        { name: 'SEO Strategy', href: '#services' },
        { name: 'AI Automation', href: '#services' },
    ],
    legal: [
        { name: 'Terms of Use', href: '#' },
        { name: 'Data Privacy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Global Sitemap', href: '/sitemap.xml' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-white text-gray-900 pt-24 pb-12 border-t border-gray-200 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block group">
                            <img
                                src="/images/logo.png"
                                alt="Rigteq Softwares"
                                className="h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-gray-500 max-w-sm leading-relaxed text-sm font-medium">
                            A global leader in software engineering and digital transformation. We bridge the gap between complex challenges and innovative technical solutions.
                        </p>

                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 text-gray-400">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-2 group">
                                        {link.name}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-8">Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-2 group">
                                        {link.name}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Locations */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-8">Get In Touch</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="text-blue-600 mt-1 shrink-0" />
                                <div>
                                    <p className="text-gray-900 font-bold text-sm tracking-wide mb-1">Noida Campus (HQ)</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">D-41, C Block, Sector 59, Noida, UP 201309</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={18} className="text-blue-600 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-sm tracking-wide">IN: +91 87503 99055</p>
                                    <p className="text-gray-500 text-sm tracking-wide">US: +1 3502 008-444</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={18} className="text-blue-600 shrink-0" />
                                <p className="text-gray-500 text-sm tracking-wide">sales@rigteq.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs font-medium tracking-wide">
                        © {new Date().getFullYear()} Rigteq Softwares. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="text-gray-500 hover:text-blue-600 text-xs font-medium transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
