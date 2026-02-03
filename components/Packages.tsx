"use client";

import { Check, Info, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PackagesProps {
    setView?: (view: string) => void;
}

const categories = ["Business Web", "AI Chat Agents", "SaaS/App Dev", "SchoolMS/LMS"];

const pricingData = {
    "Business Web": [
        {
            name: "Starter (MVP)",
            price: "25,000",
            description: "High-performance static website built with Next.js",
            features: [
                "Next.js Static Architecture",
                "Mobile Responsive Design",
                "Basic On-Page SEO",
                "Advanced Contact Form",
                "1 Year Premium Hosting",
                "SSL Certificate Included",
            ],
            popular: false
        },
        {
            name: "Professional (Growth)",
            price: "75,000",
            description: "Dynamic CMS-powered website for scaling businesses.",
            features: [
                "Dynamic Content Management System",
                "Advanced Animations (Framer Motion)",
                "Blog & Media Section",
                "Local SEO Dominance Package",
                "Analytics & Tracking Integration",
                "3 Months Priority Support",
                "Admin Dashboard Access",
            ],
            popular: true
        },
        {
            name: "Enterprise (Scale)",
            price: "2.5 Lakh+",
            description: "Custom architecture for large-scale operations.",
            features: [
                "Custom Microservices Architecture",
                "Headless CMS Implementation",
                "Global CDN Strategy",
                "DDoS Protection & Security Audit",
                "Dedicated Account Manager",
                "SLA Guaranteed 99.9% Uptime",
                "Enterprise-Grade Performance",
            ],
            popular: false
        }
    ],
    "AI Chat Agents": [
        {
            name: "Starter (Rule-Based)",
            price: "15,000",
            description: "Automated responses for FAQs & lead capture.",
            features: [
                "Pre-defined Conversation Flows",
                "Instant Response System",
                "Lead Capture & Email Forwarding",
                "Basic Analytics Dashboard",
                "Website Widget Integration",
            ],
            popular: false
        },
        {
            name: "Professional (GenAI/GPT-4)",
            price: "40,000",
            description: "Intelligent agent trained on your business data.",
            features: [
                "Trained on YOUR Business Data",
                "Natural Language Understanding",
                "Multi-language Support (10+)",
                "Knowledge Base Integration",
                "Sentiment Analysis & Routing",
                "CRM Lead Push Integration",
            ],
            popular: true
        },
        {
            name: "Enterprise (Omnichannel/CRM)",
            price: "1.5 Lakh+",
            description: "Full CRM integration across WhatsApp, Web, and Email.",
            features: [
                "WhatsApp Business API Integration",
                "Bi-directional CRM Sync",
                "Voice AI Capabilities",
                "Autonomous Sales Workflows",
                "Advanced Analytics Dashboard",
                "Custom AI Model Fine-tuning",
            ],
            popular: false
        }
    ],
    "SaaS/App Dev": [
        {
            name: "Basic MVP",
            price: "1 Lakh",
            description: "Validate your idea with a core functional application.",
            features: [
                "React Native / Flutter Development",
                "Cloud Backend (Supabase/Firebase)",
                "User Authentication System",
                "Core Feature Implementation",
                "Basic Admin Dashboard",
            ],
            popular: false
        },
        {
            name: "Full Stack (Production)",
            price: "3 Lakh",
            description: "Production-ready application for market launch.",
            features: [
                "Custom Backend (Node.js/Go)",
                "Advanced Database Architecture",
                "Payment Gateway Integration",
                "Comprehensive Admin Dashboard",
                "Push Notifications System",
                "App Store Deployment",
            ],
            popular: true
        },
        {
            name: "Custom ERP/CRM",
            price: "10 Lakh+",
            description: "Enterprise-grade software for internal operations.",
            features: [
                "Complex Business Workflows",
                "Role-Based Access Control (RBAC)",
                "Complete Audit Logging",
                "Legacy System Integration",
                "On-Premise Deployment Option",
                "Dedicated DevOps Support",
            ],
            popular: false
        }
    ],
    "SchoolMS/LMS": [
        {
            name: "Standard",
            price: "50,000",
            description: "Digitalize your institute's core operations.",
            features: [
                "Student Management System",
                "Fee Collection & Tracking",
                "Attendance Management",
                "Digital Report Cards",
                "Parent Communication Portal",
            ],
            popular: false
        },
        {
            name: "AI Integrated",
            price: "1.2 Lakh",
            description: "Smart campus management with predictive insights.",
            features: [
                "AI Performance Analysis",
                "Parent App (iOS/Android)",
                "Automated Notifications",
                "Transport GPS Tracking",
                "Online Examination System",
                "Learning Analytics Dashboard",
            ],
            popular: true
        },
        {
            name: "Multi-Campus",
            price: "5 Lakh+",
            description: "Centralized control for chain of schools.",
            features: [
                "Central HQ Dashboard",
                "Unified Data Management",
                "Custom Branding per Campus",
                "3rd Party API Integrations",
                "Dedicated Cloud Server",
                "24/7 Priority Support",
            ],
            popular: false
        }
    ]
};

const amcPlans = [
    {
        name: "Managed Hosting & Security",
        price: "1,500",
        period: "/month",
        description: "Essential maintenance for peace of mind.",
        features: ["Monthly Security Patching", "Server Monitoring", "Backup Management", "SSL Renewals"]
    },
    {
        name: "Performance Retainer",
        price: "10,000",
        period: "/month",
        description: "Continuous optimization & support.",
        features: ["Monthly SEO Updates", "AI Model Fine-tuning", "5 Hours Dev Support", "Performance Reports"]
    },
    {
        name: "Enterprise Ops",
        price: "15%",
        period: "of project/year",
        description: "Mandatory for projects over ₹5 Lakhs.",
        features: ["Dedicated Account Manager", "Priority Bug Fixes", "Quarterly Strategy Reviews", "SLA Guaranteed"]
    }
];

export default function Packages({ setView }: PackagesProps) {
    const [activeCategory, setActiveCategory] = useState("Business Web");

    const handleChoosePlan = () => {
        if (setView) {
            setView("contact");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <section id="packages" className="py-24 px-4 md:px-12 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-4">
                        <Sparkles size={14} /> Transparent Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E42] mb-4 font-serif">
                        Premium Digital <span className="text-gradient">Solutions</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Enterprise-grade engineering at transparent pricing. Choose the tier that matches your ambition.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat
                                ? "bg-[#004e92] text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
                    <AnimatePresence mode="wait">
                        {pricingData[activeCategory as keyof typeof pricingData].map((pkg, index) => (
                            <motion.div
                                key={`${activeCategory}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`rounded-3xl p-8 border relative flex flex-col ${pkg.popular
                                    ? "bg-white border-[#00c6ff] shadow-2xl shadow-blue-500/10 md:scale-105 ring-1 md:ring-0 ring-[#00c6ff]"
                                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                                    } transition-all duration-300`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-premium text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                        RECOMMENDED
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-[#0B1E42] mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-sm text-gray-500">₹</span>
                                    <span className="text-4xl font-bold text-[#004e92]">{pkg.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-8 h-12">{pkg.description}</p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                            <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={handleChoosePlan}
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${pkg.popular
                                        ? "bg-gradient-premium text-white shadow-lg hover:shadow-xl hover:scale-105"
                                        : "bg-[#004e92] hover:bg-[#003d73] text-white"
                                        }`}
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* AMC Section */}
                <div className="bg-gradient-to-r from-[#0e3d52] to-[#1a5a7a] rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
                            <Info size={14} /> Recurring Value
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Annual Maintenance Contracts (AMC)</h3>
                        <p className="text-blue-100 max-w-2xl mx-auto">
                            No product leaves Rigteq without a recurring revenue tail. Ensure your ecosystem never degrades.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {amcPlans.map((plan, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                                <div className="flex items-baseline gap-1 mb-3">
                                    <span className="text-3xl font-bold text-white">₹{plan.price}</span>
                                    <span className="text-blue-200 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-blue-100 text-sm mb-4">{plan.description}</p>
                                <ul className="space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                                            <Check size={14} className="text-green-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button
                            onClick={handleChoosePlan}
                            className="px-8 py-4 bg-white text-[#0e3d52] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Discuss Custom Retainer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
