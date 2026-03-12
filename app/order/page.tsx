'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Zap, Shield, ArrowRight, Star, Lock, CreditCard, Sparkles } from 'lucide-react';

const benefits = [
    { icon: Clock, text: 'Limited Time Offer - Book Your Slot Now!' },
    { icon: Zap, text: 'Fast Delivery Guaranteed' },
    { icon: Shield, text: '100% Satisfaction or Money Back' },
];

export default function OrderPage() {
    const handlePayNow = () => {
        window.open('https://razorpay.me/@rigteq', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="pt-16 pb-16 relative overflow-hidden">
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

            {/* Pay Now Section */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-[2.5rem]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2.5rem]" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[500px] bg-white/10 rounded-full blur-[80px]" />
                        
                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center"
                        >
                            <Sparkles className="w-8 h-8 text-white/80" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center"
                        >
                            <Star className="w-10 h-10 text-white/80" />
                        </motion.div>

                        {/* Main Content */}
                        <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
                            >
                                <Lock className="w-4 h-4 text-white" />
                                <span className="text-white/90 font-semibold text-sm">Secure Payment</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
                            >
                                Ready to Transform Your
                                <br />
                                <span className="text-yellow-300">Digital Presence?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed"
                            >
                                Complete your payment now to secure your exclusive discount and kickstart your project. 
                                Our team will contact you within 24 hours to begin the development process.
                            </motion.p>

                            {/* Features list */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap justify-center gap-4 mb-10"
                            >
                                {[
                                    'Instant Invoice Generation',
                                    'Priority Project Start',
                                    'Free Initial Consultation',
                                    'Dedicated Project Manager'
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span className="text-white text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Pay Now Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <button
                                    onClick={handlePayNow}
                                    className="group relative inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
                                >
                                    <CreditCard className="w-6 h-6 text-blue-600" />
                                    Pay Now
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </motion.div>

                            {/* Security text */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="text-white/60 text-sm mt-6 flex items-center justify-center gap-2"
                            >
                                <Lock className="w-4 h-4" />
                                🔒 Secure payment powered by Razorpay
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <p className="text-gray-500 text-sm font-medium mb-6">Trusted by 500+ businesses worldwide</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="text-2xl font-black text-gray-400">⭐ 4.9/5 Rating</div>
                            <div className="text-2xl font-black text-gray-400">💯 100% Satisfaction</div>
                            <div className="text-2xl font-black text-gray-400">🚀 Fast Delivery</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

