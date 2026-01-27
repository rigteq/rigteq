"use client";

import { Check } from "lucide-react";

interface PackagesProps {
    setView?: (view: string) => void;
}

export default function Packages({ setView }: PackagesProps) {
    const packages = [
        {
            name: "Startup",
            price: "2,999",
            features: [
                "1 Page Website",
                "Mobile Responsive",
                "Social Media Integration",
                "Contact Form",
                "1 Year Free Hosting",
                "1 Business Email",
            ],
            color: "bg-blue-50 border-blue-200",
            btnColor: "bg-blue-600 hover:bg-blue-700",
            popular: false,
        },
        {
            name: "Business",
            price: "7,999",
            features: [
                "5 Page Website",
                "Mobile Responsive",
                "SEO Friendly Structure",
                "Social Media Integration",
                "Contact Form + Google Map",
                "1 Year Free Hosting",
                "3 Business Emails",
                "SSL Certificate",
            ],
            color: "bg-white border-blue-600 shadow-xl scale-105",
            btnColor: "bg-red-600 hover:bg-red-700",
            popular: true,
        },
        {
            name: "Enterprise",
            price: "15,999",
            features: [
                "10+ Page Website",
                "Dynamic Content",
                "Admin Panel (CMS)",
                "SEO Optimization",
                "Social Media Integration",
                "Live Chat Integration",
                "1 Year Free Hosting & Domain",
                "10 Business Emails",
                "Priority Support",
            ],
            color: "bg-blue-50 border-blue-200",
            btnColor: "bg-blue-600 hover:bg-blue-700",
            popular: false,
        },
    ];

    const handleChoosePlan = () => {
        if (setView) {
            setView("contact");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 px-4 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0e3d52] mb-4 font-serif">
                        Affordable Web Design <span className="text-blue-600">Packages</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your business. No hidden costs, just transparent pricing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 border ${pkg.color} relative transition-transform duration-300 hover:-translate-y-2`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-sm text-gray-500">starts at</span>
                                <span className="text-4xl font-bold text-[#0e3d52]">₹{pkg.price}</span>
                                <span className="text-gray-400">/-</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                        <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={handleChoosePlan}
                                className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${pkg.btnColor}`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
