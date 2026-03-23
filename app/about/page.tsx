import { Metadata } from 'next';
import { Award, TrendingUp, Code2, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | Rigteq',
    description: "Learn about Rigteq's journey, mission, founder, and the expert team driving digital transformation.",
};

const team = [
    {
        name: 'Mr. Divyang Gaur',
        role: 'Director',
        icon: Award,
        color: 'from-blue-600 to-blue-400',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600'
    },
    {
        name: 'Mr. Manoj Sharma',
        role: 'Senior Sales Manager',
        icon: TrendingUp,
        color: 'from-emerald-600 to-emerald-400',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-600'
    },
    {
        name: 'Mr. Yatendra Sharma',
        role: 'Technical Architect',
        icon: Code2,
        color: 'from-violet-600 to-violet-400',
        bgColor: 'bg-violet-50',
        textColor: 'text-violet-600'
    },
    {
        name: 'Satyam Raikwar',
        role: 'Program Manager',
        icon: Briefcase,
        color: 'from-orange-600 to-orange-400',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-600'
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-20">
            {/* Header / Mission Statement */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 inline-block">Our Mission</span>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                    To engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">scalable software</span> that powers the digital future.
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We believe in bridging the gap between complex business challenges and elegant, high-performance technology. Rigteq is dedicated to building solutions that not only work but define the next standard of digital excellence.
                </p>
            </section>

            {/* Company Story */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 inline-block">Company Story</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Built from a passion for perfection.</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed font-medium text-lg">
                            <p>
                                Rigteq began with a simple observation: enterprise software was often functional but rarely delightful. We set out to change that. By combining rigorous engineering principles with cutting-edge design, we created a new methodology for software development.
                            </p>
                            <p>
                                Over the years, we've delivered transformative digital experiences for startups and Fortune 500s alike. Every project is an opportunity to innovate, optimize, and push the boundaries of what's possible on the web and mobile.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                            alt="RigTeq Team Collaboration"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Founder Introduction */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#0c1829] rounded-[3rem] p-10 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white/10 shrink-0 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                            <Award size={64} className="text-white" />
                        </div>
                        <div>
                            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4 inline-block">Founder's Vision</span>
                            <h3 className="text-3xl md:text-5xl font-black mb-6">Mr. Divyang Gaur</h3>
                            <p className="text-xl text-gray-300 italic mb-8 bg-white/5 p-6 rounded-2xl border border-white/10">
                                "Technology should empower human potential, not complicate it. At Rigteq, we architect systems that get out of the way and let you focus on what you do best—growing your vision."
                            </p>
                            <p className="text-gray-400 font-medium">Director at Rigteq, leading the charge in democratizing enterprise-grade software capabilities for growing businesses.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Overview */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 inline-block">The Experts</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-16">Meet the Engineering Core</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="group relative">
                                <div className={`aspect-square rounded-3xl overflow-hidden mb-6 ${member.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                                    <member.icon size={64} className={member.textColor} />
                                </div>
                                <h4 className="text-xl font-black text-gray-900 mb-1">{member.name}</h4>
                                <p className={`text-sm font-bold uppercase tracking-wide ${member.textColor}`}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

