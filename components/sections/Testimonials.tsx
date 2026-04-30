'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, BadgeCheck, Building2, MapPin, Zap, BookOpen, Truck, Heart, BarChart2 } from 'lucide-react';

const testimonials = [
    {
        name: 'Arjun Mehta',
        initials: 'AM',
        role: 'Co-founder & CTO',
        company: 'PaySprint Technologies',
        location: 'Mumbai, Maharashtra',
        text: '"Rigteq built our entire payment gateway reconciliation system from scratch. What impressed me most was their understanding of Indian banking APIs — UPI, NEFT, IMPS integrations were flawless. Our transaction success rate jumped from 89% to 97.4% post-launch. Bahut badiya team hai!"',
        rating: 5,
        avatarGradient: 'from-blue-600 to-indigo-700',
        avatarBg: 'bg-gradient-to-br from-blue-600 to-indigo-700',
        glowColor: 'rgba(59,130,246,0.3)',
        accentLight: 'bg-blue-50',
        accentText: 'text-blue-600',
        accentBorder: 'border-blue-100',
        CompanyIcon: Zap,
        projectTag: 'Fintech Payment Platform',
        tagColor: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
        name: 'Priya Krishnamurthy',
        initials: 'PK',
        role: 'CEO & Founder',
        company: 'EduBridge India Pvt. Ltd.',
        location: 'Bengaluru, Karnataka',
        text: '"We needed a scalable LMS platform to handle 1.5 lakh students during our NEET coaching season. Rigteq delivered a system that handled peak loads of 8,000 concurrent users without a single crash. The video streaming quality and offline content sync they built is outstanding."',
        rating: 5,
        avatarGradient: 'from-emerald-500 to-teal-700',
        avatarBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
        glowColor: 'rgba(16,185,129,0.3)',
        accentLight: 'bg-emerald-50',
        accentText: 'text-emerald-600',
        accentBorder: 'border-emerald-100',
        CompanyIcon: BookOpen,
        projectTag: 'EdTech LMS Platform',
        tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
        name: 'Rajat Singhania',
        initials: 'RS',
        role: 'Managing Director',
        company: 'Transfix Logistics Solutions',
        location: 'Delhi NCR',
        text: '"Our fleet tracking and freight management was done on Excel sheets — embarrassing but true. Rigteq replaced it with a real-time logistics platform covering 2,000+ trucks across 18 states. Fuel cost savings alone recovered 3x our software investment in the first year."',
        rating: 5,
        avatarGradient: 'from-orange-500 to-red-600',
        avatarBg: 'bg-gradient-to-br from-orange-500 to-red-600',
        glowColor: 'rgba(249,115,22,0.3)',
        accentLight: 'bg-orange-50',
        accentText: 'text-orange-600',
        accentBorder: 'border-orange-100',
        CompanyIcon: Truck,
        projectTag: 'Fleet & Logistics Management',
        tagColor: 'bg-orange-50 text-orange-700 border-orange-100',
    },
    {
        name: 'Neha Agarwal',
        initials: 'NA',
        role: 'VP of Product & Engineering',
        company: 'MedEase Digital Health',
        location: 'Gurugram, Haryana',
        text: '"Rigteq built our telemedicine app and doctor-patient management system with full ABDM compliance. They understood India-specific healthcare regulations that most vendors miss. The app now serves 80,000+ patients monthly across tier-2 cities. Zero downtime in 14 months."',
        rating: 5,
        avatarGradient: 'from-rose-500 to-pink-700',
        avatarBg: 'bg-gradient-to-br from-rose-500 to-pink-700',
        glowColor: 'rgba(244,63,94,0.3)',
        accentLight: 'bg-rose-50',
        accentText: 'text-rose-600',
        accentBorder: 'border-rose-100',
        CompanyIcon: Heart,
        projectTag: 'Telemedicine & Health Tech',
        tagColor: 'bg-rose-50 text-rose-700 border-rose-100',
    },
    {
        name: 'Suresh Rajan',
        initials: 'SR',
        role: 'Founder & Director',
        company: 'CloudNine Analytics',
        location: 'Chennai, Tamil Nadu',
        text: '"We approached 4 vendors before Rigteq. The difference was night and day — they asked the right questions, understood our GST reporting pain points, and delivered a BI dashboard that our CA firm actually loves using. Excellent communication and very honest about timelines."',
        rating: 5,
        avatarGradient: 'from-violet-600 to-purple-800',
        avatarBg: 'bg-gradient-to-br from-violet-600 to-purple-800',
        glowColor: 'rgba(124,58,237,0.3)',
        accentLight: 'bg-violet-50',
        accentText: 'text-violet-600',
        accentBorder: 'border-violet-100',
        CompanyIcon: BarChart2,
        projectTag: 'Business Intelligence Dashboard',
        tagColor: 'bg-violet-50 text-violet-700 border-violet-100',
    },
];

