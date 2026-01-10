interface MediaProps {
    setView?: (view: string) => void;
}

export default function Media({ setView }: MediaProps) {
    const mediaItems = [
        { 
            title: "E-Commerce Platform", 
            description: "Custom-built online store with seamless payment integration and responsive design for a retail client.", 
            src: "/images/doodle1.svg",
            type: "Web Development"
        },
        { 
            title: "Healthcare App", 
            description: "Mobile application for patient management with secure data handling and intuitive user interface.", 
            src: "/images/doodle2.svg",
            type: "Mobile App"
        },
        { 
            title: "Corporate Website", 
            description: "Modern business website with CMS integration, SEO optimization, and lead generation features.", 
            src: "/images/doodle3.svg",
            type: "Website Design"
        },
        { 
            title: "CRM System", 
            description: "Custom customer relationship management system with analytics dashboard and automation.", 
            src: "/images/doodle4.svg",
            type: "Software Solution"
        },
        { 
            title: "Educational Platform", 
            description: "Interactive learning management system with video streaming and progress tracking.", 
            src: "/images/doodle5.svg",
            type: "E-Learning"
        },
        { 
            title: "Restaurant App", 
            description: "Food ordering and delivery app with real-time tracking and payment processing.", 
            src: "/images/doodle6.svg",
            type: "Mobile Development"
        },
    ];

    const handleInquiry = () => {
        if (setView) setView("contact");
    };

    return (
        <section id="media" className="bg-white py-16 px-4 md:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0e3d52] mb-4">
                        RigTeq Media Showcase
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover our creative doodle illustrations and successful projects that bring ideas to life through innovative technology solutions.
                    </p>
                    <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img 
                                    src={item.src} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const img = e.currentTarget;
                                        img.style.display = 'none';
                                        const fallback = img.nextElementSibling as HTMLElement;
                                        if (fallback) {
                                            fallback.style.display = 'flex';
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 hidden">
                                    <span className="text-white text-sm font-medium bg-blue-600 px-2 py-1 rounded">
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-[#0e3d52]">{item.title}</h3>
                                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                                        {item.type}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <button
                                    onClick={handleInquiry}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}