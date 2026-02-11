import { servicesData } from "../data";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import { Check } from "lucide-react";

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = servicesData[slug];

    if (!data) {
        notFound();
    }



    return (
        <main className="min-h-screen bg-white">
            <div className="sticky top-0 z-[100]">
                <TopNav />
                <Navbar currentView="services" />
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0" />
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 z-0" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        {data.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </section>

            {/* Overview & Features */}
            <section className="py-20 px-4 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Why Choose Our <span className="text-blue-600">{data.title}</span>?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                At Rigteq, we don't just build; we craft digital masterpieces. Our approach to {data.title} combines
                                cutting-edge technology with aesthetic brilliance to deliver results that exceed expectations.
                                We focus on creating value for your business through innovative solutions.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {data.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="font-semibold text-gray-800">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-xl" />
                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[400px] flex items-center justify-center bg-gray-50 group">
                                <img
                                    src={getImageForService(slug)}
                                    alt={`${data.title} Illustration`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">Premium Quality</div>
                                    <div className="text-2xl font-bold">{data.title}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process / Premium Banner */}
            <section className="py-16 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-12">Our Premium Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your vision and goals." },
                            { step: "02", title: "Strategy", desc: "Planning the perfect roadmap." },
                            { step: "03", title: "Execution", desc: "Crafting with precision." },
                            { step: "04", title: "Launch", desc: "Delivering excellence." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 pt-10 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xl font-bold w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                    {item.step}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-4 md:px-12 bg-white relative overflow-hidden" id="contact">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Let's create something extraordinary together.
                        </p>
                    </div>

                    <ContactForm />
                </div>
            </section>

            <Footer />
        </main>
    );
}

function getImageForService(slug: string): string {
    const images: Record<string, string> = {
        "website-designing": "/images/web_designing.webp",
        "custom-website-development": "/images/custom.webp",
        "e-commerce-website-development": "/images/e-commerce.webp",
        "crm-development": "/images/crm.webp",
        "cms-development": "/images/website-development.webp", // Fallback reasonable match
        "static-website-design": "/images/web_designing.webp",
        "dynamic-website-design": "/images/custom.webp",
        "website-development": "/images/website-development.webp"
    };

    if (images[slug]) return images[slug];

    // Fallback images cycling based on slug length to start
    const fallbacks = [
        "/images/menu_1.webp",
        "/images/menu_2.webp",
        "/images/menu_3.webp",
        "/images/menu_4.webp",
        "/images/website-development.webp"
    ];

    return fallbacks[slug.length % fallbacks.length];
}
