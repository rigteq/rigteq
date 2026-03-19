'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const locations = [
    {
        country: 'Noida, India',
        office: 'Global Headquarters',
        address: 'Tower B, Sector 59, Noida, UP, India 201301',
        phone: '+91 87503 99055',
        email: 'ops@rigteq.com',
        hours: 'Mon–Sat: 9:00 AM – 7:00 PM IST',
        gradient: 'from-[#3B82F6] to-[#2563EB]',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9366650426876!2d77.36978!3d28.618349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56620f32997%3A0xe244ea4cc23baec2!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
        flag: '🇮🇳'
    },
    {
        country: 'Houston, USA',
        office: 'US Business Center',
        address: '3 Greenway Plaza, Suite 200, Houston, TX 77046',
        phone: '+1 3502 008-444',
        email: 'sales@rigteq.com',
        hours: 'Mon–Fri: 9:00 AM – 6:00 PM CST',
        gradient: 'from-cyan-500 to-blue-500',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0850257321683!2d-95.4326551!3d29.7329482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c1110a12e8cd%3A0x6d11b2cb0efaaab!2s3%20Greenway%20Plz%2C%20Houston%2C%20TX%2077046%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin',
        flag: '🇺🇸'
    },
    {
        country: 'Ghaziabad, India',
        office: 'Regional Operations',
        address: 'Govindpuram, Ghaziabad, Uttar Pradesh, India 201013',
        phone: '+91 87503 99055',
        email: 'support@rigteq.com',
        hours: 'Mon–Sat: 9:30 AM – 6:30 PM IST',
        gradient: 'from-orange-500 to-red-500',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.563!2d77.495!3d28.692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf366!2sGovindpuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201013!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin',
        flag: '🇮🇳'
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

                            <div className="mt-8 rounded-xl overflow-hidden shadow-sm h-48 border border-gray-200">
                                <iframe
                                    src={loc.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
