"use client";

import { useState } from "react";

interface BlogProps {
  setView?: (view: string) => void;
}

export default function Blog({ setView }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Why RigTeq is Leading the Digital Transformation Revolution",
      excerpt: "Discover how RigTeq combines cutting-edge technology with innovative design to deliver exceptional digital solutions that drive business growth.",
      category: "Company",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/images/blog/web-dev-trends.jpg"
    },
    {
      id: 2,
      title: "Building Enterprise-Grade E-commerce Solutions with RigTeq",
      excerpt: "Learn how our scalable e-commerce platforms have helped businesses achieve millions in transactions while maintaining exceptional user experience.",
      category: "E-commerce",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/images/blog/ecommerce-scalability.jpg"
    },
    {
      id: 3,
      title: "RigTeq's Approach to User-Centric Design Excellence",
      excerpt: "Explore our design philosophy that puts users first, creating intuitive interfaces that convert visitors into loyal customers.",
      category: "Design",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/images/blog/ui-ux-principles.jpg"
    },
    {
      id: 4,
      title: "Optimizing Performance: How RigTeq Delivers Lightning-Fast Applications",
      excerpt: "Behind the scenes of our development process - techniques and technologies we use to ensure your applications perform flawlessly at scale.",
      category: "Technology",
      date: "2024-01-01",
      readTime: "8 min read",
      image: "/images/blog/react-performance.jpg"
    },
    {
      id: 5,
      title: "From Concept to Launch: RigTeq's Complete Web Development Process",
      excerpt: "A comprehensive look at our methodology that ensures every project is delivered on time, within budget, and exceeds expectations.",
      category: "Process",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "/images/blog/web-dev-trends.jpg"
    },
    {
      id: 6,
      title: "RigTeq Success Stories: Transforming Businesses Through Technology",
      excerpt: "Real case studies showcasing how we've helped clients achieve their digital goals and drive measurable business results.",
      category: "Case Studies",
      date: "2023-12-20",
      readTime: "9 min read",
      image: "/images/blog/ecommerce-scalability.jpg"
    }
  ];

  const categories = ["all", "Company", "Technology", "E-commerce", "Design", "Process", "Case Studies"];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="relative py-24 px-4 md:px-12 min-h-screen bg-white overflow-hidden">
      {/* Decorative Doodle Elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <img src="/images/doodle1.svg" alt="" className="w-16 h-16" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 pointer-events-none">
        <img src="/images/doodle2.svg" alt="" className="w-20 h-20" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 pointer-events-none">
        <img src="/images/doodle3.svg" alt="" className="w-18 h-18" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
        <img src="/images/doodle4.svg" alt="" className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0e3d52] mb-6 font-[playfair] tracking-tight">
            RigTeq <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Expert perspectives on digital transformation, web development, and innovative solutions from the RigTeq team.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
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
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Read Featured Post →
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-full max-w-xs h-48 md:h-56 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-4xl md:text-6xl">🚀</span>
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Post Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
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
    </section>
  );
}