import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

interface FooterProps {
    setView?: (view: string) => void;
    openBrochure?: () => void;
}

export default function Footer({ setView, openBrochure }: FooterProps) {
    const handleViewChange = (view: string) => {
        if (setView) {
            setView(view);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const aboutLinks = [
        "Careers",
        "About Us",
        "Clients",
        "Testimonials",
        "Raise a concern",
        "Get a Quote",
        "Share Feedback",
        "FAQs",
        "Other Links",
    ];

    const policyLinks = [
        "Domains",
        "Hosting",
        "Emails",
        "Cloud Services",
        "Maintenance",
        "Complaints",
        "Refund Policy",
        "Privacy Policy",
        "Terms & Condition",
    ];

    const servicesCol1 = [
        "Website Designing",
        "Static Website Design",
        "Dynamic Website Design",
        "Startup Website Design",
        "Free Website Design",
        "Corporate Website Design",
        "SEO Services",
        "Digital Marketing",
        "E-commerce Website Development",
    ];

    const servicesCol2 = [
        "Software Development",
        "Mobile App Development",
        "Healthcare Software Development",
        "ATS Development",
        "CMS Development",
        "HRMS Development",
        "Native App Development",
        "Android App Development",
        "iOS App Development",
    ];

    return (
        <footer className="bg-[#0a1929] text-white relative">
            {/* Overlapping CTA Banner */}
            <div className="absolute left-0 right-0 -top-10 z-10 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-stretch">
                        {/* Download Brochure */}
                        <button
                            onClick={openBrochure}
                            className="flex items-center justify-center gap-3 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold py-4 px-8 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                            Download Brochure
                        </button>

                        {/* CTA Text & Button */}
                        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 py-4 px-6 bg-gray-100">
                            <span className="text-gray-800 text-lg font-semibold">
                                Ready to Discuss your Project?
                            </span>
                            <button
                                onClick={() => handleViewChange("contact")}
                                className="flex items-center gap-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-semibold py-3 px-6 rounded transition-colors"
                            >
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
                <h2 className="text-center text-2xl font-bold mb-8">Our Services</h2>

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
                    {/* Google Map - Wider */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Global Presence</h3>
                        <div className="rounded-xl overflow-hidden h-72 shadow-lg border border-gray-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0611168506395!2d77.365!3d28.620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56b12345678%3A0xabcdef123456789!2sD-41%2C%20C%20Block%2C%20Sector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1704500000000!5m2!1sen!2sin" width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin size={20} className="text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Rigteq</h4>
                                <p className="text-gray-300 text-sm"> D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone size={20} className="text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Call Us</h4>
                                <p className="text-gray-300 text-sm">+91 87503 99055</p>
                                <p className="text-gray-300 text-sm">+91 87503 99066</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail size={20} className="text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Email Addresses</h4>
                                <p className="text-gray-300 text-sm">ops@rigteq.com</p>
                                <p className="text-gray-300 text-sm">sales@rigteq.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition-colors">
                        View Our Packages
                    </button>
                    <button
                        onClick={() => handleViewChange("contact")}
                        className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded transition-colors"
                    >
                        Talk to Our Experts
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
