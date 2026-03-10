'use client';

import { Globe, Smartphone, Cloud, Cpu, Server, Network, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        title: 'Web & Mobile Engineering',
        description: 'High-performance, scalable applications built with modern frameworks to deliver seamless omni-channel experiences.',
        slug: 'web-mobile-engineering',
        Icon: Smartphone,
    },
    {
        title: 'AI & Workflow Automation',
        description: 'Intelligent systems and NLP agents designed to automate workflows, reduce overhead, and increase operational efficiency.',
        slug: 'ai-workflow-automation',
        Icon: Cpu,
    },
    {
        title: 'Cloud Solutions & DevOps',
        description: 'Robust cloud architectures focused on zero-downtime deployments, auto-scaling, and enterprise-grade security.',
        slug: 'cloud-solutions-devops',
        Icon: Cloud,
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
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">What We Offer</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight mb-6">
                            Architecting for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Scalability & Performance</span>
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
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                <service.Icon size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="mt-auto pt-6">
                                <Link 
                                    href={`/services/${service.slug}`} 
                                    aria-label={`Learn more about Rigteq's ${service.title} services`}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-blue-600/30 text-blue-600 bg-blue-50/50 text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn"
                                >
                                    Learn More 
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
