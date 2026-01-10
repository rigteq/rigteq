export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[85vh] flex flex-col items-start justify-center px-4 md:px-24 overflow-hidden bg-[#0a0a0c]">
            {/* Background Animation Placeholder / Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20 z-10" />
                {/* We can use a canvas or a muted video background here to simulate the particle wave */}
                <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen animate-pulse" />
            </div>

            <div className="relative z-20 max-w-4xl">
                <h1 className="text-white text-5xl md:text-8xl font-serif font-bold leading-tight mb-8">
                    Creating <br />
                    Website For <span className="text-white">Everyone</span>
                </h1>
            </div>

            {/* Vertical Enquire Tab */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
                <div className="bg-[#002b5c] text-white px-2 py-6 rounded-l-md flex flex-col items-center gap-4 cursor-pointer hover:bg-blue-900 transition-colors shadow-xl">
                    <div className="flex items-center justify-center p-1 bg-white/20 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-widest text-[10px] font-bold">
                        Enquire Now
                    </span>
                </div>
            </div>

            {/* Wave bottom decoration */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C53.9,76,145.48,81.1,210.45,69.57Z" className="shape-fill" transform="rotate(180 600 60)"></path>
                </svg>
            </div>
        </section>
    );
}
