'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'none';
    delay?: number;
}

export function SectionWrapper({ 
    children, 
    className = '', 
    animation = 'fade-up',
    delay = 0 
}: SectionWrapperProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    const getAnimationClass = () => {
        if (animation === 'none') return '';
        
        const baseClasses = 'opacity-0';
        
        if (!isVisible) return baseClasses;

        switch (animation) {
            case 'fade-up':
                return 'animate-fade-in-up';
            case 'fade-in':
                return 'animate-fade-in';
            case 'slide-left':
                return 'animate-slide-in-left';
            case 'slide-right':
                return 'animate-slide-in-right';
            case 'scale-in':
                return 'animate-scale-in';
            default:
                return 'animate-fade-in-up';
        }
    };

    const getDelayClass = () => {
        if (delay === 0) return '';
        return `delay-${delay}`;
    };

    return (
        <div 
            ref={ref} 
            className={`${className} ${getAnimationClass()} ${getDelayClass()}`}
        >
            {children}
        </div>
    );
}

