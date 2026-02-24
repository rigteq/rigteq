"use client";

import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle, AlertCircle, RotateCcw } from "lucide-react";

type ConnectFormState = {
    websiteType: string;
    mainGoal: string;
    timeframe: string;
    budget: string;
    businessAbout: string;
    email: string;
    fullName: string;
    phoneNumber: string;
};

export default function ConnectPage() {
    const [form, setForm] = useState<ConnectFormState>({
        websiteType: "",
        mainGoal: "",
        timeframe: "",
        budget: "",
        businessAbout: "",
        email: "",
        fullName: "",
        phoneNumber: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const websiteTypeOptions = [
        "Business / Corporate Website",
        "E-commerce Website",
        "Real Estate / Property Website",
        "Portfolio / Personal Brand",
        "Other"
    ];

    const mainGoalOptions = [
        "Build Brand Awareness",
        "Increase Online Sales",
        "Generate More Leads",
        "Improve Design & Speed"
    ];

    const timeframeOptions = [
        "Immediately (within a month)",
        "In 2–3 months"
    ];

    const budgetOptions = [
        "Below ₹10,000",
        "₹10,000 – ₹25,000",
        "₹25,000 & above"
    ];

    const businessAboutOptions = [
        "Real Estate",
        "IT & Software Development",
        "E-commerce / Retail",
        "Travel & Tourism",
        "Education / Edtech",
        "Healthcare & Pharmacy",
        "Manufacturing & Industrial",
        "Media & Entertainment",
        "Food & Beverage",
        "Other"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        if (error) setError(null);
    };

    const validate = () => {
        if (!form.fullName.trim()) return "Please enter your full name.";
        if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "A valid email is required.";
        if (!form.phoneNumber.trim() || !/^\+?\d{10,15}$/.test(form.phoneNumber.replace(/\s/g, ""))) return "A valid phone number is required (10-15 digits).";
        if (!form.websiteType) return "Please select the type of website you are looking for.";
        if (!form.mainGoal) return "Please select your main goal.";
        if (!form.timeframe) return "Please select your timeframe.";
        if (!form.budget) return "Please select your estimated budget.";
        if (!form.businessAbout) return "Please select what your business is about.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);

        // Simulate an API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSuccess(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err: any) {
            setError(err?.message || "Internal server error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 text-gray-900 font-sans flex flex-col">
            <div className="sticky top-0 z-[100]">
                <TopNav />
                <Navbar />
            </div>

            <section className="relative py-24 px-4 md:px-12 flex-grow flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-100 opacity-50 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-100 opacity-50 blur-3xl pointer-events-none"></div>

                <div className="max-w-4xl mx-auto w-full relative z-10">
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <span className="inline-block py-1.5 px-5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-6 shadow-sm">
                            Connect With Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#0e3d52] mb-6 font-serif tracking-tight leading-tight">
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">Extraordinary</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Fill out the details below to help us understand your vision. Our experts will review your requirements and get back to you with the perfect strategy.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-2xl relative overflow-hidden group animate-in zoom-in-95 duration-500 delay-150 fill-mode-both">
                        {success ? (
                            <div className="py-12 text-center">
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle className="text-green-500" size={48} />
                                </div>
                                <h3 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Proposal Sent!</h3>
                                <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
                                    Thank you for reaching out. We have received your project details and our team will contact you shortly.
                                </p>
                                <button
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
                                    onClick={() => setSuccess(false)}
                                >
                                    <RotateCcw size={20} /> Submit Another Project
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {error && (
                                    <div className="flex items-center gap-3 text-sm text-red-600 bg-red-50 p-4 rounded-xl border border-red-200 animate-in fade-in">
                                        <AlertCircle size={20} className="shrink-0" />
                                        <span className="font-medium">{error}</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Personal Information */}
                                    <div className="space-y-6 md:col-span-2 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
                                            Your Details
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                                <input
                                                    name="fullName"
                                                    value={form.fullName}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                                <input
                                                    name="phoneNumber"
                                                    value={form.phoneNumber}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Specifications */}
                                    <div className="space-y-6 md:col-span-2 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
                                            Project Specifications
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">What type of website are you looking for?</label>
                                                <select
                                                    name="websiteType"
                                                    value={form.websiteType}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm appearance-none"
                                                >
                                                    <option value="" disabled>Select website type</option>
                                                    {websiteTypeOptions.map((opt) => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">What's your main goal for your website?</label>
                                                <select
                                                    name="mainGoal"
                                                    value={form.mainGoal}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm appearance-none"
                                                >
                                                    <option value="" disabled>Select your goal</option>
                                                    {mainGoalOptions.map((opt) => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">How soon do you plan to improve your website?</label>
                                                <select
                                                    name="timeframe"
                                                    value={form.timeframe}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm appearance-none"
                                                >
                                                    <option value="" disabled>Select expected timeframe</option>
                                                    {timeframeOptions.map((opt) => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">What's your estimated budget range?</label>
                                                <select
                                                    name="budget"
                                                    value={form.budget}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm appearance-none"
                                                >
                                                    <option value="" disabled>Select budget range</option>
                                                    {budgetOptions.map((opt) => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-sm font-semibold text-gray-700 ml-1">What's your business about?</label>
                                                <select
                                                    name="businessAbout"
                                                    value={form.businessAbout}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium shadow-sm appearance-none"
                                                >
                                                    <option value="" disabled>Select your industry</option>
                                                    {businessAboutOptions.map((opt) => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full md:w-auto md:min-w-[240px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70 mx-auto block"
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Submit Requirements <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-sm text-gray-500 mt-4">
                                        Your details are completely safe and secure with us.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
