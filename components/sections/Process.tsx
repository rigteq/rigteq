'use client';

import { Search, PenTool, Monitor, Database, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
    {
        title: 'Requirements Analysis',
        description: 'We thoroughly analyze your project\'s needs, defining its scope and features to align with your vision and technical requirements.',
        icon: Search,
    },
    {
        title: 'Design and Prototyping',
        description: 'Our skilled designers create wireframes and prototypes that serve as the visual blueprint for your app.',
        icon: PenTool,
    },
    {
        title: 'Frontend Development',
        description: 'Our front-end developers bring your design to life with coding best practices by ensuring the interface is user-friendly and responsive across multiple screen sizes.',
        icon: Monitor,
    },
    {
        title: 'Database and Backend Development',
        description: 'Our developers lay the groundwork by establishing the app\'s backend infrastructure, configuring databases and building APIs for ensuring efficient data management and security.',
        icon: Database,
    },
    {
        title: 'Testing and Quality Assurance',
        description: 'Rigorous testing is conducted which includes unit, integration and performance testing to identify and fix any bugs or issues for ensuring best app performance.',
        icon: ShieldCheck,
    },
    {
        title: 'Deployment & Launch',
        description: 'This pivotal stage involves the technical release of your app to servers and its public release to users. It marks the moment your app is made available to users.',
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
                            className="group flex items-start gap-6"
                        >
                            {/* Icon Circle */}
                            <div className="shrink-0 w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                                <step.icon size={24} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Text */}
                            <div className="pt-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
