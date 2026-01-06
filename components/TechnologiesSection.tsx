import { Download, ArrowRight } from "lucide-react";

export default function TechnologiesSection() {
    const technologies = [
        { name: "PHP", src: "/images/logos/php.webp" },
        { name: "WordPress", src: "/images/logos/wordpress.webp" },
        { name: "HTML", src: "/images/logos/html.webp" },
        { name: "FI", src: "/images/logos/fi.webp" },
        { name: "Photoshop", src: "/images/logos/ps.webp" },
        { name: "CodeIgniter", src: "/images/logos/codelginator.webp" },
        { name: "Laravel", src: "/images/logos/laravel.webp" },
        { name: "MySQL", src: "/images/logos/mysql.webp" },
        { name: "Node.js", src: "/images/logos/nodejs.webp" },
        { name: "Shopify", src: "/images/logos/shopify.webp" },
    ];

    return (
        <section className="bg-white pb-20">
            {/* Technologies Row */}
            <div className="py-12 px-4 md:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0e3d52] mb-10">
                        Technologies We Work With
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
                            >
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className="h-12 md:h-16 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

