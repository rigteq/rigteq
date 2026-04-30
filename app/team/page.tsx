'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Mail, Award, Briefcase, Code2, TrendingUp, Terminal, Users } from 'lucide-react';

const team = [
    {
        name: 'Mr. Divyang Gaur',
        role: 'Director',
        experience: '10+ Years of Expertise',
        bio: 'Visionary leader driving innovation and digital transformation across enterprise-level projects. Brings over a decade of experience in software strategy, business development, and building world-class technology teams.',
        icon: Award,
        accentColor: 'from-blue-600 to-blue-400',
        bgAccent: 'bg-blue-50',
        borderAccent: 'border-blue-200',
        iconColor: 'text-blue-600',
        badgeColor: 'bg-blue-600',
        skills: ['Strategic Leadership', 'Business Development', 'Digital Transformation', 'Team Building'],
        linkedin: '#',
        email: 'divyang@rigteq.com',
    },
    {
        name: 'Mr. Manoj Sharma',
        role: 'Senior Sales Manager',
        experience: 'Sales Excellence Expert',
        bio: 'Dynamic sales professional with a proven track record of scaling revenue streams and building long-term client relationships. Specialises in enterprise sales cycles, SaaS solutions, and strategic partnerships across global markets.',
        icon: TrendingUp,
        accentColor: 'from-emerald-600 to-emerald-400',
        bgAccent: 'bg-emerald-50',
        borderAccent: 'border-emerald-200',
        iconColor: 'text-emerald-600',
        badgeColor: 'bg-emerald-600',
        skills: ['Enterprise Sales', 'Client Relations', 'SaaS Solutions', 'Revenue Growth'],
        linkedin: '#',
        email: 'manoj@rigteq.com',
    },
    {
        name: 'Mr. Yatendra Sharma',
        role: 'Technical Architect',
        experience: 'System Design Expert',
        bio: 'Seasoned technical architect specialising in designing robust, scalable, and high-performance software systems. Expert in cloud-native infrastructure, microservices, and full-stack engineering leadership.',
        icon: Code2,
        accentColor: 'from-violet-600 to-violet-400',
        bgAccent: 'bg-violet-50',
        borderAccent: 'border-violet-200',
        iconColor: 'text-violet-600',
        badgeColor: 'bg-violet-600',
        skills: ['System Architecture', 'Cloud Infrastructure', 'Microservices', 'Full-Stack Engineering'],
        linkedin: '#',
        email: 'yatendra@rigteq.com',
    },
    {
        name: 'Satyam Raikwar',
        role: 'Program Manager',
        experience: 'Project Delivery Expert',
        bio: 'Experienced program manager focused on delivering complex projects on time and within budget. Specializes in agile methodologies, stakeholder management, and cross-functional team coordination.',
        icon: Briefcase,
        accentColor: 'from-orange-600 to-orange-400',
        bgAccent: 'bg-orange-50',
        borderAccent: 'border-orange-200',
        iconColor: 'text-orange-600',
        badgeColor: 'bg-orange-600',
        skills: ['Program Management', 'Agile Methodologies', 'Stakeholder Management', 'Team Coordination'],
        linkedin: '#',
        email: 'satyam@rigteq.com',
    },
    {
        name: 'Manu Gaur',
        role: 'Senior Software Engineer',
        experience: '5+ Years of Engineering',
        bio: 'A versatile and detail-driven software engineer with deep expertise in full-stack development, building scalable APIs, and delivering high-performance web applications. Passionate about clean code, modern frameworks, and continuous delivery pipelines.',
        icon: Terminal,
        accentColor: 'from-cyan-600 to-cyan-400',
        bgAccent: 'bg-cyan-50',
        borderAccent: 'border-cyan-200',
        iconColor: 'text-cyan-600',
        badgeColor: 'bg-cyan-600',
        skills: ['Full-Stack Development', 'REST & GraphQL APIs', 'React & Next.js', 'CI/CD Pipelines'],
        linkedin: '#',
        email: 'manu@rigteq.com',
    },
    {
        name: 'Ashwani',
        role: 'HR & Operations',
        experience: 'People & Culture Leader',
        bio: 'Dedicated people-first professional responsible for talent acquisition, employee engagement, and building a thriving workplace culture at Rigteq. Ensures operational excellence across the organization while fostering an environment of growth and inclusivity.',
        icon: Users,
        accentColor: 'from-rose-600 to-rose-400',
        bgAccent: 'bg-rose-50',
        borderAccent: 'border-rose-200',
        iconColor: 'text-rose-600',
        badgeColor: 'bg-rose-600',
        skills: ['Talent Acquisition', 'Employee Engagement', 'HR Operations', 'Culture Building'],
        linkedin: '#',
        email: 'ashwani@rigteq.com',
    },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-gray-50">

            {/* Hero Banner */}
            <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-xs uppercase tracking-widest mb-10 group transition-colors"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Our People</p>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Expert Team</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            The brilliant minds behind Rigteq Softwares — a team of passionate professionals dedicated to engineering solutions that drive real business impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Cards */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-6 mb-20 max-w-2xl mx-auto">
                        {[
                            { label: 'Team Members', value: '6+' },
                            { label: 'Years Combined Experience', value: '25+' },
                            { label: 'Projects Delivered', value: '200+' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Member Cards */}
                    <div className="space-y-10">
                        {team.map((member, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
                                >
                                    <div className={`grid grid-cols-1 lg:grid-cols-5 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                        {/* Left accent panel */}
                                        <div className={`lg:col-span-2 ${member.bgAccent} flex flex-col items-center justify-center p-12 gap-6 relative overflow-hidden ${!isEven ? 'lg:order-last' : ''}`}>
                                            {/* Background decoration */}
                                            <div className={`absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br ${member.accentColor} opacity-10 rounded-full blur-2xl`} />
                                            <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br ${member.accentColor} opacity-10 rounded-full blur-xl`} />

                                            {/* Avatar circle */}
                                            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center shadow-xl`}>
                                                <member.icon size={52} className="text-white" />
                                            </div>

                                            <div className="text-center relative z-10">
                                                <p className={`inline-block px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-3 ${member.badgeColor}`}>
                                                    {member.role}
                                                </p>
                                                <h2 className="text-2xl font-black text-gray-900 mb-1">{member.name}</h2>
                                                <p className={`text-sm font-semibold ${member.iconColor}`}>{member.experience}</p>
                                            </div>

                                            {/* Contact buttons */}
                                            <div className="flex items-center gap-4 relative z-10">
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${member.borderAccent} ${member.bgAccent} ${member.iconColor} hover:opacity-80 transition-all`}
                                                    title="Send Email"
                                                >
                                                    <Mail size={18} />
                                                </a>
                                                <a
                                                    href={member.linkedin}
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${member.borderAccent} ${member.bgAccent} ${member.iconColor} hover:opacity-80 transition-all`}
                                                    title="LinkedIn Profile"
                                                >
                                                    <Linkedin size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Right content panel */}
                                        <div className={`lg:col-span-3 p-10 md:p-14 flex flex-col justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                                            <div className="flex items-center gap-3 mb-6">
                                                <Briefcase size={16} className="text-gray-400" />
                                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">About</span>
                                            </div>

                                            <p className="text-gray-600 text-lg leading-relaxed font-medium mb-10">
                                                {member.bio}
                                            </p>

                                            {/* Skills */}
                                            <div>
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Core Expertise</p>
                                                <div className="flex flex-wrap gap-3">
                                                    {member.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className={`px-4 py-2 rounded-full text-sm font-semibold border ${member.borderAccent} ${member.bgAccent} ${member.iconColor}`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-14 text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                        <div className="relative z-10">
                            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">Work With Us</p>
                            <h3 className="text-4xl font-black mb-4 leading-tight">Want to build something great?</h3>
                            <p className="text-blue-100 text-lg font-medium mb-10 max-w-lg mx-auto">
                                Our leadership team is just a message away. Let's discuss how we can help transform your business.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-blue-600 font-black text-sm tracking-wide hover:bg-blue-50 transition-all shadow-xl"
                            >
                                Start a Conversation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
