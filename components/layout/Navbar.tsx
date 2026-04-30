'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    currentView?: string;
}

interface MenuItem {
    name: string;
    href: string;
    dropdown?: { name: string; href: string }[];
}

const menuItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
        name: 'Services', href: '/#services', dropdown: [
            { name: 'Products', href: '/#products' },
            { name: 'Industries', href: '/#industries' },
        ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Packages', href: '/#pricing' },
    {
        name: 'Blog', href: '/blog', dropdown: [
            { name: 'Careers', href: '/careers' },
        ]
    },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar({ currentView }: NavbarProps) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`w-full backdrop-blur-md border-b py-3 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 border-gray-100 shadow-sm' : 'bg-white/50 border-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group z-50 shrink-0">
                        <img
                            src="/images/rigteq-logo.png"
                            alt="Rigteq Softwares"
                            className="h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-base font-bold tracking-wide transition-all duration-200
                    ${activeDropdown === item.name || pathname === item.href || (currentView && item.name.toLowerCase() === currentView) ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                                        />
                                    )}
                                </Link>

                                {/* Desktop Dropdown */}
                                {item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white border border-gray-100 shadow-xl py-3 overflow-hidden"
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-150"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/order"
                            className="px-5 py-2.5 rounded-full bg-green-600 text-white text-sm font-bold tracking-wide hover:bg-green-700 transition-all shadow-md shadow-green-500/20 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                            Order Now
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold tracking-wide hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
                        >
                            Get A Quote
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-gray-900 rounded-xl hover:bg-gray-100 transition-colors z-50 flex items-center justify-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-x-0 top-[72px] bg-white lg:hidden overflow-y-auto z-40 border-t border-gray-100 shadow-2xl max-h-[calc(100vh-72px)]"
                    >
                        <div className="flex flex-col p-6 sm:p-8 gap-1">
                            {menuItems.map((item) => (
                                <div key={item.name} className="border-b border-gray-50 last:border-0 pb-1">
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href={item.href}
                                            onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                                            className="py-4 text-base font-bold tracking-tight text-gray-900 flex-1 active:text-blue-600"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                                className="p-4 -mr-4 text-gray-400 active:text-blue-600"
                                                aria-label={`Toggle ${item.name} submenu`}
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''}`}
                                                />
                                            </button>
                                        )}
                                    </div>
                                    {item.dropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            className="pl-4 pb-4 flex flex-col gap-3 pt-2"
                                        >
                                            {item.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors tracking-wide"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}

                            <Link
                                href="/order"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 px-8 py-5 rounded-2xl bg-green-600 text-white text-center text-sm font-bold tracking-wide shadow-xl shadow-green-500/20 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                    <line x1="2" x2="22" y1="10" y2="10" />
                                </svg>
                                Order Now
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-8 py-5 rounded-2xl bg-blue-600 text-white text-center text-sm font-bold tracking-wide shadow-xl shadow-blue-500/20"
                            >
                                Get A Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
