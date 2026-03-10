'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Upload, Check } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface JobApplicationFormProps {
    job: {
        id: string;
        title: string;
        department: string;
        type: string;
        location: string;
        experience: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

export default function JobApplicationForm({ job, isOpen, onClose }: JobApplicationFormProps) {
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        portfolio: '',
        experience: '',
        coverLetter: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsLoading(false);
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormState({
            fullName: '',
            email: '',
            phone: '',
            linkedIn: '',
            portfolio: '',
            experience: '',
            coverLetter: ''
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={handleClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-gray-100 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-black text-gray-900">Apply for Position</h3>
                            <p className="text-sm text-blue-600 font-bold">{job.title}</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check size={40} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-2">Application Submitted!</h3>
                                <p className="text-gray-600 mb-8">Thank you for applying. Our team will review your application and get back to you within 2-3 business days.</p>
                                <button
                                    onClick={handleClose}
                                    className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                                >
                                    Close
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name *</label>
                                        <input
                                            required
                                            name="fullName"
                                            type="text"
                                            placeholder="Ex: John Smith"
                                            value={formState.fullName}
                                            onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address *</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="Ex: john@email.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 XXXX XXXX"
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Years of Experience *</label>
                                        <select
                                            required
                                            name="experience"
                                            value={formState.experience}
                                            onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 appearance-none cursor-pointer"
                                        >
                                            <option className="bg-white" value="">Select Experience</option>
                                            <option className="bg-white" value="0-1">0-1 Years</option>
                                            <option className="bg-white" value="1-2">1-2 Years</option>
                                            <option className="bg-white" value="2-3">2-3 Years</option>
                                            <option className="bg-white" value="3-5">3-5 Years</option>
                                            <option className="bg-white" value="5-7">5-7 Years</option>
                                            <option className="bg-white" value="7+">7+ Years</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">LinkedIn Profile</label>
                                        <input
                                            name="linkedIn"
                                            type="url"
                                            placeholder="https://linkedin.com/in/yourprofile"
                                            value={formState.linkedIn}
                                            onChange={(e) => setFormState({ ...formState, linkedIn: e.target.value })}
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Portfolio / Website</label>
                                        <input
                                            name="portfolio"
                                            type="url"
                                            placeholder="https://yourportfolio.com"
                                            value={formState.portfolio}
                                            onChange={(e) => setFormState({ ...formState, portfolio: e.target.value })}
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Resume Upload */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Resume / CV *</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors cursor-pointer bg-gray-50">
                                        <Upload className="mx-auto text-gray-400 mb-2" size={28} />
                                        <p className="text-sm font-medium text-gray-600">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
                                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Cover Letter / Message</label>
                                    <textarea
                                        name="coverLetter"
                                        rows={4}
                                        placeholder="Tell us why you'd be a great fit for this role..."
                                        value={formState.coverLetter}
                                        onChange={(e) => setFormState({ ...formState, coverLetter: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm tracking-wide hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

