interface IndustriesProps {
    setView?: (view: string) => void;
}

export default function IndustriesSection({ setView }: IndustriesProps) {
    const industries = [
        {
            name: "Healthcare",
            description: "At Rigteq, we craft healthcare websites that combine professionalism, user-centric design, and HIPAA-compliant security. Our solutions include telemedicine portals, patient scheduling systems, and patient access tools, ensuring a seamless experience for users. Designed to be mobile-friendly and optimized for SEO, our websites enhance visibility and engagement.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/01.webp"
        },
        {
            name: "Real Estate",
            description: "At Rigteq, we design real estate websites that captivate audiences and simplify property exploration. Our solutions include interactive property listings, virtual tours, and advanced search filters to ensure a seamless browsing experience. Mobile-responsive designs and robust SEO strategies improve visibility, driving inquiries and boosting your market presence.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/02.webp"
        },
        {
            name: "E-commerce",
            description: "Rigteq specializes in developing dynamic e-commerce websites that elevate user experiences and drive sales. From secure payment integrations to personalized product recommendations, we offer features that keep customers coming back. Our websites are optimized for mobile devices and search engines, ensuring a seamless shopping journey for users.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/03.webp"
        },
        {
            name: "Finance",
            description: "At Rigteq, we create finance websites that build trust and showcase your expertise. Featuring loan calculators, client dashboards, and compliance-focused designs, our websites meet the demands of financial professionals and institutions. With robust SEO and user-centric layouts, we ensure your brand stands out online.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/04.webp"
        },
        {
            name: "Manufacturing",
            description: "Rigteq excels in designing manufacturing websites that showcase your expertise and drive business inquiries. From detailed product catalogs to mobile-friendly layouts, we create platforms that resonate with your target audience. Our SEO strategies ensure your website gains visibility, enabling you to connect with potential clients effortlessly.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/05.webp"
        },
        {
            name: "Education",
            description: "We at Rigteq design education websites that inspire learning and drive enrollment. Our solutions include virtual classrooms, course management systems, and interactive student portals. With SEO-friendly and mobile-optimized designs, we ensure your platform reaches a global audience, enhancing your institution's digital footprint.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/06.webp"
        },
        {
            name: "Supply Chain",
            description: "Rigteq develops supply chain websites that optimize operations and foster communication across networks. Real-time tracking, inventory management, and vendor portals ensure your business runs smoothly and efficiently. Our designs are SEO-focused and responsive, delivering maximum impact and usability.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/07.webp"
        },
        {
            name: "Restaurant",
            description: "At Rigteq, we design restaurant websites that entice customers and enhance your brand's online presence. From elegant menu displays to seamless reservation systems, our platforms are designed to increase engagement and bookings. With mobile-friendly and SEO-driven solutions, we help your restaurant reach more diners and achieve sustained growth.",
            link: "#",
            icon: "https://www.cssfounder.com/img/indus/08.webp"
        }
    ];

    const handleInquiry = () => {
        if (setView) setView("contact");
    };

    return (
        <section id="industries" className="bg-white py-16 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0e3d52] mb-6">
                    Industries We Serve
                </h2>
                <div className="mb-12">
                    <p className="text-gray-600 leading-relaxed mb-4">
                        At Rigteq, we create stunning, custom websites tailored to your industry&apos;s unique needs. Our expert team ensures your online presence is impactful and drives success. We combine cutting-edge design with innovation to elevate your brand. Partner with us for a standout digital experience.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Whether you&apos;re in healthcare, education, e-commerce, real estate, or any other industry, we understand the importance of a website that resonates with your target audience. Our solutions are crafted to reflect your values, enhance user experience, and deliver measurable results. No matter your field, Rigteq is your go-to partner for driving online growth.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our design and development process focuses on aligning your business goals with your audience&apos;s expectations. From responsive layouts to intuitive navigation, we ensure every aspect of your website is optimized for performance and engagement. With us, your website will not only look great but also function seamlessly across all devices.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        At Rigteq, we stay ahead of the curve by integrating the latest trends and technologies into our projects. From advanced animations to robust back-end functionalities, we make sure your website leaves a lasting impression. Our commitment to quality and innovation guarantees a website that is both visually appealing and technically sound.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We pride ourselves on understanding the unique challenges and opportunities of each industry. By conducting in-depth research and collaborating closely with our clients, we create solutions that cater to your specific market demands. Our holistic approach ensures that your website is more than just a digital presence—it&apos;s a powerful business tool.
                    </p>
                </div>
                <div className="space-y-12">
                    {industries.map((industry, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-[#0e3d52] mb-4">{industry.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{industry.description}</p>
                                <a href={industry.link} className="text-red-600 hover:text-red-700 font-semibold">View more</a>
                            </div>
                            <div className="flex-shrink-0">
                                <img src={industry.icon} alt={industry.name} className="w-24 h-24 object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">Ready to Discuss your Project?</p>
                    <button
                        onClick={handleInquiry}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
                    >
                        Work With Us
                    </button>
                </div>
            </div>
        </section>
    );
}
