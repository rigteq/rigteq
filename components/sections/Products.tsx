'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Zap, ShieldCheck, DatabaseZap, Clock, Lock, Component } from 'lucide-react';
import Link from 'next/link';

const products = [
    {
        id: 'salesrq',
        title: 'SalesRQ',
        tagline: 'Enterprise CRM & Sales Pipeline',
        description: 'Battle-tested CRM engine orchestrating millions of data points with AI-driven forecasting and advanced lead scoring.',
        image: '/images/portfolio/salesrq.png',
        features: ['AI Forecasting', 'Automated Workflows', 'Omnichannel Sync'],
        techSpecs: {
            deployment: '< 48 Hours',
            security: 'AES-256 Encryption',
            integration: 'RESTful API, Webhooks'
        },
        link: 'https://salesrq.vercel.app'
    },
    {
        id: 'freeschoolms',
        title: 'FreeSchool MS',
        tagline: 'Next-Gen Educational ERP',
        description: 'Ready-to-deploy administrative suite for scaling academic institutions. Manages everything from admissions to cloud-based grading.',
        image: '/images/portfolio/freeschoolms.png',
        features: ['Role-Based Access', 'Fee Management', 'Parent Dashboard'],
        techSpecs: {
            deployment: 'Same Day Setup',
            security: 'Role-Based Access Control (RBAC)',
            integration: 'Payment Gateways, SMS API'
        },
        link: 'https://freeschoolms.vercel.app'
    },
    {
        id: 'taskflowrq',
        title: 'TaskFlow RQ',
        tagline: 'Agile Project Management',
        description: 'A high-performance productivity matrix engineered for fast-moving teams demanding absolute clarity and zero latency.',
        image: '/images/portfolio/taskflowrq.png',
        features: ['Kanban Workflows', 'Real-Time Sync', 'Resource Allocation'],
        techSpecs: {
            deployment: 'Instant Provisioning',
            security: 'SOC2 Compliant Architecture',
            integration: 'Jira, Slack, GitHub'
        },
        link: 'https://taskflowrq.vercel.app'
    }
];

export function Products() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden text-white" id="products">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Ready Software Solutions</p>
                        <h2 className="text-4xl md:text-[42px] font-black leading-tight tracking-tight mb-6">
                            Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Products</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-medium">Battle-tested, highly scalable enterprise solutions ready to be customized and launched for your business.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group flex flex-col"
                        >
                            <div className="h-48 bg-gray-900 border-b border-gray-700/50 relative overflow-hidden flex items-center justify-center p-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600/20 text-blue-400 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/30">
                                    Ready to Deploy
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-blue-400/80 text-xs font-bold uppercase tracking-widest mb-4">
                                    {product.tagline}
                                </p>
                                
                                <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
                                    {product.description}
                                </p>

                                <div className="space-y-3 mb-8 flex-1">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            {i === 0 && <Zap size={14} className="text-blue-500" />}
                                            {i === 1 && <DatabaseZap size={14} className="text-indigo-400" />}
                                            {i === 2 && <ShieldCheck size={14} className="text-blue-300" />}
                                            <span className="text-sm font-semibold text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Learn More Trigger */}
                                <button
                                    onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                                    aria-label={`Learn more technical details about ${product.title}`}
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-blue-500/50 text-blue-400 bg-blue-900/20 text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn mt-auto"
                                >
                                    {expandedId === product.id ? 'Close Details' : 'Learn More'}
                                    <ArrowRight size={16} className={`transition-transform duration-300 ${expandedId === product.id ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
                                </button>

                                {/* Expanded State */}
                                <AnimatePresence>
                                    {expandedId === product.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 mt-6 border-t border-gray-700/50">
                                                <h4 className="text-white text-xs font-black uppercase tracking-widest mb-4">Technical Breakdown</h4>
                                                <div className="space-y-4 mb-8">
                                                    <div>
                                                        <span className="flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                                                            <Clock size={12} /> Deployment Speed
                                                        </span>
                                                        <p className="text-sm text-gray-300 font-medium">{product.techSpecs.deployment}</p>
                                                    </div>
                                                    <div>
                                                        <span className="flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                                                            <Lock size={12} /> Security Protocols
                                                        </span>
                                                        <p className="text-sm text-gray-300 font-medium">{product.techSpecs.security}</p>
                                                    </div>
                                                    <div>
                                                        <span className="flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                                                            <Component size={12} /> Capabilities
                                                        </span>
                                                        <p className="text-sm text-gray-300 font-medium">{product.techSpecs.integration}</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-3">
                                                    <Link
                                                        href={product.link}
                                                        target="_blank"
                                                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                                                    >
                                                        Live Environment <ArrowUpRight size={16} />
                                                    </Link>
                                                    
                                                    <Link
                                                        href="/contact"
                                                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-800 text-gray-300 font-bold text-sm tracking-wide hover:bg-gray-700 hover:text-white transition-colors"
                                                    >
                                                        Quick Inquiry Request
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
