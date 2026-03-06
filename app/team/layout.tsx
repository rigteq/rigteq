import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Expert Team | Rigteq Softwares — Leadership & Engineering',
    description: 'Meet the visionaries and engineers behind Rigteq Softwares. 10+ years of expertise in software architecture, technical leadership, and global sales.',
    keywords: 'Rigteq team, software engineers, technical architect, Divyang Gaur, Manoj Sharma, Yatendra Sharma, software leadership',
    openGraph: {
        title: 'Our Expert Team | Rigteq Softwares',
        description: 'Expert leadership driving digital transformation and software excellence.',
        url: 'https://www.rigteq.com/team',
    },
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
