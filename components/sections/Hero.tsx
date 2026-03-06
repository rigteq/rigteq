'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Command, Hexagon, Triangle, CircleDot } from 'lucide-react';

const startupBrands = [
    { name: 'TechFlow', Icon: Hexagon },
    { name: 'Nexus', Icon: CircleDot },
    { name: 'Vortex', Icon: Triangle },
    { name: 'Aura', Icon: Command },
];

export function Hero() {
    return (
        <section
            aria-label="Rigteq Softwares — Premium Software Development"
            className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gray-50 py-10 lg:py-0"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03),transparent_50%)]" />
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-4 sm:mb-6">
                            <Sparkles size={12} />
                            Premium Software Development Company
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-gray-900 leading-[1.1] mb-4 tracking-tight">
                            Build Scalable
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Software</span> for the{' '}
                            <br className="hidden md:block" />Digital Future
                        </h1>

                        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Custom software, AI platforms, and enterprise applications for startups and global businesses.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
                            <Link
                                href="#contact"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                            >
                                Start a Project
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm border border-gray-200 flex items-center justify-center gap-2 transition-all shadow-sm"
                            >
                                View Portfolio
                            </Link>
                        </div>

                        {/* Trusted logos — small brands/startups */}
                        <div className="pt-6 sm:pt-8 border-t border-gray-200">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                                Trusted by growing startups & businesses
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8">
                                {startupBrands.map((brand) => (
                                    <div
                                        key={brand.name}
                                        className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors duration-300 grayscale hover:grayscale-0 cursor-pointer"
                                    >
                                        <brand.Icon size={20} strokeWidth={2.5} className="text-blue-500 opacity-80" />
                                        <span className="font-bold text-sm tracking-tight">{brand.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Visual — hidden on mobile, shown on lg+ */}
                    <div className="hidden lg:block relative max-w-md xl:max-w-lg mx-auto w-full">
                        <div className="rounded-[2.5rem] border border-gray-200 bg-white shadow-2xl overflow-hidden">
                            <div className="border-b border-gray-100 px-6 py-4 flex items-center gap-2 bg-gray-50">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="px-8 py-1 rounded-full bg-white text-[9px] uppercase font-black tracking-widest text-gray-500 shadow-sm border border-gray-100">Analytics Dashboard</div>
                                </div>
                            </div>
                            <div className="aspect-[4/3] bg-white p-6 flex flex-col gap-6">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: 'DELIVERED', value: '50+', color: 'from-blue-50 to-white', border: 'border-blue-100' },
                                        { label: 'CLIENTS', value: '500+', color: 'from-indigo-50 to-white', border: 'border-indigo-100' },
                                        { label: 'GLOBAL', value: '5+', color: 'from-sky-50 to-white', border: 'border-sky-100' },
                                    ].map((stat) => (
                                        <div key={stat.label} className={`rounded-xl bg-gradient-to-b ${stat.color} border ${stat.border} p-3`}>
                                            <p className="text-xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
                                            <p className="text-[9px] font-bold text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 rounded-xl bg-gray-50 border border-gray-100 p-4">
                                    <div className="flex items-end justify-between gap-2 h-full pb-1">
                                        {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                                            <div
                                                key={i}
                                                className="w-full rounded-t-sm bg-blue-600"
                                                style={{ height: `${h}%` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Sparkles size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Global Leader</p>
                                <p className="text-[10px] font-medium text-gray-500">Software Engineering</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
