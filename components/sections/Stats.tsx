'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 500, suffix: '+', label: 'Clients Served' },
    { value: 5, suffix: '+', label: 'Countries Served' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const duration = 2000;
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

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
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
                        >
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            <p className="text-gray-600 font-bold text-xs sm:text-sm tracking-wide uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
