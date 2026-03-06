'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 w-full h-full bg-gradient-to-br from-blue-100 via-gray-50 to-gray-50 opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white border border-gray-200 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-xl shadow-blue-900/5">
                    {/* Internal decorative elements */}
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                            <Sparkles size={14} className="text-blue-500" />
                            Start Your Transformation
                        </div>

                        <h2 className="text-4xl md:text-[56px] font-black text-gray-900 leading-tight mb-8 tracking-tight">
                            Ready to Lead the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Digital Revolution?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Don't just keep up with technology — lead with it. Our experts are ready to turn your ambitious ideas into enterprise-grade realities.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="#contact"
                                className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-sm tracking-wide hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group"
                            >
                                Start your project
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="tel:+918750399055"
                                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-900 font-bold text-sm tracking-wide hover:bg-gray-100 transition-all flex items-center justify-center shadow-sm"
                            >
                                Call Our Experts
                            </Link>
                        </div>

                        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600" />
                                No Hidden Costs
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600" />
                                24/7 Global Support
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600" />
                                Agile Development
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
