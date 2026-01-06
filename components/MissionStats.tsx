import { ExternalLink } from "lucide-react";

export default function MissionStats() {
    const missions = [
        {
            title: "Your Website, Our Mission",
            desc: "Crafting impactful websites that bring your global vision to life.",
        },
        {
            title: "Revolutionizing Web Design",
            desc: "Redefining digital experiences with cutting-edge design, innovation, and performance.",
        },
        {
            title: "Empowering Startups & Enterprises",
            desc: "Helping businesses worldwide - from India to across the globe - thrive online with scalable, future-ready web solutions.",
        },
    ];

    const stats = [
        {
            value: "11+ Year",
            label: "Track Record",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
            bg: "bg-[#e0fcf9]",
        },
        {
            value: "10000+",
            label: "Happy Customers",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
            bg: "bg-[#fff7e6]",
        },
        {
            value: "90+",
            label: "Expert Team",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop",
            bg: "bg-[#fff2f0]",
        },
        {
            value: "900+",
            label: "Total Reviews",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop",
            bg: "bg-[#f0f5ff]",
        },
    ];

    const logos = [
        "CNBC", "YOURSTORY", "Forbes", "Gulf News", "TV9", "NDTV", "ABC"
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-16">
                    Custom & Affordable Website Designing Services in India and Worldwide
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Mission */}
                    <div className="space-y-10">
                        {missions.map((m, i) => (
                            <div key={i} className="group">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {m.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {m.desc}
                                </p>
                            </div>
                        ))}
                        <a href="#about" className="inline-flex items-center text-blue-700 font-bold text-lg hover:underline gap-2 mt-4">
                            About Us <ExternalLink size={18} />
                        </a>
                    </div>

                    {/* Right Column: Stats & Logos */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stats.map((s, i) => (
                                <div key={i} className={`${s.bg} rounded-2xl p-6 flex justify-between items-center overflow-hidden relative group hover:shadow-lg transition-all`}>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                                        <div className="text-sm text-gray-600 font-medium">{s.label}</div>
                                    </div>
                                    <img
                                        src={s.img}
                                        alt={s.label}
                                        className="w-20 h-20 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Featured In */}
                        <div className="bg-[#f0f7ff] rounded-2xl p-8">
                            <div className="text-sm font-bold text-gray-400 mb-6 flex items-center gap-2">
                                Featured In
                                <div className="h-[1px] flex-1 bg-gray-200" />
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center opacity-60">
                                {/* Placeholder icons/text for logos */}
                                <div className="font-extrabold text-lg text-[#004a99]">CNBC</div>
                                <div className="bg-red-600 text-white px-2 py-0.5 text-[10px] font-bold">YOURSTORY</div>
                                <div className="font-serif font-black text-xl italic">Forbes</div>
                                <div className="font-bold text-sm tracking-tighter">GULF NEWS</div>
                                <div className="text-red-700 font-black italic text-xl">NDTV</div>
                                <div className="text-blue-800 font-extrabold text-sm">ABC</div>
                                <div className="font-black text-xs border border-black p-1">TV9</div>
                                <div className="font-serif font-bold text-sm">THE HINDU</div>
                                <div className="font-bold text-xs uppercase tracking-widest text-red-600">Business Standard</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
