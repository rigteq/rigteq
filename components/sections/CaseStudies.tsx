'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const cases = [
    {
        id: 'sales-ms',
        client: 'B2B SalesHub',
        category: 'Enterprise CRM / MS',
        title: 'Advanced Sales Management System',
        problem: 'High lead leakage and inefficient sales tracking due to fragmented manual data entry.',
        solution: 'Built a centralized dashboard with automated pipeline tracking, lead scoring, and reporting.',
        result: 'Boosted sales conversion rates by 35% and drastically reduced administrative overhead.',
        image: '/images/portfolio/salesrq.png',
    },
    {
        id: 'task-management',
        client: 'AgileFlow Systems',
        category: 'Enterprise SaaS',
        title: 'Next-Gen Task Management System',
        problem: 'Siloed communication and disjointed tools causing missed deadlines and low visibility.',
        solution: 'Engineered a unified workspace with real-time sync, kanban workflows, and detailed reporting.',
        result: 'Increased team productivity by 40% and reduced project delays to near zero.',
        image: '/images/portfolio/taskflowrq.png',
    },
    {
        id: 'ai-integration',
        client: 'TechForward Inc.',
        category: 'AI Integration',
        title: 'Enterprise AI Integration & Automation',
        problem: 'Manual repetitive workflows consuming 40% of operational hours with zero intelligence layer.',
        solution: 'Integrated GPT-4o and LangChain to automate workflows, summarize reports, and power smart assistants.',
        result: 'Saved 1,200+ man-hours per month and cut operational costs by 38%.',
        image: '/images/ai-integration.png',
    }
];

export function CaseStudies() {
    return (
        <section id="portfolio" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Case Studies</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Success Stories</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold text-sm tracking-wide transition-colors group"
                        >
                            View All Work
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="space-y-12">
                    {cases.map((study, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                                    {/* Image side — responsive height */}
                                    <div className={`bg-gray-50 flex items-center justify-center min-h-[220px] sm:min-h-[300px] lg:min-h-[400px] p-4 sm:p-6 ${!isEven ? 'lg:order-last' : ''}`}>
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full object-contain max-h-[320px] lg:max-h-[380px]"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Content side */}
                                    <div className={`p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                                                {study.category}
                                            </span>
                                            <span className="text-gray-500 text-sm font-semibold">{study.client}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 tracking-tight">
                                            {study.title}
                                        </h3>

                                        <div className="space-y-6 mb-8">
                                            <div>
                                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">The Problem</p>
                                                <p className="text-gray-700 leading-relaxed font-medium">{study.problem}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">The Solution</p>
                                                <p className="text-gray-700 leading-relaxed font-medium">{study.solution}</p>
                                            </div>
                                            <div className="pl-4 border-l-2 border-blue-500">
                                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">The Result</p>
                                                <p className="text-gray-900 font-bold">{study.result}</p>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/portfolio/${study.id}`}
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm tracking-wide transition-colors w-fit"
                                        >
                                            Read Full Case Study
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
