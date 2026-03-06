'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'CEO, TechStart Inc.',
        text: 'Rigteq delivered a powerful platform that increased our growth significantly. Their engineering team is top-tier.',
        rating: 5,
    },
    {
        name: 'Rajesh Sharma',
        role: 'CTO, Global Logistics',
        text: 'The complete digital transformation of our legacy systems was handled flawlessly. Highly recommended for complex enterprise builds.',
        rating: 5,
    },
    {
        name: 'Alexei Volkov',
        role: 'Founder, CloudStream',
        text: 'Working with Rigteq feels like having an elite in-house engineering team. They delivered ahead of schedule with zero defects.',
        rating: 5,
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Ambient background effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Client Feedback</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Stories</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-200 rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden"
                        >
                            <Quote size={80} className="text-blue-50 absolute top-4 left-4 pointer-events-none rotate-12" />

                            <div className="flex justify-center gap-1.5 mb-10">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} size={22} className="text-blue-600 fill-blue-600" />
                                ))}
                            </div>

                            <p className="text-2xl md:text-4xl text-gray-900 leading-snug mb-12 font-medium tracking-tight">
                                "{testimonials[current].text}"
                            </p>

                            <div>
                                <h4 className="text-gray-900 font-bold text-xl mb-1">{testimonials[current].name}</h4>
                                <p className="text-gray-500 font-bold text-sm">{testimonials[current].role}</p>
                            </div>
                        </motion.div>

                        {/* Side Arrows - Visible on Desktop */}
                        <div className="hidden lg:block">
                            <button
                                onClick={prev}
                                className="absolute top-1/2 -left-20 -translate-y-1/2 w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group shadow-md"
                            >
                                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={next}
                                className="absolute top-1/2 -right-20 -translate-y-1/2 w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group shadow-md"
                            >
                                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center gap-3 mt-12">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-2 rounded-full transition-all duration-500 ${idx === current
                                    ? 'bg-blue-600 w-12'
                                    : 'bg-gray-300 w-3 hover:bg-blue-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
