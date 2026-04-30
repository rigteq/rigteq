import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Web Design Agency India | Top UI/UX & Website Design — Rigteq',
    description: 'Rigteq is one of India\'s best web design agencies. We create stunning, conversion-focused websites with world-class UI/UX design. Offices in Ghaziabad & USA. Free consultation.',
    keywords: 'best web design agency india, web design company india, ui ux design agency india, website design company india, professional web designers india, top web design agency',
    alternates: { canonical: 'https://www.rigteq.com/best-web-design-agency-india' },
    openGraph: {
        title: 'Best Web Design Agency India | Rigteq Softwares',
        description: 'Premium UI/UX & website design services across India. Trusted by 50+ clients globally.',
        url: 'https://www.rigteq.com/best-web-design-agency-india',
    },
};

const designServices = [
    { emoji: '🎨', title: 'UI/UX Design', desc: 'User-centered interface design with Figma prototypes, wireframes & usability testing.' },
    { emoji: '🌐', title: 'Corporate Website Design', desc: 'Professional brand websites that make a strong first impression and generate leads.' },
    { emoji: '📱', title: 'Mobile App UI Design', desc: 'Intuitive, platform-native app designs for iOS & Android with pixel-perfect handoff.' },
    { emoji: '🛒', title: 'E-Commerce UX', desc: 'Conversion-optimised product pages, checkout flows & cart designs that sell more.' },
    { emoji: '📊', title: 'Dashboard & SaaS Design', desc: 'Complex data visualisation & admin panel design made simple and actionable.' },
    { emoji: '♿', title: 'Accessible Design', desc: 'WCAG 2.1 AA compliant designs ensuring your product reaches every user.' },
];

const process = [
    { step: '01', title: 'Discovery Call', desc: 'We learn your goals, audience & brand.' },
    { step: '02', title: 'Wireframes', desc: 'Lo-fi structure maps for every key page.' },
    { step: '03', title: 'Visual Design', desc: 'High-fidelity mockups in your brand language.' },
    { step: '04', title: 'Development', desc: 'Pixel-perfect build with clean, fast code.' },
    { step: '05', title: 'QA & Launch', desc: 'Cross-device testing, then a smooth go-live.' },
    { step: '06', title: 'Support', desc: 'Post-launch care so you are never alone.' },
];

export default function BestWebDesignAgencyIndiaPage() {
    return (
        <main>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/2" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-5">
                        India &apos;s Premium Design Agency
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black text-gray-900 leading-tight tracking-tight mb-6">
                        Best Web Design Agency
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">in India</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        We craft beautiful, fast &amp; accessible websites that turn visitors into customers. Trusted by startups, enterprises &amp; global brands.
                    </p>

                    {/* Social proof stars */}
                    <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-sm text-gray-500 font-medium mb-8">Rated 4.9/5 by 50+ clients</p>

                    {/* Guarantee strip */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {['100% Satisfaction Guarantee', 'Free Revisions', 'On-time Delivery', 'NDA Protected'].map(g => (
                            <span key={g} className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                                <CheckCircle size={14} className="text-green-500" /> {g}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all">
                            📅 Book Free Design Consultation <ArrowRight size={16} />
                        </Link>
                        <Link href="/portfolio" className="px-8 py-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm">
                            View Our Portfolio
                        </Link>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">🟢 Free consultation · No credit card · Response in 24h</p>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Design Services</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                            Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Design Services</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {designServices.map(s => (
                            <div key={s.title} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                                <span className="text-3xl mb-4 block">{s.emoji}</span>
                                <h3 className="font-black text-gray-900 text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Design Process</h2>
                        <p className="text-gray-600 mt-3">Transparent, collaborative, and built for results</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {process.map(p => (
                            <div key={p.step} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                                <p className="text-blue-600 font-black text-2xl mb-2">{p.step}</p>
                                <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                                <p className="text-gray-500 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-black mb-4">Ready to Elevate Your Brand?</h2>
                    <p className="text-blue-200 mb-8">Get a free design consultation. No commitment, no pressure.</p>
                    <Link href="/#contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-lg transition-all">
                        📅 Book Free Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
