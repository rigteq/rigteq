'use client';

import { motion } from 'framer-motion';
import { Send, Globe } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Submit to API
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: new FormData(e.target as HTMLFormElement),
            });
            if (response.ok) {
                alert('Thank you for your message! Our team will get back to you shortly.');
                setFormState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative overflow-hidden max-w-2xl mx-auto"
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
                                name="name"
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
                                name="email"
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
                                name="phone"
                                type="tel"
                                placeholder="+91 XXXX XXXX"
                                value={formState.phone}
                                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Type</label>
                            <div className="relative">
                                <select
                                    required
                                    name="projectType"
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
                            name="budget"
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
                            name="message"
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
                        <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </form>
            </div>
        </motion.div>
    );
}