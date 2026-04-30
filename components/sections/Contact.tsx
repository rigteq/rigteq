'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle } from 'lucide-react';
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formData = new FormData();
            formData.append('name', formState.name);
            formData.append('email', formState.email);
            formData.append('company', formState.phone);
            formData.append('message',
                `Phone: ${formState.phone}\nProject Type: ${formState.projectType}\nBudget: ${formState.budget}\n\n${formState.message}`
            );

            const res = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data?.error || 'Server error');
            }

            setSubmitStatus('success');
            setFormState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
        } catch (err: any) {
            setSubmitStatus('error');
            setErrorMessage(err.message || 'Something went wrong. Please try WhatsApp or email directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Contact us</p>
                        <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Transform</span> Your Business?
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left Info Panel */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <motion.a
                                href="tel:+918750399055"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white border border-gray-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Direct Call</h4>
                                    <p className="text-gray-500 text-sm font-medium">+91 87503 99055</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="mailto:sales@rigteq.com"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 rounded-2xl bg-white border border-gray-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email Support</h4>
                                    <p className="text-gray-500 text-sm font-medium">sales@rigteq.com</p>
                                </div>
                            </motion.a>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-2xl bg-white border border-gray-200 flex items-center gap-4 sm:col-span-2 lg:col-span-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Registered Office</h4>
                                    <p className="text-gray-500 text-sm font-medium">Office no-UGF-74, Signature street, Govindpuram, Ghaziabad, Uttar Pradesh 201013</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Google Maps */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl aspect-square sm:aspect-video lg:aspect-auto lg:h-80 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.563!2d77.495!3d28.692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf366!2sGovindpuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201013!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Rigteq Softwares Office Location"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative overflow-hidden"
                    >
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-gray-900 mb-6">Send us a Message</h3>

                            {/* Trust Signals */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {['Free consultation', 'Reply within 24 hours', 'NDA available'].map((t) => (
                                    <span key={t} className="flex items-center gap-1.5 text-sm text-gray-600 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                                        <span className="text-green-500">✓</span> {t}
                                    </span>
                                ))}
                            </div>

                            {/* Success State */}
                            {submitStatus === 'success' && (
                                <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-green-800 text-sm">Message sent successfully!</p>
                                        <p className="text-green-700 text-sm mt-0.5">Our team will get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            )}

                            {/* Error State */}
                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
                                    <p className="font-bold text-red-800 text-sm">Failed to send message</p>
                                    <p className="text-red-700 text-sm mt-0.5">{errorMessage}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name *</label>
                                        <input
                                            id="contact-name"
                                            required
                                            type="text"
                                            placeholder="e.g. Rajesh Sharma"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value.replace(/[^a-zA-Z\s]/g, '') })}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address *</label>
                                        <input
                                            id="contact-email"
                                            required
                                            type="email"
                                            placeholder="e.g. rajesh@company.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-phone" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value.replace(/[^0-9+\s-]/g, '') })}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-project" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Type *</label>
                                        <div className="relative">
                                            <select
                                                id="contact-project"
                                                required
                                                value={formState.projectType}
                                                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 appearance-none cursor-pointer"
                                            >
                                                <option value="">Select Project Type</option>
                                                <option value="web">Web App Development</option>
                                                <option value="mobile">Mobile App Engineering</option>
                                                <option value="ai">AI / Automation</option>
                                                <option value="enterprise">Enterprise Software</option>
                                                <option value="cloud">Cloud Architecture</option>
                                                <option value="ecommerce">E-Commerce Platform</option>
                                                <option value="saas">SaaS Product</option>
                                            </select>
                                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-budget" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Budget Range *</label>
                                    <div className="relative">
                                        <select
                                            id="contact-budget"
                                            required
                                            value={formState.budget}
                                            onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 appearance-none cursor-pointer"
                                        >
                                            <option value="">Select your budget</option>
                                            <optgroup label="₹ Indian Rupees">
                                                <option value="upto-1L">Up to ₹1 Lakh (~$1,200)</option>
                                                <option value="1L-3L">₹1L – ₹3L ($1.2K–$3.6K)</option>
                                                <option value="3L-7L">₹3L – ₹7L ($3.6K–$8.4K)</option>
                                                <option value="7L-20L">₹7L – ₹20L ($8.4K–$24K)</option>
                                                <option value="20L+">₹20L+ ($24K+)</option>
                                            </optgroup>
                                            <optgroup label="$ US Dollars">
                                                <option value="10k-25k">$10,000 – $25,000</option>
                                                <option value="25k-50k">$25,000 – $50,000</option>
                                                <option value="50k-100k">$50,000 – $100,000</option>
                                                <option value="100k+">$100,000+</option>
                                            </optgroup>
                                        </select>
                                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message *</label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={4}
                                        placeholder="Briefly describe your requirements..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm tracking-wide hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            SEND ENQUIRY
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-200">
                                <a href="https://wa.me/918750399055" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-all shadow-lg shadow-green-500/25">
                                    <img src="/images/whatsapp.svg" alt="" aria-hidden="true" className="w-5 h-5" />
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
