'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const whyUs = [
    'Certified Experts',
    'Agile Development Process',
    'Transparent Communication',
    'Scalable Architecture',
    'Long-term Support',
];

export function Features() {
    return (
        <section id="about" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Stats Panel Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 p-10 md:p-14 text-gray-900 shadow-xl">
                            {/* Decorative background flare */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Value Proposition</p>
                            <h3 className="text-3xl md:text-[42px] font-black mb-12 leading-tight tracking-tight">
                                Delivering Value <br />Beyond Expectations
                            </h3>

                            {/* Stat grid */}
                            <div className="grid grid-cols-2 gap-6 mb-12">
                                {[
                                    { value: '5+', label: 'Years Active' },
                                    { value: '30+', label: 'Successful Apps' },
                                    { value: '5K+', label: 'Global Users' },
                                    { value: '5+', label: 'Countries' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md">
                                        <p className="text-3xl font-black text-gray-900 mb-2">{stat.value}</p>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20"
                            >
                                START YOUR JOURNEY →
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Why Us Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Why Partner With Us</p>
                            <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                                The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Strategic Partner</span> for Growth
                            </h2>
                            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                                We combine technical excellence with design-driven innovation to deliver solutions that scale. From Silicon Valley startups to Indian enterprises, we help you dominate the digital landscape.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {whyUs.map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                            <CheckCircle size={14} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-base">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
