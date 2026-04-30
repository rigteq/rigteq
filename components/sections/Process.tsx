'use client';

import { Search, PenTool, Monitor, Database, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Requirements Analysis',
        description: 'We define your project scope, features, and tech requirements — ensuring every build decision is aligned with your goals.',
        icon: Search,
    },
    {
        num: '02',
        title: 'Design & Prototyping',
        description: 'Wireframes and interactive prototypes give you a visual blueprint before a single line of code is written.',
        icon: PenTool,
    },
    {
        num: '03',
        title: 'Frontend Development',
        description: 'Pixel-perfect, responsive UI built with best practices — fast, accessible, and consistent across all devices.',
        icon: Monitor,
    },
    {
        num: '04',
        title: 'Backend & Database',
        description: 'Robust APIs, optimised databases, and secure infrastructure that power your application behind the scenes.',
        icon: Database,
    },
    {
        num: '05',
        title: 'Testing & QA',
        description: 'Unit, integration and performance testing to catch bugs early — so you ship with confidence.',
        icon: ShieldCheck,
    },
    {
        num: '06',
        title: 'Deployment & Launch',
        description: 'Smooth cloud deployment with monitoring in place. Your product goes live — and stays live.',
        icon: Rocket,
    },
];

export function Process() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Our Methodology</p>
                    <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                        Process We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Follow</span>
                    </h2>
                </div>

                {/* 2-Column Step Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {steps.map((step) => (
                        <div
                            key={step.title}
                            className="group flex items-start gap-5"
                        >
                            {/* Step number + icon stacked */}
                            <div className="shrink-0 flex flex-col items-center gap-1">
                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{step.num}</span>
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                                    <step.icon size={22} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="pt-5">
                                <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
