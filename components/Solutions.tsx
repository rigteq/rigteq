"use client";

import { motion } from "framer-motion";
import { ArrowRight, Landmark, Heart, Building2, Brain, Shield, Zap } from "lucide-react";

interface SolutionsProps {
    setView?: (view: string) => void;
}

const solutions = [
    {
        id: "fintech",
        title: "Fintech & Banking",
        icon: Landmark,
        description: "Secure, scalable, and compliant financial ecosystems powered by predictive AI.",
        features: [
            "Fraud Detection Algorithms",
            "Automated KYC Workflows",
            "Real-time Trading Dashboards",
            "Blockchain Integration",
            "PCI-DSS Compliance",
        ],
        stats: { projects: "50+", growth: "340%" },
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
    },
    {
        id: "healthtech",
        title: "Health-Tech & Telemedicine",
        icon: Heart,
        description: "HIPAA-compliant platforms connecting patients, providers, and data seamlessly.",
        features: [
            "Telemedicine Platforms",
            "EHR/EMR Integration",
            "AI Diagnostic Assistants",
            "Patient Portal Systems",
            "Medical IoT Integration",
        ],
        stats: { projects: "35+", growth: "280%" },
        color: "from-rose-500 to-pink-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
    },
    {
        id: "realestate",
        title: "Real Estate Automation",
        icon: Building2,
        description: "AI-powered property management and virtual tour experiences.",
        features: [
            "Virtual Property Tours (3D/VR)",
            "AI Property Valuation",
            "Lead Scoring Automation",
            "CRM Integration",
            "Document Automation",
        ],
        stats: { projects: "40+", growth: "210%" },
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
];

const capabilities = [
    { icon: Brain, title: "AI & Machine Learning", desc: "Custom models trained on your data" },
    { icon: Shield, title: "Enterprise Security", desc: "SOC2 & ISO 27001 compliant" },
    { icon: Zap, title: "High Performance", desc: "Sub-200ms response times" },
];

export default function Solutions({ setView }: SolutionsProps) {
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
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100 mb-4">
                        INDUSTRY-SPECIFIC INTELLIGENCE
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#0e3d52] font-serif mb-6">
                        Engineered for <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Sector Dominance</span>
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        We don't build generic websites. We architect industry-specific digital ecosystems that transform operations and multiply revenue.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className={`group relative p-8 rounded-3xl border ${solution.borderColor} ${solution.bgColor} hover:shadow-xl transition-all duration-300`}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <solution.icon size={32} className="text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-[#0e3d52] mb-3 group-hover:text-blue-600 transition-colors">
                                {solution.title}
                            </h3>
                            <p className="text-gray-600 mb-6">{solution.description}</p>

                            <ul className="space-y-3 mb-8">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                <div>
                                    <span className="text-2xl font-bold text-[#0e3d52]">{solution.stats.projects}</span>
                                    <span className="text-gray-500 text-sm ml-1">Projects</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-green-600">{solution.stats.growth}</span>
                                    <span className="text-gray-500 text-sm ml-1">Avg. Growth</span>
                                </div>
                            </div>

                            <button
                                onClick={handleContact}
                                className="mt-6 w-full py-3 rounded-xl border border-[#0e3d52] text-[#0e3d52] font-semibold hover:bg-[#0e3d52] hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                            >
                                Explore Solution <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Capabilities Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#0e3d52] rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {capabilities.map((cap, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                                    <cap.icon size={28} className="text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{cap.title}</h4>
                                <p className="text-blue-100">{cap.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button
                            onClick={handleContact}
                            className="px-8 py-4 bg-white text-[#0e3d52] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Schedule Strategy Call <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
