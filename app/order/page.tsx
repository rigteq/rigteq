'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Zap, Shield, ArrowRight, Star, Lock, CreditCard, Sparkles } from 'lucide-react';

import { Packages } from '@/components/sections/Packages';

const benefits = [
    { icon: Clock, text: 'Limited Time Offer - Book Your Slot Now!' },
    { icon: Zap, text: 'Fast Delivery Guaranteed' },
    { icon: Shield, text: '100% Satisfaction or Money Back' },
];

export default function OrderPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-8"
                        >
                            <Clock className="w-4 h-4 text-red-500" />
                            <span className="text-red-600 font-bold text-sm">Limited Time Offer - Book Your Slot Now!</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                            Book Your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Website Development
                            </span>{' '}
                            Slot
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
                            Reserve your spot now and get exclusive discounts on our premium web development packages. 
                            Launch your digital presence today!
                        </p>

                        {/* Benefits */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.text}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-2 text-gray-700"
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <benefit.icon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="font-semibold text-sm">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Packages Section */}
            <div id="pricing-selection">
                <Packages />
            </div>

            {/* Trust Indicators */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pb-24 text-center mt-16"
            >
                <p className="text-gray-500 text-sm font-medium mb-6">Trusted by 500+ businesses worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                    <div className="text-2xl font-black text-gray-400">⭐ 4.9/5 Rating</div>
                    <div className="text-2xl font-black text-gray-400">💯 100% Satisfaction</div>
                    <div className="text-2xl font-black text-gray-400">🚀 Fast Delivery</div>
                </div>
            </motion.div>
        </div>
    );
}

