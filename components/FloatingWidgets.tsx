import { Phone, MessageCircle, MessageSquare } from "lucide-react";

export default function FloatingWidgets() {
    return (
        <>
            {/* Left side: Phone and WhatsApp */}
            <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
                <a
                    href="tel:+1234567890"
                    className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg group relative"
                >
                    <Phone size={24} />
                    <span className="absolute left-14 bg-white text-black px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                        Call Us
                    </span>
                </a>
                <a
                    href="https://wa.me/1234567890"
                    className="bg-[#25D366] text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg group relative"
                >
                    <MessageCircle size={24} />
                    <span className="absolute left-14 bg-white text-black px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                        WhatsApp
                    </span>
                </a>
            </div>

            {/* Right side: Chat Widget */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="flex flex-col items-end gap-2">
                    <div className="bg-[#8ec63f] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 animate-bounce">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        Online
                    </div>
                    <button className="bg-white text-[#8ec63f] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border border-gray-100">
                        <MessageSquare size={28} />
                    </button>
                </div>
            </div>
        </>
    );
}
