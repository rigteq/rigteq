import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/layout/Chatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'Rigteq Softwares | Custom Software Development Company — India & USA',
  description: 'Rigteq Softwares is a leading software development company in Noida, India offering custom web development, mobile app development, AI integration, SaaS products, e-commerce solutions, and SEO services globally.',
  keywords: 'software development company, web development India, mobile app development, AI integration, SaaS development, e-commerce development, custom software, Noida, India, USA, Rigteq',
  authors: [{ name: 'Rigteq Softwares', url: 'https://www.rigteq.com' }],
  creator: 'Rigteq Softwares',
  publisher: 'Rigteq Softwares',
  metadataBase: new URL('https://www.rigteq.com'),
  alternates: { canonical: 'https://www.rigteq.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rigteq.com',
    siteName: 'Rigteq Softwares',
    title: 'Rigteq Softwares | Custom Software Development — India & USA',
    description: 'Premium software development company in India. Web apps, mobile apps, AI solutions, SaaS & e-commerce development for global businesses.',
    images: [{ url: '/images/logo.png', width: 1200, height: 630, alt: 'Rigteq Softwares' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rigteq Softwares | Custom Software Development',
    description: 'Custom web, mobile, AI & SaaS solutions by Rigteq — India & USA based software company.',
    images: ['/images/logo.png'],
    creator: '@rigteq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.png',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-gray-50 text-gray-900 antialiased selection:bg-blue-500/30 selection:text-blue-900`}>

        {/* Fixed header wrapper */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <TopBar />
          <Navbar />
        </div>

        {/* Spacer to push content below fixed headers (Responsive height) */}
        {/* Mobile: Navbar(80px) | Desktop: TopBar(40px) + Navbar(80px) = 120px */}
        <div id="top-spacer" className="h-[80px] md:h-[120px]" />

        {children}

        {/* Global Floating Buttons */}
        {/* Phone — bottom left */}
        <div className="fixed bottom-6 left-4 sm:left-6 z-[9999]">
          <a
            href="tel:+918750399055"
            aria-label="Call Rigteq"
            className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-white"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
        </div>

        {/* WhatsApp — bottom left (above phone) */}
        <div className="fixed bottom-[84px] left-4 sm:left-6 z-[9999]">
          <a
            href="https://wa.me/918750399055"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all rounded-full overflow-hidden bg-white"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
