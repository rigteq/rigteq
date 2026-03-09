import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Process } from '@/components/sections/Process';
import { Technologies } from '@/components/sections/Technologies';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Testimonials } from '@/components/sections/Testimonials';
import { Locations } from '@/components/sections/Locations';
import { Contact } from '@/components/sections/Contact';
import { Packages } from '@/components/sections/Packages';
import { CTA } from '@/components/sections/CTA';
import { Products } from '@/components/sections/Products';
import { Industries } from '@/components/sections/Industries';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.rigteq.com/#organization',
      name: 'Rigteq Softwares',
      url: 'https://www.rigteq.com',
      logo: 'https://www.rigteq.com/images/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/rigteq',
        'https://twitter.com/rigteq',
        'https://www.facebook.com/rigteq',
      ],
      contactPoint: [
        { '@type': 'ContactPoint', telephone: '+91-87503-99055', contactType: 'sales', areaServed: 'IN', availableLanguage: 'English' },
        { '@type': 'ContactPoint', telephone: '+1-3502-008-444', contactType: 'sales', areaServed: 'US', availableLanguage: 'English' },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.rigteq.com/#localbusiness',
      name: 'Rigteq Softwares',
      image: 'https://www.rigteq.com/images/logo.png',
      url: 'https://www.rigteq.com',
      telephone: '+91-87503-99055',
      email: 'sales@rigteq.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'D-41, C Block, Sector 59',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201309',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      }],
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.rigteq.com/#website',
      url: 'https://www.rigteq.com',
      name: 'Rigteq Softwares',
      description: 'Custom software development company in India offering web, mobile, AI & SaaS solutions globally.',
      publisher: { '@id': 'https://www.rigteq.com/#organization' },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Services />
      <Products />
      <Industries />
      <Features />
      <Process />
      <Technologies />
      <CaseStudies />
      <Packages />
      <Testimonials />
      <Locations />
      <Contact />
      <CTA />
    </main>
  );
}