import { ChevronDown } from "lucide-react";

export default function TopNav() {
    const links = [
        "Home",
        "Website Calculator",
        "Career",
        "Clients",
        "Testimonial",
        "CSR",
        "Get Quotes",
    ];

    return (
        <div className="bg-[#001529] text-white py-1.5 px-4 md:px-12 flex justify-end items-center text-[13px] font-medium border-b border-white/10 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-4 md:gap-6">
                {links.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-blue-400 transition-colors"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
}
