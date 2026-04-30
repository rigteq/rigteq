'use client';

import Link from 'next/link';

const whyUs = [
    { icon: '🏆', text: 'Certified Experts — 5+ years proven track record' },
    { icon: '⚡', text: 'Agile delivery — go live in weeks, not months' },
    { icon: '🔒', text: 'NDA-protected — your idea stays 100% yours' },
    { icon: '♻️', text: 'Free revisions until you are satisfied' },
    { icon: '🌍', text: 'India & USA presence — same-timezone calls' },
];

export function Features() {
    return (
        <section id="about" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Stats Panel Overlay */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 p-10 md:p-14 text-gray-900 shadow-xl">
                            {/* Decorative background flare */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Value Proposition</p>
                            <h3 className="text-3xl md:text-[42px] font-black mb-12 leading-tight tracking-tight">
                                Delivering Value <br />Beyond Expectations
                            </h3>

                            {/* Stat grid */}
                            <div className="grid grid-cols-2 gap-6 mb-12">
                                {[
                                    { value: '5+', label: 'Years Active' },
                                    { value: '200+', label: 'Projects Delivered' },
                                    { value: '50+', label: 'Clients Served' },
                                    { value: '5+', label: 'Countries' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md">
                                        <p className="text-3xl font-black text-gray-900 mb-2">{stat.value}</p>
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Guarantees */}
                            <div className="mt-6 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">Our Promise to You</p>
                                <ul className="space-y-1.5">
                                    {['100% satisfaction guarantee', 'Free revisions policy', 'On-time delivery or refund'].map(g => (
                                        <li key={g} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                            <span className="text-green-500 text-base">✓</span> {g}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20 mt-8"
                            >
                                📅 Book Free Consultation
                            </Link>
                        </div>
                    </div>

                    {/* Right: Why Us Content */}
                    <div className="space-y-10">
                        <div>
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Why Partner With Us</p>
                            <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                                The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Strategic Partner</span> for Growth
                            </h2>
                            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                                We combine technical excellence with design-driven innovation to deliver solutions that scale. From Silicon Valley startups to Indian enterprises, we help you dominate the digital landscape.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-y-3">
                            {whyUs.map((item) => (
                                <div
                                    key={item.text}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-[background-color,box-shadow,border-color] duration-200"
                                >
                                    <span className="text-xl shrink-0">{item.icon}</span>
                                    <span className="font-semibold text-gray-700 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
