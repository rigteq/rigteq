'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

import { ExternalLink } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'CEO, TechStart Inc.',
        text: 'Rigteq delivered a powerful platform that increased our growth significantly. Their engineering team is top-tier.',
        rating: 5,
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
        logo: 'https://i.pravatar.cc/50?u=techstart',
        linkedin: 'https://linkedin.com/in/sarah',
        projectDetails: 'Scalable SaaS Platform for B2B Analytics',
    },
    {
        name: 'Rajesh Sharma',
        role: 'CTO, Global Logistics',
        text: 'The complete digital transformation of our legacy systems was handled flawlessly. Highly recommended for complex enterprise builds.',
        rating: 5,
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop',
        logo: 'https://i.pravatar.cc/50?u=global',
        linkedin: 'https://linkedin.com/in/rajesh',
        projectDetails: 'Enterprise ERP System Modernization',
    },
    {
        name: 'Alexei Volkov',
        role: 'Founder, CloudStream',
        text: 'Working with Rigteq feels like having an elite in-house engineering team. They delivered ahead of schedule with zero defects.',
        rating: 5,
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop',
        logo: 'https://i.pravatar.cc/50?u=cloudstream',
        linkedin: 'https://linkedin.com/in/alexei',
        projectDetails: 'Live Video Streaming Application Network',
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

                            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-50">
                                        <img src={testimonials[current].photo} alt={testimonials[current].name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-gray-900 font-bold text-lg mb-0.5">{testimonials[current].name}</h4>
                                        <p className="text-gray-500 font-semibold text-sm">{testimonials[current].role}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                </div>
                            </div>
                            <div className="text-left mt-6">
                                <span className="inline-block px-3 py-1 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-100">
                                    Project Highlights
                                </span>
                                <p className="text-sm font-semibold text-gray-700">{testimonials[current].projectDetails}</p>
                            </div>
                        </motion.div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center gap-4 mt-8 lg:mt-0 lg:block">
                            <button
                                onClick={prev}
                                className="lg:absolute lg:top-1/2 lg:-left-20 lg:-translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group shadow-md"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={next}
                                className="lg:absolute lg:top-1/2 lg:-right-20 lg:-translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group shadow-md"
                                aria-label="Next testimonial"
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
