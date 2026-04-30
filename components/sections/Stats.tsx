'use client';

import { useEffect, useState, useRef } from 'react';

const stats = [
    { value: 5,   suffix: '+', label: 'Years Experience' },
    { value: 200, suffix: '+', label: 'Projects Delivered' },
    { value: 50,  suffix: '+', label: 'Clients Served' },
    { value: 5,   suffix: '+', label: 'Countries Served' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);   // ref, not state — won't trigger effect re-run
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    observer.disconnect();               // stop observing once triggered
                    const duration = 1800;
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(progress < 1 ? Math.floor(eased * value) : value);
                        if (progress < 1) {
                            rafRef.current = requestAnimationFrame(animate);
                        }
                    };
                    rafRef.current = requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            observer.disconnect();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [value]); // only value — hasAnimated is a ref now, safe to omit

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            {count}{suffix}
        </div>
    );
}


export function Stats() {
    return (
        <section className="bg-white py-24 relative overflow-hidden" aria-label="Company Statistics">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-[transform,box-shadow,border-color] duration-300"
                        >
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            <p className="text-gray-600 font-bold text-xs sm:text-sm tracking-wide uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
