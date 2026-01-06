export default function CompaniesSection() {
    const logos = [
        // Row 1
        { name: "Luxor", src: "/images/Luxor_pen_logo.webp" },
        { name: "Samsung", src: "/images/Samsung_Logo.webp" },
        { name: "IIT Delhi", src: "/images/IIT_Delhi_logo.webp" },
        { name: "SAYA", src: "/images/saya.webp" },
        { name: "NICF", src: "/images/nicf.webp" },
        { name: "Gaurs", src: "/images/gaur.webp" },
        // Row 2
        { name: "Exotica", src: "/images/exoticahousing.webp" },
        { name: "Emaar", src: "/images/Emaar_logo.webp" },
        { name: "Rolex", src: "/images/rolex-logo.webp" },
        { name: "Hyundai", src: "/images/hyundai.webp" },
        { name: "Cooke & Kelvey", src: "/images/cookeandkelvey-logo.webp" },
        { name: "RVCJ", src: "/images/rvcj.webp" },
        // Row 3
        { name: "Mohani Tea", src: "/images/mohinitea.webp" },
        { name: "Jakpower", src: "/images/jakpower.webp" },
        { name: "Stylam", src: "/images/stylam.webp" },
        { name: "Antriksh India", src: "/images/antriksh_logo.webp" },
        { name: "Amar Ujala", src: "/images/Amar_Ujala_Logo.webp" },
        { name: "Durr", src: "/images/durr.webp" },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0e3d52] mb-12">
                    Companies We Have Worked For
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 items-stretch">
                    {/* Logo Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-6 border border-gray-200">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-4 md:p-6 border border-gray-200 bg-white hover:bg-gray-50 transition-colors h-24 md:h-28"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-h-12 md:max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <div className="bg-[#0b2d5d] rounded-lg p-8 flex flex-col justify-center text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Reach Your Business Goals in
                        </h3>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            2025 with <span className="text-[#ffd234]">Rigteq</span>
                        </h3>
                        <button className="bg-white text-[#0b2d5d] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors mb-6">
                            Get a free proposal - Transparent Price
                        </button>
                        <p className="text-gray-300 text-sm leading-relaxed italic">
                            "Rigteq has always worked hard to make sure that we're getting what we need out of the partnership, not just what may seem like the best result"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
