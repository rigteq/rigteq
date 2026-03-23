'use client';

import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';

const packages = [
    {
        name: 'Starter Pack',
        description: 'Perfect for small businesses and personal portfolios.',
        price: '₹14,999',
        popular: false,
        features: [
            'Up to 5 Pages',
            'Mobile Responsive Design',
            'Basic SEO Setup',
            'Contact Form Integration',
            '1 Month Free Maintenance',
            'Delivery in 1 Week',
        ],
        missingFeatures: [
            'Content Management System (CMS)',
            'E-commerce Functionality',
            'Custom API Integrations',
        ],
    },
    {
        name: 'Business Pro',
        description: 'Ideal for growing companies needing a scalable CMS.',
        price: '₹39,999',
        popular: true,
        features: [
            'Up to 15 Pages',
            'Content Management System (CMS)',
            'Advanced SEO Optimization',
            'Payment Gateway Integration',
            'Social Media Feeds & Chat',
            '3 Months Free Maintenance',
            'Delivery in 3 Weeks',
        ],
        missingFeatures: [
            'Custom ERP/CRM Integrations',
        ],
    },
    {
        name: 'Custom',
        description: 'Custom web applications and full-scale SaaS platforms.',
        price: 'Custom',
        popular: false,
        features: [
            'Unlimited Pages & Features',
            'Complex Data Architectures',
            'Custom AI Integrations',
            'High-Performance Cloud Hosting',
            'Dedicated Account Manager',
            '1 Year Premium Support',
        ],
        missingFeatures: [],
    },
];

export function Packages() {
    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-50" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
                            Transparent Pricing
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-gray-900 leading-tight tracking-tight mb-6">
                            Website Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Packages</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                            Choose the perfect web development plan to launch and scale your digital presence. No hidden fees, just premium engineering.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 sm:p-10 rounded-[2rem] border transition-all duration-300 ${pkg.popular
                                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 text-white shadow-2xl scale-100 lg:scale-105 z-10'
                                : 'bg-white border-gray-200 text-gray-900 shadow-xl shadow-gray-200/40 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-1'
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-8 -translate-y-1/2">
                                    <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-black mb-2 tracking-tight ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                                    {pkg.name}
                                </h3>
                                <p className={`text-sm font-medium leading-relaxed ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {pkg.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-4xl sm:text-5xl font-black tracking-tight ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                                        {pkg.price}
                                    </span>
                                </div>
                                {pkg.price !== 'Custom' && (
                                    <p className={`text-sm font-medium mt-1 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                                        One-time investment
                                    </p>
                                )}
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {pkg.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 rounded-full p-1 shrink-0 ${pkg.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm font-medium leading-relaxed ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}

                                {pkg.missingFeatures.map((feature, i) => (
                                    <div key={`missing-${i}`} className="flex items-start gap-3 opacity-50 grayscale">
                                        <div className="mt-0.5 rounded-full p-1 shrink-0 bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm font-medium leading-relaxed line-through ${pkg.popular ? 'text-gray-400' : 'text-gray-400'}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://razorpay.me/@rigteq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl text-center font-bold text-sm transition-all duration-300 ${pkg.popular
                                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25'
                                    : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                    }`}
                            >
                                Pay Now
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center flex items-center justify-center gap-2 text-gray-500 text-sm font-medium"
                >
                    <Info size={16} className="text-blue-500" />
                    <span>Prices may vary based on specific custom requirements and features.</span>
                </motion.div>
            </div>
        </section>
    );
}