// Monogram logo avatar component
function MonogramAvatar({
    initials,
    gradient,
    size = 'lg',
}: {
    initials: string;
    gradient: string;
    size?: 'sm' | 'lg';
}) {
    const dim = size === 'lg' ? 'w-24 h-24' : 'w-10 h-10';
    const text = size === 'lg' ? 'text-3xl' : 'text-sm';
    return (
        <div className={`${dim} rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}>
            <span className={`${text} font-black text-white tracking-tight select-none`}>{initials}</span>
        </div>
    );
}

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const goTo = (idx: number) => {
        setDirection(idx > current ? 1 : -1);
        setCurrent(idx);
    };
    const next = () => goTo((current + 1) % testimonials.length);
    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.06),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.05),transparent_55%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Client Feedback</p>
                    <h2 className="text-4xl md:text-[46px] font-black text-gray-900 leading-tight tracking-tight">
                        Trusted by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            Indian Businesses
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg font-medium">
                        Real results for real businesses — from Mumbai to Chennai.
                    </p>
                </div>

                {/* Monogram selector strip */}
                <div className="flex items-center justify-center gap-3 mb-12">
                    {testimonials.map((item, i) => (
                        <button
                            key={item.name}
                            onClick={() => goTo(i)}
                            className={`relative transition-all duration-300 rounded-2xl ${
                                i === current
                                    ? 'ring-4 ring-blue-500 ring-offset-2 scale-110 shadow-lg'
                                    : 'opacity-40 hover:opacity-70 hover:scale-105'
                            }`}
                            aria-label={`View testimonial from ${item.name}`}
                        >
                            <MonogramAvatar initials={item.initials} gradient={item.avatarGradient} size="sm" />
                        </button>
                    ))}
                </div>

                {/* Main Card */}
                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction * -40 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

                                {/* Left: Identity Panel */}
                                <div className="bg-gradient-to-br from-[#0c1629] to-[#172554] flex flex-col items-center justify-center p-10 gap-6 relative overflow-hidden">
                                    {/* Glow blob matching accent */}
                                    <div
                                        className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-40 pointer-events-none"
                                        style={{ background: t.glowColor }}
                                    />

                                    {/* Big monogram logo */}
                                    <div className="relative z-10">
                                        <MonogramAvatar initials={t.initials} gradient={t.avatarGradient} size="lg" />
                                        {/* Verified tick */}
                                        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-md border-2 border-[#0c1629]">
                                            <BadgeCheck size={14} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Company icon pill */}
                                    <div className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10`}>
                                        <t.CompanyIcon size={13} className="text-white opacity-80" />
                                        <span className="text-[11px] text-white/80 font-bold tracking-wide">{t.company}</span>
                                    </div>

                                    {/* Name & role */}
                                    <div className="text-center relative z-10">
                                        <h4 className="text-white font-black text-xl leading-tight mb-1">{t.name}</h4>
                                        <p className="text-blue-300 text-sm font-semibold">{t.role}</p>
                                        <div className="flex items-center justify-center gap-1.5 mt-2">
                                            <MapPin size={11} className="text-gray-500" />
                                            <p className="text-gray-400 text-xs">{t.location}</p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 relative z-10">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Verified badge pill */}
                                    <div className="relative z-10 flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-1 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                                        <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Verified Client</span>
                                    </div>
                                </div>

                                {/* Right: Review content */}
                                <div className="bg-white p-10 md:p-12 flex flex-col justify-between">
                                    <div>
                                        {/* Quote SVG */}
                                        <svg className="w-12 h-12 mb-4" style={{ color: t.glowColor }} fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.332C7.332 11.791 8.791 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.668C21.332 11.791 22.791 10 24 10V8z" />
                                        </svg>

                                        <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium italic mb-8">
                                            {t.text}
                                        </p>
                                    </div>

                                    {/* Footer row */}
                                    <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-gray-100">
                                        {/* Project tag */}
                                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border ${t.tagColor}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                                            {t.projectTag}
                                        </span>

                                        {/* Other client monograms */}
                                        <div className="flex -space-x-2">
                                            {testimonials
                                                .filter((_, i) => i !== current)
                                                .slice(0, 4)
                                                .map((other) => (
                                                    <div
                                                        key={other.name}
                                                        className={`w-7 h-7 rounded-lg bg-gradient-to-br ${other.avatarGradient} border-2 border-white flex items-center justify-center shadow-sm`}
                                                        title={other.name}
                                                    >
                                                        <span className="text-[8px] font-black text-white select-none">{other.initials}</span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Prev / Next Arrows */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg group z-10"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 -translate-y-1/2 -right-6 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg group z-10"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                {/* Pagination dots */}
                <div className="flex items-center justify-center gap-2 mt-10">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                idx === current ? 'bg-blue-600 w-10' : 'bg-gray-300 w-2.5 hover:bg-blue-300'
                            }`}
                        />
                    ))}
                </div>

                {/* Trust strip */}
                <div
                    className="mt-16 flex flex-wrap items-center justify-center gap-10 text-center"
                >
                    {[
                        { value: '100%', label: 'Client Satisfaction' },
                        { value: '200+', label: 'Projects Delivered' },
                        { value: '5.0 ★', label: 'Average Rating' },
                        { value: '98%', label: 'On-Time Delivery' },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide mt-0.5">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
