'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const locations = [
    {
        country: 'Noida, UP, India',
        office: 'Global Headquarters',
        address: 'Noida, UP, India',
        phone: '+91 87503 99055',
        email: 'ops@rigteq.com',
        hours: 'Mon–Sat: 9:00 AM – 7:00 PM IST',
        gradient: 'from-[#3B82F6] to-[#2563EB]',
        mapUrl: 'https://maps.google.com/?q=Sector+59+Noida+Uttar+Pradesh',
        flag: '🇮🇳'
    },
    {
        country: 'Ghaziabad, UP',
        office: 'Digital Operations',
        address: 'Ghaziabad, UP',
        phone: '+91 87503 99055',
        email: 'sales@rigteq.com',
        hours: 'Mon–Sat: 9:00 AM – 7:00 PM IST',
        gradient: 'from-blue-500 to-indigo-500',
        mapUrl: 'https://maps.google.com/?q=Govindpuram+Ghaziabad+Uttar+Pradesh',
        flag: '🇮🇳'
    },
    {
        country: 'Houston, TX',
        office: 'US Business Center',
        address: 'Houston, US',
        phone: '+1 3502 008-444',
        email: 'sales@rigteq.com',
        hours: 'Mon–Fri: 9:00 AM – 6:00 PM CST',
        gradient: 'from-cyan-500 to-blue-500',
        mapUrl: 'https://maps.google.com/?q=3+Greenway+Plz+Houston+TX+77046',
        flag: '🇺🇸'
    },
];

export function Locations() {
    return (
        <section className="py-24 bg-white" id="locations">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Our Presence</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Offices</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, idx) => (
                        <motion.div
                            key={loc.country}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-gray-50 rounded-2xl border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300 overflow-hidden"
                        >
                            {/* Accent line */}
                            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${loc.gradient}`} />

                            <div className="flex items-center justify-between mb-8">
                                <span className="text-4xl">{loc.flag}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm">{loc.office}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors">
                                {loc.country}
                            </h3>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                        <MapPin size={18} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed font-medium pt-0.5">{loc.address}</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Phone size={18} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="text-gray-900 font-bold text-sm hover:text-blue-600 transition-colors">
                                        {loc.phone}
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Mail size={18} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <a href={`mailto:${loc.email}`} className="text-gray-900 font-bold text-sm hover:text-blue-600 transition-colors">
                                        {loc.email}
                                    </a>
                                </div>

                                <div className="flex items-start gap-3 pt-6 border-t border-gray-200">
                                    <Clock size={16} className="text-gray-500 shrink-0 mt-0.5" />
                                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">{loc.hours}</p>
                                </div>
                            </div>

                            <a
                                href={loc.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white border border-gray-200 text-gray-900 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-50 hover:border-blue-400/30 transition-all duration-300 shadow-sm"
                            >
                                <ExternalLink size={16} />
                                Locate Office
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
