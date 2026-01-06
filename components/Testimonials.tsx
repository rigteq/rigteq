import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="bg-[#f9f9f9] py-20 px-4 md:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-[#0e3d52] text-3xl font-bold mb-16">
                    What our clients says
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Stats & Logos */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#0e3d52] leading-tight mb-4">
                                Over 10000+ Satisfied Clients and Growing
                            </h3>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 font-medium">Read More Reviews</span>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-[#0e3d52]">4.5</span>
                                    <div className="flex text-[#ffd234]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" stroke="none" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logo Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <LogoCard name="Google" src="/images/google.webp" />
                            <LogoCard name="Clutch" src="/images/clutch.webp" />
                            <LogoCard name="GoodFirms" src="/images/goodfirms.webp" />
                            <LogoCard name="Trustpilot" src="/images/trustpilot.webp" />
                        </div>
                    </div>

                    {/* Right Column: Testimonial Card */}
                    <div className="relative">
                        {/* Decorative Yellow Shape */}
                        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-80 bg-[#ffd234] rounded-full opacity-60 z-0" />

                        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-2xl z-10 border border-gray-100">
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-gray-100">
                                <Quote size={80} fill="currentColor" className="opacity-20" />
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed italic mb-10 text-justify relative z-10">
                                "Css Founder is one of the best web designing company in market and two things which makes them
                                different from market Budget & Service, Budget is very competitive in comparison to market and Services
                                was very personal level it was 1 month project but requirement increased with time and they worked
                                almost 6 month and honestly they dint ask any extra amount so they work for long term relationship
                                Thanks for Good Looking Site"
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop"
                                        alt="Pradeep Tiwari"
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-[#0e3d52] text-xl">Pradeep Tiwari,</h4>
                                        <p className="text-gray-500 font-medium">Luxor International</p>
                                    </div>
                                </div>
                                <Quote size={40} className="text-[#0e3d52]" />
                            </div>

                            {/* Nav Buttons */}
                            <div className="flex gap-2 mt-8">
                                <button className="bg-[#333] hover:bg-black text-white p-2 rounded transition-colors">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="bg-[#333] hover:bg-black text-white p-2 rounded transition-colors">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LogoCard({ name, src }: { name: string; src: string }) {
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center hover:scale-105 transition-all cursor-pointer h-24">
            <img src={src} alt={name} className="max-h-12 max-w-full object-contain" />
        </div>
    );
}
