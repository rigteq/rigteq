'use client';

import { motion } from 'framer-motion';
import { Landmark, Truck, Building2, Stethoscope, Briefcase, Boxes } from 'lucide-react';

const industries = [
    {
        name: 'Fintech & Banking',
        description: 'Secure, compliant, and high-frequency trading platforms with robust encryption standards.',
        Icon: Landmark,
    },
    {
        name: 'Healthcare & MedTech',
        description: 'HIPAA-compliant telemedicine, EHR systems, and personalized patient portals.',
        Icon: Stethoscope,
    },
    {
        name: 'Logistics & Supply Chain',
        description: 'Real-time tracking, AI-route optimization, and end-to-end fleet management.',
        Icon: Truck,
    },
    {
        name: 'Real Estate & PropTech',
        description: 'Immersive property discovery engines, 3D tours, and automated broker CRMs.',
        Icon: Building2,
    },
    {
        name: 'Education & EdTech',
        description: 'Interactive learning management systems (LMS) and enterprise ERPs for global institutions.',
        Icon: Briefcase,
    },
    {
        name: 'E-commerce & Retail',
        description: 'Conversion-optimized consumer interfaces hooked to scalable inventory architectures.',
        Icon: Boxes,
    },
];

export function Industries() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="industries">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Domain Expertise</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight mb-6">
                            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Empower</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-medium">We design technology that speaks the native language of your exact market, adapting engineering logic to specific industry regulations.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={ind.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                <ind.Icon size={28} className="group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {ind.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                {ind.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
