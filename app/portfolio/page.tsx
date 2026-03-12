'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, LayoutGrid, Rocket, Sparkles } from 'lucide-react';

const categories = ['All', 'Web App', 'SaaS Product', 'E-commerce', 'Real Estate', 'Education'] as const;
type Category = typeof categories[number];

const projects = [
    {
        id: 1,
        title: 'DhanSampatti',
        clientName: 'Dhansampatti Finance',
        category: 'Web App',
        description: 'DhanSampatti is an elite wealth management ecosystem developed for Private Wealth Corp to help high-net-worth individuals track global assets in real-time.',
        image: '/images/portfolio/dhansampatti.png',
        techStack: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL'],
        link: 'https://dhansampatti.vercel.app',
    },
    {
        id: 2,
        title: 'Edistone Real Estate',
        clientName: 'Edistone',
        category: 'Real Estate',
        description: 'Edistone Real Estate is a premier commercial and residential development in Ghaziabad, featuring an ideal blend of upscale retail outlets and modern professional workspaces.',
        image: '/images/portfolio/edistone.png',
        techStack: ['React', 'Redux', 'Stripe', 'Express'],
        link: 'https://edistone.vercel.app',
    },
    {
        id: 3,
        title: 'FreeSchool MS',
        clientName: 'Mothertouch Public School',
        category: 'SaaS Product',
        description: 'FreeSchool MS is a next-generation educational ERP system developed for Mothertouch Public School to bridge the gap between administrators, teachers, and parents.',
        image: '/images/portfolio/freeschoolms.png',
        techStack: ['Next.js', 'Supabase', 'TailwindCSS', 'Prisma'],
        link: 'https://freeschoolms.vercel.app/',
    },
    {
        id: 4,
        title: 'Mothertouch',
        clientName: 'Mothertouch Public School',
        category: 'Education',
        description: 'Mothertouch is an immersive educational platform created for Mothertouch Public School, designed to foster foundational learning and interactive childhood development.',
        image: '/images/portfolio/mothertouch.png',
        techStack: ['React', 'Node.js', 'MongoDB', 'AWS'],
        link: 'https://motherstouchplayschool.vercel.app',
    },
    {
        id: 5,
        title: 'RadheRaj',
        clientName: 'RadheRaj Enterprises',
        category: 'SaaS Product',
        description: 'Solar energy solutions is a platform delivered by RadheRaj Enterprises, designed to streamline solar energy solutions and optimize sustainable power management.',
        image: '/images/portfolio/radheraj.png',
        techStack: ['Next.js', 'Google Maps API', 'Firebase'],
        link: 'https://radherajenterprises.in',
    },
    {
        id: 6,
        title: 'SalesRQ Enterprise',
        clientName: 'B2B SalesHub',
        category: 'SaaS Product',
        description: 'Designed for B2B SalesHub, SalesRQ Enterprise provides high-performance sales pipeline management with AI-driven forecasting and CRM orchestration.',
        image: '/images/portfolio/salesrq.png',
        techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
        link: 'https://salesrq.vercel.app/',
    },
    {
        id: 7,
        title: 'TaskFlow RQ',
        clientName: 'AgileFlow Systems',
        category: 'SaaS Product',
        description: 'TaskFlow RQ is a strategic project management tool created for AgileFlow Systems, designed for agile teams demanding speed and absolute clarity.',
        image: '/images/portfolio/taskflowrq.png',
        techStack: ['Next.js', 'NestJS', 'Redis', 'Docker'],
        link: 'https://taskflowrq.vercel.app/',
    },
    {
        id: 8,
        title: 'Academy',
        clientName: 'Chanakya Guru',
        category: 'Education',
        description: 'Academy is an immersive educational platform developed by The Chanakya Guru, designed to foster foundational learning and academic dreams.',
        image: '/images/portfolio/tcga.png',
        techStack: ['Next.js', 'Supabase', 'TailwindCSS', 'Prisma'],
        link: 'https://tcga.vercel.app/',
    },
    {
        id: 9,
        title: 'Zentova',
        clientName: 'Zentova Creative Agency',
        category: 'Web App',
        description: 'Zentova Gifting specializes in providing high-end, personalized corporate gifts and branded merchandise, helping enterprises strengthen their bonds with key clients and employees.',
        image: '/images/portfolio/zentova.png',
        techStack: ['Next.js', 'Framer Motion', 'Three.js'],
        link: 'https://zentova-gifting.vercel.app',
    },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-white">
            {/* Cinematic Hero Banner */}
            <section className="bg-[#0c1829] py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_60%)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.2em] mb-12 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Return to Ecosystem
                    </Link>

                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 text-teal-400 font-bold text-xs uppercase tracking-[0.3em] mb-6"
                        >
                            <Sparkles size={16} />
                            Masterpieces & Deliveries
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8"
                        >
                            The Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Architects&apos; Gallery</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed"
                        >
                            A showcase of engineered excellence. From disruptive SaaS platforms to global e-commerce ecosystems, we build the future one pixel at a time.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Showcase Grid */}
            <section className="py-24 bg-gray-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Sophisticated Filter */}
                    <div className="flex justify-center mb-20">
                        <div className="flex flex-wrap items-center justify-center bg-white p-2 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300
                    ${activeCategory === cat
                                            ? 'bg-[#0c1829] text-white shadow-xl shadow-black/10'
                                            : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-3xl hover:shadow-gray-300/60 transition-all duration-500"
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Preview Block - fully visible, no crop */}
                                    <div className="relative aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />

                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1829] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-8">
                                            <a
                                                href={project.link}
                                                className="w-full py-4 rounded-xl bg-teal-500 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#0c1829] transition-all flex items-center justify-center gap-2"
                                            >
                                                Live View <ExternalLink size={14} />
                                            </a>
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0c1829] text-[9px] font-black uppercase tracking-widest shadow-lg">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Intelligence Block */}
                                    <div className="p-10">
                                        <div className="flex flex-col mb-4 gap-1">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600">Client</span>
                                            <span className="text-gray-900 font-semibold">{project.clientName}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-[10px] font-bold text-gray-600 bg-gray-100 rounded-md px-2.5 py-1"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Final CTA */}
                    <div className="mt-32 text-center max-w-2xl mx-auto p-12 rounded-[3.5rem] bg-[#0c1829] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                        <h4 className="text-3xl font-black mb-6">Inspired by our work?</h4>
                        <p className="text-gray-400 mb-10 font-medium">Let&apos;s build your dream project with the same precision and passion.</p>
                        <Link
                            href="/#contact"
                            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-teal-500/30 transition-all inline-flex items-center gap-3 group"
                        >
                            Initiate Collaboration
                            <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
