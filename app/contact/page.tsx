import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: 'Contact Us | Rigteq Softwares',
    description: 'Get in touch with Rigteq for custom software development, mobile apps, and enterprise solutions.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20">
            <Contact />
        </main>
    );
}
