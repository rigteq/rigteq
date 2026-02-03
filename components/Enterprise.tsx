"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Clock, Headphones, Award, CheckCircle2 } from "lucide-react";

interface EnterpriseProps {
    setView?: (view: string) => void;
}

const enterpriseFeatures = [
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "SOC2 Type II compliant infrastructure with end-to-end encryption and regular security audits."
    },
    {
        icon: Users,
        title: "Dedicated Squad",
        description: "A cross-functional team of designers, developers, and strategists assigned exclusively to your project."
    },
    {
        icon: Clock,
        title: "Priority Delivery",
        description: "Fast-track development with guaranteed milestones and transparent progress tracking."
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock technical support with dedicated account management."
    },
];

const enterpriseTiers = [
    {
        name: "Growth Partner",
        investment: "₹50K - ₹2L",
        description: "For scaling startups ready to dominate their market.",
        features: [
            "Full-Stack Web Platform",
            "Basic AI Integration",
            "3 Months Support",
            "Performance Optimization",
            "Analytics Dashboard",
        ],
        highlight: false,
    },
    {
        name: "Transformation Suite",
        investment: "₹2L - ₹10L",
        description: "Complete digital transformation for established businesses.",
        features: [
            "Custom SaaS/App Development",
            "Advanced AI Automation",
            "CRM/ERP Integration",
            "6 Months Support + AMC",
            "Dedicated Project Manager",
            "Quarterly Strategy Reviews",
        ],
        highlight: true,
    },
    {
        name: "Enterprise Architect",
        investment: "₹10L+",
        description: "White-glove service for industry leaders.",
        features: [
            "Multi-Platform Ecosystem",
            "Custom AI Model Training",
            "Full Infrastructure Setup",
            "12 Months Premium Support",
            "Dedicated Development Squad",
            "C-Suite Strategy Sessions",
            "SLA Guaranteed Uptime",
        ],
        highlight: false,
    },
];

const successMetrics = [
    { value: "₹500Cr+", label: "Revenue Generated for Clients" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "200+", label: "Enterprise Projects" },
    { value: "4.9/5", label: "Client Satisfaction" },
];

export default function Enterprise({ setView }: EnterpriseProps) {
    const handleContact = () => {
        if (setView) {
            setView("contact");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold border border-purple-100 mb-4">
                        <Award size={14} /> White-Glove Service
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#0e3d52] font-serif mb-6">
                        Enterprise-Grade <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Digital Excellence</span>
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        For businesses investing ₹50,000+ in their digital future. Dedicated teams, guaranteed results, and white-glove service at every step.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {enterpriseFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                                <feature.icon size={24} className="text-purple-600" />
                            </div>
                            <h4 className="text-lg font-bold text-[#0e3d52] mb-2">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tier Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {enterpriseTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.15 }}
                            className={`rounded-3xl p-8 border relative ${tier.highlight
                                ? "bg-gradient-to-b from-purple-50 to-white border-purple-300 shadow-xl scale-105"
                                : "bg-white border-gray-200 hover:shadow-lg"
                                } transition-all`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                                    MOST SELECTED
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-[#0e3d52] mb-2">{tier.name}</h3>
                            <div className="text-3xl font-bold text-purple-600 mb-3">{tier.investment}</div>
                            <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={handleContact}
                                className={`w-full py-4 rounded-xl font-bold transition-all ${tier.highlight
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                                    : "border border-[#0e3d52] text-[#0e3d52] hover:bg-[#0e3d52] hover:text-white"
                                    }`}
                            >
                                Schedule Discovery Call
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Success Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-[#0e3d52] rounded-3xl p-8 md:p-12"
                >
                    <h3 className="text-3xl font-bold text-white text-center mb-10">Proven Enterprise Results</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {successMetrics.map((metric, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
                                <div className="text-blue-200 text-sm">{metric.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button
                            onClick={handleContact}
                            className="px-8 py-4 bg-white text-[#0e3d52] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Book Executive Consultation <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
