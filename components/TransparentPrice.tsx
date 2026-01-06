import { ArrowRight } from "lucide-react";

export default function TransparentPrice() {
    return (
        <section className="bg-white py-10 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#0b2d5d] border-l-[6px] border-[#ed1c24] rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-tight">
                        Explore Our Transparent Price
                    </h2>
                    <button className="bg-[#ffd234] hover:bg-[#ffdb5c] text-[#040404] font-bold py-3 px-8 rounded-full flex items-center gap-3 transition-all transform hover:scale-105">
                        View Packages
                        <div className="bg-white rounded-full p-1">
                            <ArrowRight size={18} className="text-[#0b2d5d]" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
