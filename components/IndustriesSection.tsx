export default function IndustriesSection() {
    const industries = [
        { name: "Healthcare", src: "/images/healthcare.webp" },
        { name: "Real Estate", src: "/images/realstate.webp" },
        { name: "E-commerce", src: "/images/ecommerce.webp" },
        { name: "Finance", src: "/images/finance.webp" },
        { name: "Manufacturing", src: "/images/manufacturing.webp" },
        { name: "Education", src: "/images/education.webp" },
        { name: "Supply Chain", src: "/images/supply_chain.webp" },
        { name: "Restaurant", src: "/images/restraunt.webp" },
    ];

    return (
        <section className="bg-[#f5f5f5] py-16 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0e3d52]">
                            Industries We Serve
                        </h2>
                        <div className="w-16 h-1 bg-red-600"></div>
                        <p className="text-gray-600 leading-relaxed">
                            At Rigteq, we create stunning, custom websites tailored to your industry's unique needs. Our expert team ensures your online presence is impactful and drives success. We combine cutting-edge design with innovation to elevate your brand. Partner with us for a standout digital experience.
                        </p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                            View All
                        </button>
                    </div>

                    {/* Right Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-2xl h-40 md:h-48 cursor-pointer"
                            >
                                <img
                                    src={industry.src}
                                    alt={industry.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <span className="bg-white/90 text-gray-800 font-semibold px-4 py-2 rounded-full text-sm shadow-lg">
                                        {industry.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
