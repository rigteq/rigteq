"use client";

import { HelpCircle, FileQuestion, MessageCircle } from "lucide-react";

interface SupportProps {
    setView?: (view: string) => void;
}

export default function Support({ setView }: SupportProps) {
    const faqs = [
        {
            q: "How long does it take to build a website?",
            a: "Typical timelines range from 3-7 days for basic sites (Starter Package) to 2-4 weeks for custom enterprise solutions depending on complexity.",
        },
        {
            q: "Do you provide hosting and domain?",
            a: "Yes! All our packages include 1 year of free hosting. Domain registration assistance is also provided.",
        },
        {
            q: "Will my website be mobile-friendly?",
            a: "Absolutely. We follow a mobile-first approach ensuring your site looks perfect on all devices (phones, tablets, desktops).",
        },
        {
            q: "Do you offer post-launch support?",
            a: "Yes, we offer 6 months to 1 year of free maintenance support depending on your chosen package.",
        },
    ];

    const handleRaiseTicket = () => {
        if (setView) {
            setView("contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleLiveChat = () => {
        window.open("https://wa.me/918750399055", "_blank");
    };

    return (
        <section className="py-20 px-4 md:px-12 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0e3d52] mb-4 font-serif">
                        Support & <span className="text-blue-600">FAQ</span>
                    </h2>
                    <p className="text-gray-600">
                        Have questions? We're here to help you 24/7.
                    </p>
                </div>

                <div className="grid gap-6 mb-16">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div className="flex gap-4">
                                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg h-fit text-blue-600">
                                    <HelpCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                                        {faq.q}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#0e3d52] text-white p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
                        <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                            Our support team is just a click away. Raise a ticket or chat with us directly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleRaiseTicket}
                                className="bg-white text-[#0e3d52] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            >
                                <FileQuestion size={18} /> Raise Ticket
                            </button>
                            <button
                                onClick={handleLiveChat}
                                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={18} /> Live Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
