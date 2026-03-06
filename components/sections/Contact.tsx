'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        alert('Thank you for your message! Our team will get back to you shortly.');
        setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Contact us</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Transform</span> Your Business?
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left & Right Info Panel (Col 1-5) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white border border-gray-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct Call</h4>
                                        <p className="text-gray-500 text-sm font-medium">+91 87503 99055</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 rounded-2xl bg-white border border-gray-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email Support</h4>
                                        <p className="text-gray-500 text-sm font-medium">sales@rigteq.com</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-2xl bg-white border border-gray-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300 sm:col-span-2 lg:col-span-1"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Registered Office</h4>
                                        <p className="text-gray-500 text-sm font-medium">Sector 59, Noida, Uttar Pradesh, India</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Interactive Map Embed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl aspect-square sm:aspect-video lg:aspect-auto lg:h-80 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4617196623696!2d77.37894377610086!3d28.5859159862174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59fb98a44b9%3A0xc0688319f35955a!2sSector%2059%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709629000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Right side: Modern Glass Form (Col 6-12) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative overflow-hidden"
                    >
                        {/* Decorative internal blob */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Send us a Message</h3>

                            {/* Trust Signals */}
                            <div className="flex flex-wrap gap-4 mb-10">
                                <span className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                                    <span className="text-green-500">✓</span> Free consultation
                                </span>
                                <span className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                                    <span className="text-green-500">✓</span> Response within 24 hours
                                </span>
                                <span className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                                    <span className="text-green-500">✓</span> NDA available
                                </span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Ex: David Warner"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="Ex: david@rigteq.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXX XXXX"
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Inquiry Type</label>
                                        <div className="relative">
                                            <select
                                                value={formState.subject}
                                                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 appearance-none cursor-pointer"
                                            >
                                                <option className="bg-white" value="">Select a Service</option>
                                                <option className="bg-white" value="web">Web Development</option>
                                                <option className="bg-white" value="app">Mobile Apps</option>
                                                <option className="bg-white" value="seo">SEO & Marketing</option>
                                                <option className="bg-white" value="product">Custom Product</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <Globe size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Briefly describe your requirements..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm tracking-wide hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 group"
                                >
                                    SEND ENQUIRY
                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </form>

                            <div className="mt-10 flex items-center justify-center gap-6 pt-8 border-t border-gray-200">
                                <a href="https://wa.me/918750399055" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm font-bold text-green-600 hover:text-green-700 transition-colors group">
                                    {/* Official WhatsApp SVG Logo */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 shrink-0" fill="none">
                                        <defs>
                                            <linearGradient id="wa-grad" x1="85.915" y1="172.011" x2="86.535" y2="2.906" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#20b038" />
                                                <stop offset="1" stopColor="#60d66a" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.99 60.99 0 0 0 8.178 30.681L25.042 149.81l33.498-8.787a61.127 61.127 0 0 0 29.641 7.578h.026c33.72 0 61.139-27.426 61.157-61.133.006-16.335-6.343-31.67-17.866-43.21-11.523-11.54-26.846-17.909-43.314-17.931z" fill="url(#wa-grad)" />
                                        <path d="M68.772 55.603c-1.378-3.06-2.828-3.124-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.288-6.435 15.332.105 17.766 12.015 30.335c.007.014 23.775 37.614 58.766 51.794 7.301 2.786 12.992 4.45 17.427 5.695 7.324 2.058 13.995 1.77 19.254.921 5.875-.98 18.09-7.393 20.637-14.534 2.544-7.14 2.544-13.26 1.782-14.533-.763-1.274-2.77-2.035-5.787-3.561z" fill="#fff" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                <span className="text-sm font-medium text-gray-500">Available 24/7</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
