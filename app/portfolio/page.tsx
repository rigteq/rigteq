'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, Rocket, Sparkles, ChevronDown, CheckCircle2, Zap, Shield, Search } from 'lucide-react';

const categories = [
    'All',
    'Web App',
    'SaaS Product',
    'E-commerce',
    'Real Estate',
    'Schools',
    'Colleges',
    'Industrial Automation',
    'Hospitality & Hotels',
    'Coaching & Training',
    'Tour & Travel',
    'Corporate Gifting',
    'Hospitals',
    'Gyms & Fitness'
] as const;
type Category = typeof categories[number];

const categoryCTAs: Record<Category, { title: string; sub: string }> = {
    'All': { title: 'Inspired by our work?', sub: "Let's build your dream project with the same precision and passion." },
    'Web App': { title: 'Need a Custom Web App?', sub: "From complex architectures to seamless UX, we build apps that scale." },
    'SaaS Product': { title: 'Launch Your SaaS Next?', sub: "We engineer high-performance SaaS ecosystems ready for massive scale." },
    'E-commerce': { title: 'Grow Your E-commerce Store?', sub: "Elite shopping experiences designed for trust and high conversion." },
    'Real Estate': { title: 'Real Estate Tech Experts?', sub: "Sophisticated property engines and spatial platforms built with precision." },
    'Schools': { title: 'Modernize Your School?', sub: "Bridging the gap between administration and parents with next-gen ERPs." },
    'Colleges': { title: 'Digitalize Your University?', sub: "Future-forward academic platforms designed for modern education." },
    'Industrial Automation': { title: 'Automate Your Industry?', sub: "High-precision industrial dashboards and automated workflow systems." },
    'Hospitality & Hotels': { title: 'Elevate Your Hospitality?', sub: "Immersive luxury experiences for the modern hotel and retreat." },
    'Coaching & Training': { title: 'Scale Your Training Hub?', sub: "Custom learning management systems for elite coaching institutes." },
    'Tour & Travel': { title: 'Plan a Travel Portal?', sub: "Explore the world with high-fidelity discovery and booking engines." },
    'Corporate Gifting': { title: 'Need Corporate Gifting?', sub: "Innovative gifting platforms for modern corporate identity." },
    'Hospitals': { title: 'Optimize Your Healthcare?', sub: "Patient-first digital healthcare solutions built for trust and speed." },
    'Gyms & Fitness': { title: 'Scale Your Fitness Hub?', sub: "High-performance digital platforms for modern gyms and combat clubs." }
};

