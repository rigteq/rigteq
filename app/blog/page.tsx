import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Engineering Blog | Rigteq',
    description: 'Insights on modern software engineering, web development, enterprise systems, and technological innovations from the Rigteq team.',
    openGraph: {
        title: 'Engineering Blog | Rigteq',
        description: 'Discover articles on scalable architecture, SaaS development, and UI/UX design.',
        type: 'website',
    },
};

const posts = [
    {
        id: 'the-future-of-scalable-react-architectures',
        title: 'The Future of Scalable React Architectures',
        excerpt: 'Exploring Next.js 14, Server Components, and how modern architectures drastically reduce time to interactive (TTI) for enterprise SaaS solutions.',
        date: 'March 10, 2026',
        category: 'Frontend Performance',
        readingTime: '6 min read'
    },
    {
        id: 'ai-driven-crm-automation',
        title: 'AI-Driven CRM Automation: Integrating GPT-4',
        excerpt: 'A deep dive into how we supercharged an enterprise CRM with natural language processing and agentic workflows to increase sales conversion.',
        date: 'February 22, 2026',
        category: 'AI & Machine Learning',
        readingTime: '8 min read'
    },
    {
        id: 'building-secure-enterprise-apis-with-nodejs',
        title: 'Building Secure Enterprise APIs with Node.js',
        excerpt: 'Best practices for authentication, rate limiting, and architecting resilient microservices that handle millions of requests reliably.',
        date: 'January 15, 2026',
        category: 'Backend Security',
        readingTime: '10 min read'
    }
];

export default function BlogArchive() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 inline-block">Insights & Ideas</span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                        The Rigteq Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Library</span>
                    </h1>
                    <p className="text-lg text-gray-600 font-medium">
                        Thoughts, tutorials, and case studies to help you build better digital products.
                    </p>
                </div>

                {/* Posts List */}
                <div className="grid gap-12">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                                    {post.category}
                                </span>
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{post.date}</span>
                                <span className="text-gray-300 text-xs">•</span>
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{post.readingTime}</span>
                            </div>

                            <Link href={`/blog/${post.id}`} className="block">
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-gray-600 leading-relaxed font-medium mb-8">
                                {post.excerpt}
                            </p>

                            <Link 
                                href={`/blog/${post.id}`} 
                                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all"
                            >
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
