"use client";

import { useState, useEffect } from "react";
import { Calculator, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WebsiteCostCalculator() {
    const [pages, setPages] = useState(5);
    const [websiteType, setWebsiteType] = useState("business"); // business, ecommerce, portfolio
    const [features, setFeatures] = useState({
        seo: false,
        content: false,
        logo: false,
        maintenance: false,
    });
    const [totalCost, setTotalCost] = useState(0);

    const baseRates = {
        business: 15000,
        ecommerce: 45000,
        portfolio: 10000,
    };

    const pageRate = 1000;

    const featureRates = {
        seo: 5000,
        content: 2000, // per page approx, but let's keep it flat for simplicity or multiply
        logo: 3000,
        maintenance: 10000, // annual
    };

    useEffect(() => {
        let cost = baseRates[websiteType as keyof typeof baseRates];
        cost += (pages - 1) * pageRate; // First page included in base

        if (features.seo) cost += featureRates.seo;
        if (features.content) cost += featureRates.content * pages;
        if (features.logo) cost += featureRates.logo;
        if (features.maintenance) cost += featureRates.maintenance;

        setTotalCost(cost);
    }, [pages, websiteType, features]);

    const toggleFeature = (key: keyof typeof features) => {
        setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className="py-20 px-4 md:px-12 bg-gray-50 from-gray-50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-top-right z-0" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-gray-900">
                        Website Cost <span className="text-blue-600">Calculator</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get an instant estimate for your dream website. Transparent pricing, no hidden charges.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        {/* Website Type */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Website Type</label>
                            <div className="grid grid-cols-3 gap-4">
                                {['business', 'ecommerce', 'portfolio'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setWebsiteType(type)}
                                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 border ${websiteType === type
                                            ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                                            : "bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-400"
                                            }`}
                                    >
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Pages Slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Number of Pages</label>
                                <span className="text-2xl font-bold text-blue-600">{pages}</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={pages}
                                onChange={(e) => setPages(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2">
                                <span>1 Page</span>
                                <span>50 Pages</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Additional Features</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { key: 'seo', label: 'SEO Optimization', icon: '🚀' },
                                    { key: 'content', label: 'Content Writing', icon: '✍️' },
                                    { key: 'logo', label: 'Logo Design', icon: '🎨' },
                                    { key: 'maintenance', label: 'Annual Maintenance', icon: '🛠️' },
                                ].map((feature) => (
                                    <button
                                        key={feature.key}
                                        onClick={() => toggleFeature(feature.key as keyof typeof features)}
                                        className={`flex items-center p-4 rounded-xl border transition-all duration-200 text-left ${features[feature.key as keyof typeof features]
                                            ? "border-blue-500 bg-blue-50 text-blue-900"
                                            : "border-gray-200 hover:border-blue-300 text-gray-600"
                                            }`}
                                    >
                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${features[feature.key as keyof typeof features]
                                            ? "bg-blue-600 border-blue-600 text-white"
                                            : "border-gray-300 bg-white"
                                            }`}>
                                            {features[feature.key as keyof typeof features] && <Check size={14} />}
                                        </div>
                                        <span className="font-medium">{feature.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Estimate Card */}
                    <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <h3 className="text-xl font-medium text-gray-400 mb-2">Estimated Cost</h3>
                        <div className="flex items-baseline mb-8 relative z-10">
                            <span className="text-5xl font-bold tracking-tight">₹{totalCost.toLocaleString()}</span>
                            <span className="text-gray-400 ml-2 text-sm">*approx</span>
                        </div>

                        <div className="space-y-4 mb-8 text-gray-300 relative z-10">
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span>Development Time</span>
                                <span className="font-medium text-white text-right">7-15 Days</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span>Hosting Charges</span>
                                <span className="font-medium text-white text-right">INR 2400 - 5000 (Yearly)</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span>Support</span>
                                <span className="font-medium text-white text-right">6 Months Free</span>
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-900/50">
                            <Calculator size={20} />
                            Get Detailed Quote
                            <ArrowRight size={20} />
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-4">
                            *Final price may vary based on specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
