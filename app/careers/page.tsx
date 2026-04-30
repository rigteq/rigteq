'use client';

import { useState } from 'react';
import { ArrowRight, Code, Terminal, Brain, Sparkles, MapPin } from 'lucide-react';
import JobApplicationForm from '@/components/JobApplicationForm';

const jobs = [
    {
        id: 'senior-frontend-architect',
        title: 'Senior Frontend Architect',
        department: 'Engineering',
        type: 'Full-Time',
        location: 'Noida / Remote',
        experience: '5+ Years',
        icon: Code,
    },
    {
        id: 'ai-prompt-engineer',
        title: 'AI Native & Prompt Engineer',
        department: 'AI Lab',
        type: 'Full-Time',
        location: 'Remote',
        experience: '2+ Years',
        icon: Brain,
    },
    {
        id: 'backend-devops-lead',
        title: 'Backend & DevOps Lead',
        department: 'Infrastructure',
        type: 'Full-Time',
        location: 'Houston / Noida',
        experience: '7+ Years',
        icon: Terminal,
    },
];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyNow = (job: typeof jobs[0]) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen">
        {/* ─── 50 / 50 Hero ───────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] items-center gap-0">

                    {/* ── Left: Text ── */}
                    <div className="py-16 lg:py-24 lg:pr-16 xl:pr-24 text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-6">
                            <Sparkles size={12} /> We&apos;re Hiring
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                            Build the Future.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                                Grow Without Limits.
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                            Join an elite team of engineers and designers solving real-world problems for clients across India, USA &amp; beyond.
                        </p>

                        {/* Perks list */}
                        <ul className="space-y-3 mb-10 inline-block text-left">
                            {[
                                { icon: '🌍', text: 'Remote-friendly & hybrid options' },
                                { icon: '📈', text: 'Fast growth — promotions based on merit' },
                                { icon: '💡', text: 'Work on AI, SaaS & fintech products' },
                                { icon: '📚', text: 'Learning budget & upskilling support' },
                                { icon: '🤝', text: 'Mentorship from senior engineers' },
                            ].map(p => (
                                <li key={p.text} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                    <span className="text-base shrink-0">{p.icon}</span>
                                    {p.text}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <a
                                href="#open-roles"
                                className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
                            >
                                View Open Roles <ArrowRight size={16} />
                            </a>
                            <a
                                href="mailto:careers@rigteq.com"
                                className="px-7 py-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                            >
                                Drop Your CV
                            </a>
                        </div>
                    </div>

                    {/* ── Right: Visual ── */}
                    <div className="hidden lg:flex items-center justify-center relative bg-[#0b1628] min-h-[88vh] overflow-hidden">
                        {/* Ambient glows */}
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/25 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-600/20 rounded-full blur-[60px] pointer-events-none" />

                        {/* Grid pattern */}
                        <div className="absolute inset-0 opacity-[0.04]"
                            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                        />

                        <div className="relative z-10 w-full max-w-md px-8 space-y-4">

                            {/* Code editor card */}
                            <div className="bg-[#0f2140] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Editor top bar */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                    </div>
                                    <span className="ml-2 text-[10px] font-mono text-white/40 uppercase tracking-widest">careers @ rigteq</span>
                                </div>
                                {/* Code lines */}
                                <div className="p-5 font-mono text-xs space-y-1.5">
                                    <p><span className="text-purple-400">const</span> <span className="text-blue-300">you</span> <span className="text-white/50">=</span> <span className="text-yellow-300">&#123;</span></p>
                                    <p className="pl-4"><span className="text-green-300">role</span><span className="text-white/50">:</span> <span className="text-orange-300">&apos;Senior Engineer&apos;</span><span className="text-white/50">,</span></p>
                                    <p className="pl-4"><span className="text-green-300">passion</span><span className="text-white/50">:</span> <span className="text-orange-300">&apos;World-class software&apos;</span><span className="text-white/50">,</span></p>
                                    <p className="pl-4"><span className="text-green-300">location</span><span className="text-white/50">:</span> <span className="text-orange-300">&apos;Anywhere&apos;</span><span className="text-white/50">,</span></p>
                                    <p className="pl-4"><span className="text-green-300">growth</span><span className="text-white/50">:</span> <span className="text-blue-400">Infinity</span><span className="text-white/50">,</span></p>
                                    <p><span className="text-yellow-300">&#125;</span><span className="text-white/50">;</span></p>
                                    <p className="pt-2"><span className="text-purple-400">rigteq</span><span className="text-white/50">.</span><span className="text-blue-300">hire</span><span className="text-white/50">(</span><span className="text-blue-300">you</span><span className="text-white/50">);</span></p>
                                    <p className="pt-1 text-green-400/70">{'// 🚀 Welcome aboard!'}</p>
                                </div>
                            </div>

                            {/* Floating badges row */}
                            <div className="flex gap-3 flex-wrap">
                                {[
                                    { label: 'Remote OK', emoji: '🌍', color: 'border-blue-500/30 bg-blue-500/10 text-blue-300' },
                                    { label: 'Fast Growth', emoji: '📈', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
                                    { label: 'Top Pay', emoji: '💰', color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300' },
                                ].map(b => (
                                    <div key={b.label} className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${b.color} text-xs font-bold`}>
                                        <span>{b.emoji}</span> {b.label}
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack strip */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Our Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Docker'].map(t => (
                                        <span key={t} className="px-2.5 py-1 rounded-lg bg-white/10 text-white/70 text-[11px] font-semibold border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Team count badge */}
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                                <div className="flex -space-x-2">
                                    {['DG','MS','YS','SR','MG'].map((init, i) => (
                                        <div key={init} className={`w-8 h-8 rounded-full border-2 border-[#0b1628] flex items-center justify-center text-[10px] font-black text-white ${['bg-blue-500','bg-violet-500','bg-emerald-500','bg-orange-500','bg-cyan-500'][i]}`}>
                                            {init}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold">10+ Engineers</p>
                                    <p className="text-white/40 text-[10px]">across India &amp; USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* ─── Jobs Section ──────────────────────────────────────────────── */}
        <section id="open-roles" className="bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Job Listings */}
                <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    Open Engineering Roles <span className="w-8 h-1 bg-blue-600 rounded-full" />
                </h3>
                
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 md:flex items-center justify-between group">
                            
                            <div className="flex items-start gap-6 mb-8 md:mb-0">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <job.icon size={28} />
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest border border-gray-200">
                                            {job.department}
                                        </span>
                                        <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                                            {job.type}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {job.title}
                                    </h2>
                                    <div className="flex items-center gap-4 mt-4 opacity-70">
                                        <div className="flex items-center gap-1.5 text-sm font-bold text-gray-600">
                                            <MapPin size={16} className="text-gray-400" />
                                            {job.location}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => handleApplyNow(job)}
                                className="w-full md:w-auto px-8 py-4 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group-hover:shadow-blue-500/20"
                            >
                                Apply Now <ArrowRight size={16} />
                            </button>

                        </div>
                    ))}
                </div>

                {/* Culture Notice */}
                <div className="mt-20 bg-[#0c1829] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                     <h3 className="text-3xl font-black mb-6">Don't see a fit?</h3>
                     <p className="text-gray-400 font-medium max-w-lg mx-auto mb-10">We are always looking for exceptional talent. If you believe your skills can accelerate our mission, drop us an email.</p>
                     <a href="mailto:careers@rigteq.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20">
                         Email Resume (careers@rigteq.com)
                     </a>
                </div>
            </div>
        </section>

        {/* Job Application Modal */}
        {selectedJob && (
            <JobApplicationForm
                job={selectedJob}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        )}
        </main>
    );
}
