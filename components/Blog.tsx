"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Tag } from "lucide-react";

interface BlogProps {
  setView?: (view: string) => void;
}

export default function Blog({ setView }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [readingPost, setReadingPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Why RigTeq is Leading the Digital Transformation Revolution",
      excerpt: "Discover how RigTeq combines cutting-edge technology with innovative design to deliver exceptional digital solutions that drive business growth.",
      content: `
        <p>In today's fast-paced digital landscape, businesses must adapt or risk becoming obsolete. At RigTeq, we understand that true digital transformation is more than just updating technology—it's about reimagining how you connect with your customers.</p>
        <h3 class="font-bold text-xl mt-4 mb-2">The RigTeq Difference</h3>
        <p>Our approach combines three core pillars: innovation, design excellence, and robust engineering. By integrating these elements, we create solutions that are not only functional but also delightful to use.</p>
        <h3 class="font-bold text-xl mt-4 mb-2">Future-Proofing Your Business</h3>
        <p>We leverage modern frameworks like Next.js and React to build scalable applications that grow with your business. Our commitment to using the latest standards ensures your digital assets remain relevant for years to come.</p>
      `,
      category: "Company",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Dev Sharma",
      image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2662&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Building Enterprise-Grade E-commerce Solutions with RigTeq",
      excerpt: "Learn how our scalable e-commerce platforms have helped businesses achieve millions in transactions while maintaining exceptional user experience.",
      content: `
        <p>E-commerce is more than a shopping cart. It's about trust, speed, and seamless experiences. RigTeq builds platforms that handle high traffic volumes without compromising performance.</p>
        <h3 class="font-bold text-xl mt-4 mb-2">Scalability First</h3>
        <p>Using cloud-native architectures, we ensure your store stays online during flash sales and peak seasons. Security is paramount, with PCI-DSS compliant integrations and secure payment gateways.</p>
      `,
      category: "E-commerce",
      date: "2024-01-10",
      readTime: "7 min read",
      author: "Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "RigTeq's Approach to User-Centric Design Excellence",
      excerpt: "Explore our design philosophy that puts users first, creating intuitive interfaces that convert visitors into loyal customers.",
      content: `
        <p>Design is intelligence made visible. Our UX/UI team spends countless hours analyzing user behavior to craft interfaces that are intuitive and engaging.</p>
        <h3 class="font-bold text-xl mt-4 mb-2">The Psychology of Design</h3>
        <p>We use color theory, typography, and spacing to guide user attention and improve conversion rates. Every pixel serves a purpose in a RigTeq design.</p>
      `,
      category: "Design",
      date: "2024-01-05",
      readTime: "6 min read",
      author: "Mike Ross",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Optimizing Performance: How RigTeq Delivers Lightning-Fast Applications",
      excerpt: "Behind the scenes of our development process - techniques and technologies we use to ensure your applications perform flawlessly at scale.",
      content: `
        <p>Speed is a feature. A 1-second delay in loan time can result in a 7% reduction in conversions. We obsess over performance metrics.</p>
        <h3 class="font-bold text-xl mt-4 mb-2">Technical Optimization</h3>
        <p>We utilize edge computing, static site generation, and advanced caching strategies to deliver content instantly to users worldwide.</p>
      `,
      category: "Technology",
      date: "2024-01-01",
      readTime: "8 min read",
      author: "Alex Chen",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "From Concept to Launch: RigTeq's Complete Web Development Process",
      excerpt: "A comprehensive look at our methodology that ensures every project is delivered on time, within budget, and exceeds expectations.",
      content: `
        <p>Success is planned. Our agile development methodology involves you at every step, ensuring the final product matches your vision perfectly.</p>
      `,
      category: "Process",
      date: "2023-12-28",
      readTime: "6 min read",
      author: "Lisa Wang",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "RigTeq Success Stories: Transforming Businesses Through Technology",
      excerpt: "Real case studies showcasing how we've helped clients achieve their digital goals and drive measurable business results.",
      content: `
        <p>Results speak louder than words. From startups to enterprises, see how we've transformed businesses with our digital solutions.</p>
      `,
      category: "Case Studies",
      date: "2023-12-20",
      readTime: "9 min read",
      author: "David Miller",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
    },
  ];

  const categories = ["all", "Company", "Technology", "E-commerce", "Design", "Process", "Case Studies"];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const activePost = blogPosts.find(p => p.id === readingPost);

  return (
    <section className="relative py-24 px-4 md:px-12 min-h-screen bg-white overflow-hidden">
      {/* Decorative Doodle Elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <div className="w-16 h-16 bg-blue-400 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-40 right-20 opacity-10 pointer-events-none">
        <div className="w-20 h-20 bg-purple-400 rounded-lg rotate-12 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0e3d52] mb-6 font-serif tracking-tight">
            RigTeq <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Expert perspectives on digital transformation, web development, and innovative solutions from the RigTeq team.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">Company</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0e3d52] mb-4">
                  Why Choose RigTeq for Your Digital Journey?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Discover what sets RigTeq apart in the competitive digital landscape. From cutting-edge technology stacks to our commitment to excellence, learn why leading businesses trust us with their digital transformation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">January 20, 2024</span>
                    <span className="text-gray-500 text-sm">10 min read</span>
                  </div>
                  <button
                    onClick={() => setReadingPost(1)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Read Featured Post →
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-full max-w-xs h-48 md:h-56 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Featured" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Post Image */}
              <div className="h-48 bg-gray-200 overflow-hidden cursor-pointer" onClick={() => setReadingPost(post.id)}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3
                  onClick={() => setReadingPost(post.id)}
                  className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button
                    onClick={() => setReadingPost(post.id)}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Join the RigTeq Community</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive insights on digital transformation, industry trends, and RigTeq success stories delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Reading Modal */}
      {activePost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wide">
                  {activePost.category}
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock size={14} /> {activePost.readTime}
                </span>
              </div>
              <button
                onClick={() => setReadingPost(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto overflow-x-hidden p-8 md:p-12 custom-scrollbar">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-md"
              />

              <h2 className="text-3xl md:text-5xl font-bold text-[#0e3d52] mb-6 font-serif leading-tight">
                {activePost.title}
              </h2>

              <div className="flex items-center gap-6 mb-8 py-6 border-y border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {activePost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{activePost.author}</p>
                    <p className="text-xs text-gray-500">Author</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {new Date(activePost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-xs text-gray-500">Published</p>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activePost.content }}
              />

              <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <h4 className="text-xl font-bold text-[#0e3d52] mb-2">Enjoyed this article?</h4>
                <p className="text-gray-600 mb-6">Subscribe to get more insights delivered to your inbox.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}