'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: 'Web & Mobile Engineering',
        description: 'High-performance, scalable applications built with modern frameworks to deliver seamless omni-channel experiences.',
        slug: 'web-mobile-engineering',
        image: '/images/web-mobile-engineering.png',
    },
    {
        title: 'AI & Workflow Automation',
        description: 'Intelligent systems and NLP agents designed to automate workflows, reduce overhead, and increase operational efficiency.',
        slug: 'ai-workflow-automation',
        image: '/images/ai-automation-workflow.png',
    },
    {
        title: 'Cloud Solutions & DevOps',
        description: 'Robust cloud architectures focused on zero-downtime deployments, auto-scaling, and enterprise-grade security.',
        slug: 'cloud-solutions-devops',
        image: '/images/cloud-solutions.png',
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Reduced blur radius: 80px vs 120px — less GPU compositing work */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Block */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">What We Offer</p>
                    <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight mb-6">
                        Architecting for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                            Scalability &amp; Performance
                        </span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full opacity-50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-[transform,box-shadow,border-color] duration-300 group flex flex-col items-start"
                        >
                            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain p-4"
                                    loading="lazy"
                                    decoding="async"
                                />
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
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-blue-600/30 text-blue-600 bg-blue-50/50 text-sm font-bold tracking-wide hover:bg-blue-600 hover:text-white transition-[background-color,color,border-color] duration-200 group/btn"
                                >
                                    Learn More
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
