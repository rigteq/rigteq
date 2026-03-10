import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

// Mock database
const postsDatabase: Record<string, any> = {
    'the-future-of-scalable-react-architectures': {
        title: 'The Future of Scalable React Architectures',
        excerpt: 'Exploring Next.js 14, Server Components, and how modern architectures drastically reduce time to interactive (TTI) for enterprise SaaS solutions.',
        content: `
An exploration of how modern frontend paradigms, specifically Server Components in React and Next.js, are dictating the new norm for enterprise web development.

## The Age of Hydration Limits
For years, client-side rendering forced developers to balance complex UI states with heavy bundle sizes. SSR helped, but hydration cost remained high. The new server component paradigm allows us to render static, non-interactive components strictly on the server, drastically cutting the JavaScript weight sent to the browser.

### Key Benefits for Enterprise SaaS:
- **Faster TTI:** The faster we become interactive, the higher the user retention.
- **Improved Core Web Vitals:** Directly impacting organic reach and search engine performance.
- **Simplified Data Fetching:** We can fetch data exactly where it's used without complex global state setups just to pass data down the tree.

As we continue building massive platforms at Rigteq, we optimize heavily around these patterns to deliver interfaces that feel instantaneous.
        `,
        date: 'March 10, 2026',
        category: 'Frontend Performance',
        readingTime: '6 min read',
    },
    'ai-driven-crm-automation': {
        title: 'AI-Driven CRM Automation: Integrating GPT-4',
        excerpt: 'A deep dive into how we supercharged an enterprise CRM with natural language processing and agentic workflows to increase sales conversion.',
        content: 'Content placeholder...',
        date: 'February 22, 2026',
        category: 'AI & Machine Learning',
        readingTime: '8 min read',
    },
    'building-secure-enterprise-apis-with-nodejs': {
        title: 'Building Secure Enterprise APIs with Node.js',
        excerpt: 'Best practices for authentication, rate limiting, and architecting resilient microservices that handle millions of requests reliably.',
        content: 'Content placeholder...',
        date: 'January 15, 2026',
        category: 'Backend Security',
        readingTime: '10 min read',
    }
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const post = postsDatabase[slug];

    if (!post) {
        return {
            title: 'Post Not Found | Rigteq Blog',
        };
    }

    return {
        title: `${post.title} | Rigteq Engineering Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['Rigteq Engineering Team'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = postsDatabase[slug];

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-16">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px] font-bold mb-10">
                        <ArrowLeft size={14} /> Back to Library
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                            {post.category}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <Calendar size={14} /> {post.date}
                        </div>
                        
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <Clock size={14} /> {post.readingTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        {post.excerpt}
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* Content */}
                <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed font-medium">
                    {post.content.split('\n').map((paragraph: string, idx: number) => {
                        if (paragraph.startsWith('## ')) {
                            return <h2 key={idx} className="text-3xl font-black text-gray-900 mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
                        }
                        if (paragraph.startsWith('### ')) {
                            return <h3 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
                        }
                        if (paragraph.startsWith('- ')) {
                            return <li key={idx} className="ml-6 list-disc mb-2">{paragraph.replace('- ', '')}</li>;
                        }
                        return paragraph.trim() !== '' ? <p key={idx} className="mb-6">{paragraph}</p> : null;
                    })}
                </div>
            </article>
        </main>
    );
}
