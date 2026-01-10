import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
    const aboutLinks = [
        "Any grievance Home",
        "Know more About",
        "Our Supporter Clients",
        "What They Says Testimonial",
        "Our Inspiration CSR",
        "For Pricing GET QUOTE",
        "Links Details Site Map",
        "Your Words Feedback",
    ];

    const policyLinks = [
        "Career",
        "Email Hosting",
        "Domain",
        "Annual Maintenance",
        "Refund Policy",
        "Privacy Policy",
        "Terms & Condition",
        "Complaint",
    ];

    const servicesCol1 = [
        "Website Designing",
        "Static Website Design",
        "Startup Website Design",
        "Free Website Design",
        "Dynamic Website Design",
        "Corporate Website Design",
        "CMS Development",
        "CRM Development",
        "E-commerce Website Development",
    ];

    const servicesCol2 = [
        "PSD to HTML Design",
        "Landing page website",
        "Email template design",
        "Custom website development",
        "Multi vendor Website Development",
        "Business Profile Website",
        "Informative Website",
        "Portfolio Website",
        "Website Designing Company In Noida",
    ];

    return (
        <footer className="bg-[#0a1929] text-white relative">
            {/* Overlapping CTA Banner */}
            <div className="absolute left-0 right-0 -top-10 z-10 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-stretch">
                        {/* Download Brochure */}
                        <button className="flex items-center justify-center gap-3 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold py-4 px-8 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                            Download Brochure
                        </button>

                        {/* CTA Text & Button */}
                        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 py-4 px-6 bg-gray-100">
                            <span className="text-gray-800 text-lg font-semibold">
                                Ready to Discuss your Project?
                            </span>
                            <button className="flex items-center gap-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold py-3 px-6 rounded transition-colors">
                                Work With Us
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-12">
                {/* About Us / Our Services Header */}
                <h2 className="text-center text-2xl font-bold mb-8">About Us/Our Services</h2>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {/* About Links */}
                    <div className="space-y-2">
                        {aboutLinks.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                                <ArrowRight size={12} className="inline mr-2" />{link}
                            </a>
                        ))}
                    </div>

                    {/* Policy Links */}
                    <div className="space-y-2">
                        {policyLinks.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                                <ArrowRight size={12} className="inline mr-2" />{link}
                            </a>
                        ))}
                    </div>

                    {/* Services Col 1 */}
                    <div className="space-y-2">
                        {servicesCol1.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                                <ArrowRight size={12} className="inline mr-2" />{link}
                            </a>
                        ))}
                    </div>

                    {/* Services Col 2 */}
                    <div className="space-y-2">
                        {servicesCol2.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                                <ArrowRight size={12} className="inline mr-2" />{link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Map and Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Global Presence Map */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Global Presence</h3>
                        <div className="rounded-xl overflow-hidden h-72">
                            <img
                                src="/images/cover-map.gif"
                                alt="Our Global Presence"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Noida Office */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin size={20} className="text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Noida Office</h4>
                                <p className="text-gray-300 text-sm">Tower C 210 & 211 Noida One Building, Sector 62, Uttar Pradesh 201301</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone size={20} className="text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Call Us</h4>
                                <p className="text-gray-300 text-sm">+91 88600 80044</p>
                                <p className="text-gray-300 text-sm">+91 78384 90044</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail size={20} className="text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Email Addresses</h4>
                                <p className="text-gray-300 text-sm">info@rigteq.com</p>
                                <p className="text-gray-300 text-sm">sales@rigteq.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition-colors">
                        Website Price Calculator
                    </button>
                    <button className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded transition-colors">
                        Raise Your Ticket
                    </button>
                </div>

                {/* Newsletter and Social */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Sign Up Newsletter</h3>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="bg-white text-gray-800 px-4 py-3 rounded w-full max-w-xs"
                            />
                            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded w-fit transition-colors">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Stay In Touch</h3>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-[#3b5998] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1da1f2] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#0077b5] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#ff0000] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-red-600 py-4 text-center">
                <p className="text-white text-sm">
                    Copyright 2025 © Rigteq.com All Rights Are Reserved.
                </p>
            </div>
        </footer>
    );
}