const projects = [
    { title: 'DhanSampatti', clientName: 'Private Wealth Corp', category: 'Web App', image: '/images/portfolio/dhansampatti.png', techStack: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL'], link: 'https://dhansampatti.vercel.app' },
    { title: 'Edistone Realestate', clientName: 'Edistone Realestate Pvt Ltd', category: 'Real Estate', image: '/images/portfolio/edistone.png', techStack: ['React', 'Redux', 'Stripe', 'Express'], link: 'https://edistone.vercel.app' },
    { title: 'FreeSchool MS', clientName: 'Mothertouch Public School', category: 'SaaS Product', image: '/images/portfolio/freeschoolms.png', techStack: ['Next.js', 'Supabase', 'TailwindCSS', 'Prisma'], link: 'https://freeschoolms.vercel.app/' },
    { title: 'Mothertouch', clientName: 'Mothertouch Public School', category: 'Schools', image: '/images/portfolio/mothertouch.png', techStack: ['React', 'Node.js', 'MongoDB', 'AWS'], link: 'https://motherstouchplayschool.vercel.app' },
    { title: 'RadheRaj Enterprises', clientName: 'RadheRaj Enterprises', category: 'Web App', image: '/images/portfolio/radheraj.png', techStack: ['Next.js', 'Google Maps API', 'Firebase'], link: 'https://radherajenterprises.in' },
    { title: 'SalesRQ Enterprise', clientName: 'B2B SalesHub', category: 'SaaS Product', image: '/images/portfolio/salesrq.png', techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL'], link: 'https://salesrq.vercel.app/' },
    { title: 'TaskFlow RQ', clientName: 'AgileFlow Systems', category: 'SaaS Product', image: '/images/portfolio/taskflowrq.png', techStack: ['Next.js', 'NestJS', 'Redis', 'Docker'], link: 'https://taskflowrq.vercel.app/' },
    { title: 'TCGA Consulting', clientName: 'TCGA Group', category: 'Web App', image: '/images/portfolio/tcga.png', techStack: ['React', 'Express', 'MySQL', 'Tailwind'], link: 'https://tcgaconsulting.vercel.app' },
    { title: 'Zentova Studios', clientName: 'Zentova Creative Agency', category: 'Corporate Gifting', image: '/images/portfolio/zentova.png', techStack: ['Next.js', 'Framer Motion', 'Three.js'], link: 'https://zentova-gifting.vercel.app' },

    // Real Estate
    { title: 'RealX', clientName: 'RealX', category: 'Real Estate', image: '/images/portfolio/realx.png', techStack: ['React', 'Node.js'], link: 'https://www.realx.in/' },
    { title: 'Khaliplot', clientName: 'Khaliplot', category: 'Real Estate', image: '/images/portfolio/khaliplot.png', techStack: ['Next.js', 'Tailwind'], link: 'https://www.khaliplot.com/' },
    { title: 'LuxuryAbode', clientName: 'LuxuryAbode', category: 'Real Estate', image: '/images/portfolio/luxaryabode.png', techStack: ['React', 'Express'], link: 'https://www.luxuryabode.com/' },
    { title: '360Realtors', clientName: '360Realtors', category: 'Real Estate', image: '/images/portfolio/360realtors.png', techStack: ['React', 'MongoDB'], link: 'https://www.360realtors.com/' },

    // Training Institute
    { title: 'Naresh IT', clientName: 'Naresh IT', category: 'Coaching & Training', image: '/images/portfolio/nareshit.png', techStack: ['Next.js', 'Node.js'], link: 'https://nareshit.com/' },
    { title: 'Niche Academy', clientName: 'Niche Academy', category: 'Coaching & Training', image: '/images/portfolio/nicheacademy.png', techStack: ['React', 'Express'], link: 'https://www.nicheacademy.com/' },
    { title: 'Geekster', clientName: 'Geekster', category: 'Coaching & Training', image: '/images/portfolio/geekster.png', techStack: ['React', 'MongoDB'], link: 'https://www.geekster.in/' },

    // Industrial Automation
    { title: 'Falcon Autotech', clientName: 'Falcon Autotech', category: 'Industrial Automation', image: '/images/portfolio/falconautotech.png', techStack: ['Vue.js', 'Node.js'], link: 'https://www.falconautotech.com/' },
    { title: 'Pennar India', clientName: 'Pennar India', category: 'Industrial Automation', image: '/images/portfolio/pennarindia.png', techStack: ['React', 'NestJS'], link: 'https://www.pennarindia.com/' },
    { title: 'Messung', clientName: 'Messung', category: 'Industrial Automation', image: '/images/portfolio/messung.png', techStack: ['Next.js', 'Laravel'], link: 'https://www.messung.com/' },

    // Schools
    { title: 'Mount Litera', clientName: 'Mount Litera', category: 'Schools', image: '/images/portfolio/mountlitera.png', techStack: ['React', 'Firebase'], link: 'https://www.mountlitera.com/' },
    { title: 'Podar Education', clientName: 'Podar Education', category: 'Schools', image: '/images/portfolio/podareducation.png', techStack: ['Next.js', 'PostgreSQL'], link: 'https://www.podareducation.org/' },
    { title: 'Bluebells', clientName: 'Bluebells', category: 'Schools', image: '/images/portfolio/bluebells.png', techStack: ['React', 'Node.js'], link: 'https://www.bluebells.org/' },
    { title: 'Sarvottam', clientName: 'Sarvottam', category: 'Schools', image: '/images/portfolio/sarvottam.png', techStack: ['Vue.js', 'Express'], link: 'https://www.sarvottamnoida.com/' },
    { title: 'Mayoor School', clientName: 'Mayoor School', category: 'Schools', image: '/images/portfolio/mayoorindia.png', techStack: ['React', 'MongoDB'], link: 'https://www.mayoornoida.net/' },
    { title: 'Udaya Public School', clientName: 'Udaya Public School', category: 'Schools', image: '/images/portfolio/udhayapublicschool.png', techStack: ['React', 'PostgreSQL'], link: 'https://www.udayapublicschool.edu.in/' },

    // Colleges
    { title: 'Loyola College', clientName: 'Loyola College', category: 'Colleges', image: '/images/portfolio/loyalacollege.png', techStack: ['Next.js', 'MySQL'], link: 'https://www.loyolacollege.edu/' },
    { title: 'LSR', clientName: 'LSR', category: 'Colleges', image: '/images/portfolio/lsd-edu.png', techStack: ['React', 'PostgreSQL'], link: 'https://lsr.edu.in/' },
    { title: 'Alliance University', clientName: 'Alliance University', category: 'Colleges', image: '/images/portfolio/alliance-edu.png', techStack: ['Angular', 'Node.js'], link: 'https://www.alliance.edu.in/' },
    { title: 'REVA University', clientName: 'REVA University', category: 'Colleges', image: '/images/portfolio/reva-edu.png', techStack: ['React', 'AWS'], link: 'https://www.reva.edu.in/' },
    { title: 'Kristu Jayanti', clientName: 'Kristu Jayanti', category: 'Colleges', image: '/images/portfolio/kristujanti-edu.png', techStack: ['Vue.js', 'Firebase'], link: 'https://www.kristujayanti.edu.in/' },
    { title: 'MCC', clientName: 'MCC', category: 'Colleges', image: '/images/portfolio/mcc-edu.png', techStack: ['React', 'PostgreSQL'], link: 'https://mcc.edu.in/' },

    // Hotel
    { title: '28 Kothi', clientName: '28 Kothi', category: 'Hospitality & Hotels', image: '/images/portfolio/28-kothi.png', techStack: ['Next.js', 'Tailwind'], link: 'https://www.28kothi.com/' },
    { title: 'Ahilya By The Sea', clientName: 'Ahilya By The Sea', category: 'Hospitality & Hotels', image: '/images/portfolio/ahilabythesea.png', techStack: ['React', 'Node.js'], link: 'https://ahilyabythesea.com/' },
    { title: 'Daspan House', clientName: 'Daspan House', category: 'Hospitality & Hotels', image: '/images/portfolio/daspan-house.png', techStack: ['Vue.js', 'Express'], link: 'https://www.daspanhouse.com/' },
    { title: 'Kaner Retreat', clientName: 'Kaner Retreat', category: 'Hospitality & Hotels', image: '/images/portfolio/kaner.png', techStack: ['React', 'MongoDB'], link: 'https://kanerretreat.com/' },

    // Coaching
    { title: 'Chahal Academy', clientName: 'Chahal Academy', category: 'Coaching & Training', image: '/images/portfolio/chahal-academy.png', techStack: ['Next.js', 'PostgreSQL'], link: 'https://chahalacademy.com/' },
    { title: 'CLAT Possible', clientName: 'CLAT Possible', category: 'Coaching & Training', image: '/images/portfolio/clat-possible.png', techStack: ['React', 'Node.js'], link: 'https://clatpossible.com/' },
    { title: "Rau's IAS", clientName: "Rau's IAS", category: 'Coaching & Training', image: '/images/portfolio/rauias.png', techStack: ['React', 'AWS'], link: 'https://www.rauias.com/' },
    { title: 'IMS India', clientName: 'IMS India', category: 'Coaching & Training', image: '/images/portfolio/ims-india.png', techStack: ['Vue.js', 'Laravel'], link: 'https://www.imsindia.com/' },
    { title: 'Erickson', clientName: 'Erickson', category: 'Coaching & Training', image: '/images/portfolio/erickson.png', techStack: ['React', 'Node.js'], link: 'https://www.erickson.edu/en/home' },
    { title: 'BetterUp', clientName: 'BetterUp', category: 'Coaching & Training', image: '/images/portfolio/better-up.png', techStack: ['Next.js', 'GraphQL'], link: 'https://www.betterup.com/' },
    { title: 'Career Guide', clientName: 'Career Guide', category: 'Coaching & Training', image: '/images/portfolio/career-guide.png', techStack: ['React', 'Express'], link: 'https://www.careerguide.com/' },

    // Tour and Travel
    { title: 'Indiator', clientName: 'Indiator', category: 'Tour & Travel', image: '/images/portfolio/indiator.png', techStack: ['React', 'MongoDB'], link: 'https://www.indiator.com/' },
    { title: 'Culture Holidays', clientName: 'Culture Holidays', category: 'Tour & Travel', image: '/images/portfolio/culture-holidays.png', techStack: ['Next.js', 'Node.js'], link: 'https://www.cultureholidays.com/' },
    { title: 'The Hidden India', clientName: 'The Hidden India', category: 'Tour & Travel', image: '/images/portfolio/hidden-india.png', techStack: ['Vue.js', 'Express'], link: 'https://thehiddenindia.com/' },
    { title: 'Himalayan High', clientName: 'Himalayan High', category: 'Tour & Travel', image: '/images/portfolio/himalayan-high.png', techStack: ['React', 'Laravel'], link: 'https://www.himalayanhigh.in/' },
    { title: 'Indian Frontiers', clientName: 'Indian Frontiers', category: 'Tour & Travel', image: '/images/portfolio/indian-frontiers.png', techStack: ['React', 'PostgreSQL'], link: 'https://indianfrontiers.com/' },

    // E-commerce
    { title: 'March Tee', clientName: 'March Tee', category: 'E-commerce', image: '/images/portfolio/marchtee.png', techStack: ['Shopify', 'React'], link: 'https://www.marchtee.com/' },
    { title: 'Powerlook', clientName: 'Powerlook', category: 'E-commerce', image: '/images/portfolio/powerlook.png', techStack: ['Next.js', 'Node.js'], link: 'https://powerlook.in/' },
    { title: 'House of Indya', clientName: 'House of Indya', category: 'E-commerce', image: '/images/portfolio/houseofindya.png', techStack: ['React', 'Magento'], link: 'https://www.houseofindya.com/' },
    { title: 'Juniper Fashion', clientName: 'Juniper Fashion', category: 'E-commerce', image: '/images/portfolio/juniper-fashion.png', techStack: ['Shopify', 'Tailwind'], link: 'https://juniperfashion.com/' },
    { title: 'Jaypore', clientName: 'Jaypore', category: 'E-commerce', image: '/images/portfolio/jaypore.png', techStack: ['Next.js', 'Node.js'], link: 'https://www.jaypore.com/' },

    // Hospitals
    { title: 'Gupta Hospital', clientName: 'Gupta Hospital', category: 'Hospitals', image: '/images/portfolio/gupta-hospital.png', techStack: ['Next.js', 'Tailwind', 'Shadcn UI'], link: 'https://kc-gupta-hospital.vercel.app/' },
    { title: "Dr. Agarwal's", clientName: "Dr. Agarwal's Eye Hospital", category: 'Hospitals', image: '/images/portfolio/dr-agarwals.png', techStack: ['Next.js', 'Tailwind', 'Node.js'], link: 'https://www.dragarwal.com/' },
    { title: 'Paras Health', clientName: 'Paras Hospitals', category: 'Hospitals', image: '/images/portfolio/paras-hospitals.png', techStack: ['React', 'Express', 'MongoDB'], link: 'https://www.parashospitals.com/' },

    // Gyms & Fitness
    { title: 'Knockout Fight Club', clientName: 'Knockout Fight Club', category: 'Gyms & Fitness', image: '/images/portfolio/knockoutfightclub.png', techStack: ['Next.js', 'Tailwind', 'Firebase'], link: 'https://knockoutfightclub.com/' },
    { title: 'Crunch Fitness', clientName: 'Crunch India', category: 'Gyms & Fitness', image: '/images/portfolio/crunchindia.png', techStack: ['React', 'Node.js', 'PostgreSQL'], link: 'https://www.crunchindia.com/' }
].map((p, index) => ({
    id: index + 1,
    title: p.title,
    clientName: p.clientName,
    category: p.category,
    description: `Stunning ${p.category.toLowerCase()} platform engineered for massive scale and flawless user experience.`,
    image: p.image,
    techStack: p.techStack,
    link: p.link,
    metrics: [
        { icon: <Zap size={14} />, label: '99+ Performance' },
        { icon: <CheckCircle2 size={14} />, label: 'SEO Ready' },
        { icon: <Shield size={14} />, label: 'Secure Architecture' },
    ]
}));

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filtered = projects.filter((p) => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const currentCTA = categoryCTAs[activeCategory] || categoryCTAs['All'];

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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-3 text-teal-400 font-bold text-xs uppercase tracking-[0.3em] mb-6"
                        >
                            <Sparkles size={16} />
                            Masterpieces & Deliveries
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8"
                        >
                            The Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Architects&apos; Gallery</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
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

                    {/* Sophisticated Filter with Dropdown */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="text-2xl font-black text-gray-900 border-l-4 border-teal-500 pl-4 py-1">
                            Our Portfolio Showcase
                        </div>

                        {/* Dropdown & Search for Sales Team */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                            {/* Search Bar */}
                            <div className="relative w-full sm:w-64 group">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white border border-gray-200 text-gray-700 py-4 pl-12 pr-6 rounded-2xl shadow-xl shadow-gray-200/50 focus:outline-none focus:ring-2 focus:ring-teal-500 font-bold tracking-wide transition-all hover:border-teal-300"
                                />
                                <div className="absolute left-4 inset-y-0 flex items-center text-gray-400 group-focus-within:text-teal-500 transition-colors">
                                    <Search size={18} />
                                </div>
                            </div>

                            {/* Category Dropdown */}
                            <div className="relative w-full sm:w-64 group">
                                <select
                                    value={activeCategory}
                                    onChange={(e) => setActiveCategory(e.target.value as Category)}
                                    className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-4 px-6 rounded-2xl shadow-xl shadow-gray-200/50 focus:outline-none focus:ring-2 focus:ring-teal-500 font-bold tracking-wide cursor-pointer transition-all hover:border-teal-300"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat === 'All' ? 'Filter: All Categories' : cat}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-teal-600 group-hover:text-teal-400 transition-colors">
                                    <ChevronDown size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="min-h-[400px]">
                        {filtered.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 bg-white rounded-[3.5rem] border border-gray-100 shadow-sm"
                            >
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search size={32} className="text-gray-300" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-2">No projects found</h3>
                                <p className="text-gray-500 font-medium">Try adjusting your search or category filter.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                    className="mt-8 text-teal-600 font-black text-xs uppercase tracking-widest hover:text-teal-700 transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                <AnimatePresence mode="wait">
                                    {filtered.map((project) => (
                                        <motion.div
                                            key={project.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-3xl hover:shadow-gray-300/60 transition-all duration-500"
                                            onMouseEnter={() => setHoveredId(project.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                        >
                                            <div className="relative aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1829] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-8">
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full py-4 rounded-xl bg-teal-500 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#0c1829] transition-all flex items-center justify-center gap-2"
                                                    >
                                                        Live View <ExternalLink size={14} />
                                                    </a>
                                                </div>
                                                <div className="absolute top-6 left-6">
                                                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0c1829] text-[9px] font-black uppercase tracking-widest shadow-lg">
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-10">
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600">Client</span>
                                                        <span className="text-gray-900 font-semibold">{project.clientName}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {project.metrics.map((metric, i) => (
                                                            <div key={i} className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400 capitalize bg-gray-50 px-2 py-1 rounded-md">
                                                                <span className="text-teal-500">{metric.icon}</span>
                                                                {metric.label}
                                                            </div>
                                                        ))}
                                                    </div>
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
                            </div>
                        )}
                    </div>

                    {/* Final CTA - Dynamic */}
                    <div
                        className="mt-32 text-center max-w-2xl mx-auto p-12 rounded-[3.5rem] bg-[#0c1829] text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h4 className="text-3xl font-black mb-6">{currentCTA.title}</h4>
                                <p className="text-gray-400 mb-10 font-medium">{currentCTA.sub}</p>
                            </motion.div>
                        </AnimatePresence>
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
