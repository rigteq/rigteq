"use client";

import { ExternalLink } from "lucide-react";

export default function Portfolio() {
    const projects = [
        {
            title: "Radhe Raj Enterprises",
            category: "Business",
            image: "/images/portfolio/radheraj.png",
            url: "https://radherajenterprises.in",
        },
        {
            title: "Free School MS",
            category: "Education / SaaS",
            image: "/images/portfolio/freeschoolms.png",
            url: "https://freeschoolms.vercel.app",
        },
        {
            title: "Mother Touch Play School",
            category: "Education",
            image: "/images/portfolio/mothertouch.png",
            url: "https://motherstouchplayschool.vercel.app",
        },
        {
            title: "Edistone Real Estates",
            category: "Real Estate",
            image: "/images/portfolio/edistone.png",
            url: "https://edistonerealestates.vercel.app",
        },
        {
            title: "SalesRQ",
            category: "SaaS / CRM",
            image: "/images/portfolio/salesrq.png",
            url: "https://salesrq.vercel.app",
        },
        {
            title: "TCGA",
            category: "Corporate",
            image: "/images/portfolio/tcga.png",
            url: "https://tcga.vercel.app",
        },
        {
            title: "Dhan Sampatti",
            category: "Finance",
            image: "/images/portfolio/dhansampatti.png",
            url: "https://dhansampatti.vercel.app",
        },
        {
            title: "Zentova Gifting",
            category: "Corporate Gifting",
            image: "/images/portfolio/zentova.png",
            url: "https://zentova-gifting.vercel.app",
        },
        {
            title: "TaskFlow",
            category: "SaaS / Task Management",
            image: "/images/portfolio/taskflowrq.png",
            url: "https://taskflowrq.vercel.app",
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
                            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer aspect-video"
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
