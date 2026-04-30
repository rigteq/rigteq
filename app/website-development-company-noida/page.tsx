import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Website Development Company in Noida & Ghaziabad | Rigteq Softwares',
    description: 'Looking for a trusted website development company in Noida or Ghaziabad? Rigteq Softwares delivers custom websites, web apps & e-commerce portals. Free consultation. Call +91 87503 99055.',
    keywords: 'website development company in noida, web development company noida, website development ghaziabad, web design company noida, website developers near me, custom website development noida',
    alternates: { canonical: 'https://www.rigteq.com/website-development-company-noida' },
    openGraph: {
        title: 'Website Development Company in Noida | Rigteq Softwares',
        description: 'Top-rated website development company in Noida & Ghaziabad. Custom web apps, e-commerce, CMS & mobile-first websites.',
        url: 'https://www.rigteq.com/website-development-company-noida',
    },
};

const services = [
    { title: 'Business Websites', desc: 'Professional corporate & brochure websites that rank on Google and convert visitors.' },
    { title: 'E-Commerce Portals', desc: 'Full-featured online stores with payment gateway, inventory & order management.' },
    { title: 'Custom Web Applications', desc: 'Bespoke portals, dashboards, CRMs & SaaS products built to your exact specs.' },
    { title: 'CMS Development', desc: 'WordPress, Strapi & headless CMS setups you can manage without a developer.' },
    { title: 'Mobile-First Design', desc: 'Pixel-perfect responsive designs optimised for every device and screen size.' },
    { title: 'Speed & SEO Optimisation', desc: 'Core Web Vitals, structured data & on-page SEO baked in from day one.' },
];

const faqs = [
    { q: 'How much does a website cost in Noida?', a: 'A professional business website starts from ₹25,000. E-commerce and custom web apps start from ₹60,000 depending on complexity. We offer free estimates — no hidden charges.' },
    { q: 'How long does it take to build a website?', a: 'A standard 5–8 page business website takes 2–3 weeks. E-commerce and web apps take 4–8 weeks. We share a milestone timeline upfront.' },
    { q: 'Do you provide website maintenance?', a: 'Yes — we offer monthly maintenance plans covering security patches, speed optimisation, content updates & uptime monitoring.' },
    { q: 'Will my website rank on Google?', a: 'We build every website with technical SEO best practices: fast load times, schema markup, mobile optimisation & clean code structure.' },
];

export default function WebsiteDevelopmentNoidaPage() {
    return (
        <main>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-5">
                        Noida &amp; Ghaziabad — NCR&apos;s Trusted Dev Partner
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black text-gray-900 leading-tight tracking-tight mb-6">
                        Website Development Company<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">in Noida &amp; Ghaziabad</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        We build fast, beautiful &amp; conversion-focused websites for businesses across Delhi NCR. From static brochure sites to complex e-commerce portals — delivered on time, on budget.
                    </p>

                    {/* Guarantee strip */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {['100% Satisfaction Guarantee', 'Free Revisions', 'On-time Delivery', 'NDA Protected'].map(g => (
                            <span key={g} className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                                <CheckCircle size={14} className="text-green-500" /> {g}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all">
                            📅 Book Free Consultation <ArrowRight size={16} />
                        </Link>
                        <a href="tel:+918750399055" className="px-8 py-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm">
                            <Phone size={16} className="text-blue-600" /> +91 87503 99055
                        </a>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">🟢 Limited slots this month — respond within 24 hours</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Our Services</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                            What We Build in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Noida &amp; NCR</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(s => (
                            <div key={s.title} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                                <h3 className="font-black text-gray-900 text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[['200+', 'Projects Delivered'], ['50+', 'Clients Served'], ['5+', 'Years in Business'], ['5', 'Countries Reached']].map(([val, lbl]) => (
                            <div key={lbl}>
                                <p className="text-4xl font-black mb-1">{val}</p>
                                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">{lbl}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-gray-900 text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map(({ q, a }) => (
                            <div key={q} className="bg-white border border-gray-200 rounded-2xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2 text-base">{q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to Build Your Website?</h2>
                    <p className="text-gray-600 mb-8">Get a free project estimate in 24 hours. No commitment required.</p>
                    <Link href="/#contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all">
                        📅 Book Free Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
