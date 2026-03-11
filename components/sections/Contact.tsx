'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        alert('Thank you for your message! Our team will get back to you shortly.');
        setFormState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
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
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                                                setFormState({ ...formState, name: val });
                                            }}
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
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/[^0-9]/g, '');
                                                setFormState({ ...formState, phone: val });
                                            }}
                                            className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Type</label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={formState.projectType}
                                                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                                                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 appearance-none cursor-pointer"
                                            >
                                                <option className="bg-white" value="">Select a Project Type</option>
                                                <option className="bg-white" value="web">Web App Development</option>
                                                <option className="bg-white" value="mobile">Mobile App Engineering</option>
                                                <option className="bg-white" value="ai">AI / Automation</option>
                                                <option className="bg-white" value="enterprise">Enterprise Software</option>
                                                <option className="bg-white" value="cloud">Cloud Architecture</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <Globe size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Budget Range</label>
                                    <select
                                        required
                                        value={formState.budget}
                                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 appearance-none cursor-pointer"
                                    >
                                        <option value="">Select your budget</option>
                                        <option value="10k-50k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value="50k-100k">$50,000 - $100,000</option>
                                        <option value="100k+">$100,000+</option>
                                    </select>
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

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-200">
                                <a href="https://wa.me/918750399055" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-all shadow-lg shadow-green-500/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    <span>Chat on WhatsApp</span>
                                </a>
                                <span className="text-sm font-medium text-gray-500">Available 24/7</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
