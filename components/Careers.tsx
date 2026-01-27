"use client";

import { Briefcase, MapPin, Clock } from "lucide-react";

interface CareersProps {
    setView?: (view: string) => void;
}

export default function Careers({ setView }: CareersProps) {
    const jobs = [
        {
            title: "Senior React Developer",
            location: "Remote / Noida, India",
            type: "Full-time",
            desc: "We are looking for an experienced React developer to lead our frontend team.",
        },
        {
            title: "UI/UX Designer",
            location: "Noida, India",
            type: "Full-time",
            desc: "Design intuitive and beautiful user interfaces for web and mobile applications.",
        },
        {
            title: "BDE / Sales Executive",
            location: "Remote",
            type: "Full-time",
            desc: "Drive growth by identifying new business opportunities and client relationships.",
        },
    ];

    const handleApply = () => {
        if (setView) {
            setView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 px-4 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0e3d52] mb-4 font-serif">
                        Join Our <span className="text-blue-600">Team</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Build the future of digital with us. We are always looking for passionate talent.
                    </p>
                </div>

                <div className="grid gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-100 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {job.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{job.desc}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} /> {job.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Briefcase size={14} /> {job.type}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> Posted 2 days ago
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleApply}
                                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-full transition-colors whitespace-nowrap"
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
