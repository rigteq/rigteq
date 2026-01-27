"use client";

import { ExternalLink } from "lucide-react";

export default function Portfolio() {
    const projects = [
        {
            title: "Radhe Raj Enterprises",
            category: "E-Commerce / Real Estate",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
            url: "https://radheraj.vercel.app",
        },
        {
            title: "TCGA",
            category: "Corporate",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            url: "https://tcga.vercel.app",
        },
        {
            title: "Dhan Sampatti",
            category: "Finance",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
            url: "https://dhansampatti.vercel.app",
        },
        {
            title: "Free School MS",
            category: "Education Portal",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
            url: "https://freeschoolms.vercel.app",
        },
        {
            title: "SalesRQ",
            category: "SaaS / CRM",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
            url: "https://salesrq.vercel.app",
        },
        {
            title: "LMS Rigteq",
            category: "Learning Management",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop",
            url: "https://lms-rigteq.vercel.app",
        },
    ];

    const handleOpenProject = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <section className="py-20 px-4 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0e3d52] mb-4 font-serif">
                        Our <span className="text-blue-600">Portfolio</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A glimpse into the digital experiences we've crafted for clients globally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleOpenProject(project.url)}
                            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer h-72"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </span>
                                <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-colors text-white">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
