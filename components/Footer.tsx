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
        "Corporate Website Design",
        "SEO Services",
        "Digital Marketing",
        "E-commerce Website Development",
        "AI Chatbot Development",
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
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col md:flex-row items-stretch">
                        {/* Download Brochure */}
                        <button
                            onClick={openBrochure}
                            className="flex items-center justify-center gap-3 bg-[#004e92] hover:bg-[#003d73] text-white font-semibold py-4 px-8 transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                            Download Brochure
                        </button>

                        {/* CTA Text & Button */}
                        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 py-4 px-6 bg-blue-50">
                            <span className="text-[#0e3d52] text-lg font-semibold">
                                Ready to Discuss your Project?
                            </span>
                            <button
                                onClick={() => handleViewChange("contact")}
                                className="flex items-center gap-2 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#00b4e6] hover:to-[#0062db] text-white font-semibold py-3 px-6 rounded shadow-md hover:shadow-lg transition-all"
                            >
                                Work With Us
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12">
                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {/* About Links */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-blue-200 mb-4">Company</h4>
                        {aboutLinks.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-400 hover:text-[#00c6ff] text-sm transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>{link}
                            </a>
                        ))}
                    </div>

                    {/* Policy Links */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-blue-200 mb-4">Support & Legal</h4>
                        {policyLinks.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-400 hover:text-[#00c6ff] text-sm transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>{link}
                            </a>
                        ))}
                    </div>

                    {/* Services Col 1 */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-blue-200 mb-4">Web Services</h4>
                        {servicesCol1.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-400 hover:text-[#00c6ff] text-sm transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>{link}
                            </a>
                        ))}
                    </div>

                    {/* Services Col 2 */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-blue-200 mb-4">App Development</h4>
                        {servicesCol2.map((link, i) => (
                            <a key={i} href="#" className="block text-gray-400 hover:text-[#00c6ff] text-sm transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>{link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Map and Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 border-t border-gray-800 pt-12">
                    {/* Google Map */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <MapPin size={24} className="text-[#00c6ff]" /> Global Presence
                        </h3>
                        <div className="rounded-2xl overflow-hidden h-64 shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0611168506395!2d77.365!3d28.620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56b12345678%3A0xabcdef123456789!2sD-41%2C%20C%20Block%2C%20Sector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1704500000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00c6ff]/20 transition-colors">
                                <MapPin size={24} className="text-[#00c6ff]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-white">Headquarters</h4>
                                <p className="text-gray-400 mt-1">D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00c6ff]/20 transition-colors">
                                <Phone size={24} className="text-[#00c6ff]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-white">Call Us</h4>
                                <p className="text-gray-400 mt-1 hover:text-[#00c6ff] transition-colors cursor-pointer">+91 87503 99055</p>
                                <p className="text-gray-400 hover:text-[#00c6ff] transition-colors cursor-pointer">+91 87503 99066</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00c6ff]/20 transition-colors">
                                <Mail size={24} className="text-[#00c6ff]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-white">Email Us</h4>
                                <p className="text-gray-400 mt-1 hover:text-[#00c6ff] transition-colors cursor-pointer">ops@rigteq.com</p>
                                <p className="text-gray-400 hover:text-[#00c6ff] transition-colors cursor-pointer">sales@rigteq.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter and Social */}
                <div className="bg-[#0f253a] rounded-2xl p-8 mb-8 border border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Newsletter */}
                        <div>
                            <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
                            <p className="text-gray-400 mb-4 text-sm">Stay updated with the latest trends in tech and design.</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="bg-[#0a1929] border border-gray-700 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:border-[#00c6ff] transition-colors"
                                />
                                <button className="bg-[#004e92] hover:bg-[#0062b8] text-white font-semibold py-2 px-6 rounded-lg transition-colors whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col md:items-end">
                            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-[#3b5998] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#1da1f2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#ff0000] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#002952] py-6 text-center border-t border-white/5">
                <p className="text-gray-300 text-sm">
                    Copyright {new Date().getFullYear()} © <span className="text-white font-semibold">Rigteq.com</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
