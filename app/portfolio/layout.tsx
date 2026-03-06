import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Rigteq Softwares — Showcase of Engineered Excellence',
    description: 'Explore the Rigteq Softwares portfolio. Disruptive SaaS platforms, global e-commerce ecosystems, and custom web/mobile applications built for industry leaders.',
    keywords: 'software portfolio, web development projects, app development examples, SaaS case studies, Rigteq projects',
    openGraph: {
        title: 'Portfolio | Rigteq Softwares',
        description: 'Showcasing our best work in software engineering and digital transformation.',
        url: 'https://www.rigteq.com/portfolio',
        images: [{ url: '/images/portfolio/freeschoolms.png', width: 1200, height: 630, alt: 'Rigteq Portfolio' }],
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
