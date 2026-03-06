'use client';

const technologyCategories = [
    {
        title: 'Programming Languages',
        accent: 'from-blue-500 to-blue-600',
        border: 'hover:border-blue-300',
        items: [
            { name: 'Swift (iOS)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
            { name: 'Kotlin (Android)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        ]
    },
    {
        title: 'Mobile App Frameworks',
        accent: 'from-cyan-500 to-cyan-600',
        border: 'hover:border-cyan-300',
        items: [
            { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        ]
    },
    {
        title: 'Backend Technologies',
        accent: 'from-violet-500 to-violet-600',
        border: 'hover:border-violet-300',
        items: [
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        ]
    },
    {
        title: 'Databases',
        accent: 'from-orange-500 to-orange-600',
        border: 'hover:border-orange-300',
        items: [
            { name: 'MySQL / SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        ]
    },
    {
        title: 'Cloud Services',
        accent: 'from-sky-500 to-sky-600',
        border: 'hover:border-sky-300',
        items: [
            { name: 'Amazon Web Services', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Google Cloud Platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
            { name: 'Microsoft Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        ]
    },
    {
        title: 'AI Integration Technologies',
        accent: 'from-emerald-500 to-emerald-600',
        border: 'hover:border-emerald-300',
        items: [
            { name: 'GPT-4o (OpenAI)', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
            { name: 'Claude 3.5 (Anthropic)', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg' },
            { name: 'Gemini 1.5 (Google)', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
        ]
    },
];

export function Technologies() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Our Technology Stack</p>
                    <h2 className="text-4xl md:text-[42px] font-black text-gray-900 leading-tight tracking-tight">
                        Powering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Digital Solutions</span>
                    </h2>
                </div>

                {/* 3×2 Premium Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologyCategories.map((category) => (
                        <div
                            key={category.title}
                            className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${category.border}`}
                        >
                            {/* Gradient top bar */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${category.accent}`} />

                            <div className="p-7">
                                {/* Card title */}
                                <h3 className="text-base font-black text-gray-900 mb-6 uppercase tracking-wide">
                                    {category.title}
                                </h3>

                                {/* Items — always 3 */}
                                <div className="space-y-4">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200"
                                        >
                                            {/* Logo box */}
                                            <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                                                <img
                                                    src={item.logo}
                                                    alt={item.name}
                                                    className="w-6 h-6 object-contain"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                                                    }}
                                                />
                                            </div>
                                            {/* Tech name */}
                                            <span className="text-gray-700 font-semibold text-sm leading-tight">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
