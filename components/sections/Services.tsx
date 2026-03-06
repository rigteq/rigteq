'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: 'Web Application Development',
        description: 'Building high-performance, scalable web systems using modern frameworks for a seamless digital presence.',
        image: '/images/website-development.webp',
    },
    {
        title: 'Mobile App Engineering',
        description: 'Expertly crafted iOS and Android applications focused on user engagement and flawless functionality.',
        image: '/images/custom.webp',
    },
    {
        title: 'Enterprise Software Solutions',
        description: 'Tailor-made internal systems (CRM, ERP, HRMS) designed to optimize your business operations and efficiency.',
        image: '/images/crm.webp',
    },
    {
        title: 'Search Engine Optimization',
        description: 'Strategic SEO and data-driven marketing to put your brand in front of the right audience at the right time.',
        image: '/images/web_designing.webp',
    },
    {
        title: 'E-commerce Platforms',
        description: 'User-friendly, high-converting online stores that provide a secure and fast shopping experience for your users.',
        image: '/images/e-commerce.webp',
    },
    {
        title: 'AI & Automation Solutions',
        description: 'Advanced AI chatbots and workflow automation that reduce operational costs and enhance customer support.',
        image: '/images/ai-integration.png',
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Block */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Core Expertise</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight mb-6">
                            Solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Digital Age</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full opacity-50" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group flex flex-col items-start"
                        >
                            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-4">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <button className="flex items-center gap-2 text-sm font-bold tracking-wide text-blue-600 group-hover:gap-3 transition-all">
                                Learn More <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
