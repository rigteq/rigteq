"use client";

import { Check, Mail, MapPin, Phone, Globe, Download, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BrochurePage() {

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans print:bg-white print:text-black">
            {/* Control Bar (Hidden in Print) */}
            <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 flex justify-between items-center print:hidden">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium">
                    <ArrowLeft size={20} /> Back to Website
                </Link>
                <div className="flex gap-4">
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all"
                    >
                        <Download size={18} /> Download / Print PDF
                    </button>
                </div>
            </div>

            <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:w-full print:max-w-none my-8 print:my-0 pb-12">

                {/* PAGE 1: COVER */}
                <div className="w-full h-[297mm] relative flex flex-col items-center justify-center bg-[#0f172a] text-white p-12 overflow-hidden print:break-after-page">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 text-center space-y-8">
                        <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                            {/* Logo Placeholder */}
                            <span className="text-[#0f172a] text-5xl font-bold font-serif">R</span>
                        </div>
                        <h1 className="text-6xl font-bold font-serif tracking-tight">RIGTEQ</h1>
                        <p className="text-2xl text-blue-200 tracking-widest uppercase">Digital Excellence</p>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
                        <p className="mt-8 text-lg max-w-lg mx-auto text-gray-300">
                            Helping businesses thrive digitally with premium, high-fidelity web solutions.
                        </p>
                    </div>
                    <div className="absolute bottom-12 left-0 right-0 text-center text-gray-400 text-sm">
                        www.rigteq.com | +91 87503 99055
                    </div>
                </div>

                {/* PAGE 2: WHO WE ARE */}
                <div className="w-full min-h-[297mm] p-16 flex flex-col justify-center print:break-after-page relative">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 -z-10 rounded-br-full"></div>
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-8 border-l-4 border-blue-600 pl-4">Who We Are</h2>

                    <div className="grid grid-cols-1 gap-12 text-lg text-gray-600 leading-relaxed">
                        <p>
                            <strong className="text-blue-900">Rigteq</strong> is a premier web design and development agency based in India.
                            We don't just build websites; we craft digital experiences that drive growth, engagement, and conversion.
                        </p>
                        <p>
                            Our team consists of senior developers, creative designers, and strategic thinkers who are
                            passionate about pushing the boundaries of what's possible on the web. From small startups
                            to large enterprises, we provide tailored solutions that fit your unique needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mt-16">
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                            <p className="font-semibold text-gray-800">Projects Delivered</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">98%</h3>
                            <p className="font-semibold text-gray-800">Client Satisfaction</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">24/7</h3>
                            <p className="font-semibold text-gray-800">Support System</p>
                        </div>
                    </div>
                </div>

                {/* PAGE 3: OUR SERVICES */}
                <div className="w-full min-h-[297mm] p-16 bg-gray-50 print:bg-gray-50 print:break-after-page">
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Our Services</h2>

                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { title: "Website Design", desc: "Custom, responsive, and aesthetic designs that capture your brand essence." },
                            { title: "Web Development", desc: "Robust and scalable development using React, Next.js, and Node.js." },
                            { title: "E-Commerce", desc: "Start selling online with secure and high-converting online stores." },
                            { title: "SEO Optimization", desc: "Rank higher on Google with our technical and content SEO strategies." },
                            { title: "Performance Marketing", desc: "Drive traffic and leads with targeted ad campaigns." },
                            { title: "App Development", desc: "Cross-platform mobile apps for iOS and Android." }
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{s.title}</h3>
                                <p className="text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PAGE 4: PACKAGES & PRICING */}
                <div className="w-full min-h-[297mm] p-16 print:break-after-page">
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-8 border-l-4 border-blue-600 pl-4">Pricing Packages</h2>
                    <p className="text-gray-600 mb-12 text-lg">Transparent pricing with no hidden costs.</p>

                    <div className="space-y-8">
                        {/* Starter */}
                        <div className="border border-gray-200 rounded-2xl p-8 flex justify-between items-center bg-blue-50/50">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-900">Starter Website</h3>
                                <p className="text-gray-600 mt-2">Perfect for small businesses and personal profiles.</p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> 5 Page Responsive Design</li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> Contact Form</li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> Social Media Integration</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <span className="block text-4xl font-bold text-[#0f172a]">₹2,999</span>
                                <span className="text-sm text-gray-500">renewed annually</span>
                            </div>
                        </div>

                        {/* Business */}
                        <div className="border border-blue-200 rounded-2xl p-8 flex justify-between items-center bg-blue-600 text-white relative overflow-hidden shadow-lg">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Bestseller</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Business Tech</h3>
                                <p className="text-blue-100 mt-2">For growing details needing dynamic features.</p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-blue-50"><Check size={16} /> 10-15 Dynamic Pages</li>
                                    <li className="flex items-center gap-2 text-sm text-blue-50"><Check size={16} /> Admin Dashboard</li>
                                    <li className="flex items-center gap-2 text-sm text-blue-50"><Check size={16} /> SEO Basic Setup</li>
                                    <li className="flex items-center gap-2 text-sm text-blue-50"><Check size={16} /> 1 Year Free Hosting</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <span className="block text-4xl font-bold text-white">₹7,999</span>
                                <span className="text-sm text-blue-200">one-time cost</span>
                            </div>
                        </div>

                        {/* Premium */}
                        <div className="border border-gray-200 rounded-2xl p-8 flex justify-between items-center bg-white">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">E-Commerce / Custom</h3>
                                <p className="text-gray-600 mt-2">Full-fledged online store or custom web app.</p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> Unlimited Products</li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> Payment Gateway</li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700"><Check size={16} className="text-green-500" /> User Authentication</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <span className="block text-4xl font-bold text-[#0f172a]">₹14,999</span>
                                <span className="text-sm text-gray-500">starting price</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 5: RECENT WORK */}
                <div className="w-full min-h-[297mm] p-16 bg-gray-50 print:break-after-page">
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-8 border-l-4 border-blue-600 pl-4">Our Portfolio</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md">
                                {/* Placeholder for project */}
                                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold">Project A</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">EduTech Portal</h3>
                            <p className="text-sm text-gray-600">A complete learning management system for a school network.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md">
                                {/* Placeholder for project */}
                                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold">Project B</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Solar Energy Site</h3>
                            <p className="text-sm text-gray-600">Lead generation website for a solar panel provider.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md">
                                {/* Placeholder for project */}
                                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold">Project C</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Finance App</h3>
                            <p className="text-sm text-gray-600">Loan calculator and management dashboard.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md">
                                {/* Placeholder for project */}
                                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 font-bold">Project D</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Luxury Hotel</h3>
                            <p className="text-sm text-gray-600">Booking engine and showcase for a 5-star resort.</p>
                        </div>
                    </div>
                </div>

                {/* PAGE 6: WHY CHOOSE US */}
                <div className="w-full min-h-[297mm] p-16 print:break-after-page flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Why Businesses Choose Rigteq</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-blue-600 font-bold text-2xl">1</div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical Excellence</h3>
                                <p className="text-gray-600 text-lg">We don't use templates. We write clean, modern code using the latest frameworks to ensure your site is fast, secure, and SEO-friendly.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center shrink-0 text-purple-600 font-bold text-2xl">2</div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business-First Approach</h3>
                                <p className="text-gray-600 text-lg">We understand sales funnels. Our designs are optimized to convert visitors into paying customers.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600 font-bold text-2xl">3</div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">End-to-End Solution</h3>
                                <p className="text-gray-600 text-lg">From domain registration to hosting, design, development, and maintenance, we handle it all.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 7: CONTACT */}
                <div className="w-full h-[297mm] bg-[#0f172a] text-white p-16 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>

                    <h2 className="text-5xl font-bold font-serif mb-12">Let's Build Something Great</h2>

                    <div className="grid grid-cols-1 gap-8 text-center">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                                <Phone size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Call Us</h3>
                            <p className="text-blue-200">+91 87503 99055</p>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Email Us</h3>
                            <p className="text-blue-200">ops@rigteq.com</p>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Visit Us</h3>
                            <p className="text-blue-200">www.rigteq.com</p>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Location</h3>
                            <p className="text-blue-200">New Delhi, India</p>
                        </div>
                    </div>

                    <div className="absolute bottom-12 text-gray-500 text-sm">
                        © 2026 Rigteq. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
