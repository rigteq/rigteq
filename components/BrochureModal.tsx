"use client";

import { X, Download, FileText } from "lucide-react";
import { useState } from "react";

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate "processing"
        setTimeout(() => {
            setIsSubmitted(true);
            window.location.href = '/brochure';
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-1 bg-white/50 rounded-full">
                    <X size={20} />
                </button>

                {!isSubmitted ? (
                    <div className="p-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <FileText size={32} className="text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Download Brochure</h3>
                        <p className="text-center text-gray-600 mb-6 text-sm">
                            Get our comprehensive service guide and exclusive pricing offers including our ₹2,999 starter pack.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-gray-50 outline-none transition-all"
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <FileText size={18} />
                                View Brochure
                            </button>
                        </form>
                        <p className="text-xs text-center text-gray-400 mt-4">
                            We respect your privacy. No spam.
                        </p>
                    </div>
                ) : (
                    <div className="p-8 text-center py-12">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto animate-bounce">
                            <Download size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Downloading...</h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Your download has started. Please check your downloads folder.
                        </p>
                        <button onClick={onClose} className="text-blue-600 font-semibold hover:underline">
                            Close Window
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
