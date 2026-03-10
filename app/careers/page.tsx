import { Metadata } from 'next';
import { ArrowRight, Code, Terminal, Brain, Sparkles, LocateIcon, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Careers | Join Rigteq Engineering',
    description: 'Explore active job vacancies and join an elite group of engineers building scalable digital solutions.',
};

const jobs = [
    {
        id: 'senior-frontend-architect',
        title: 'Senior Frontend Architect',
        department: 'Engineering',
        type: 'Full-Time',
        location: 'Noida / Remote',
        experience: '5+ Years',
        icon: Code,
    },
    {
        id: 'ai-prompt-engineer',
        title: 'AI Native & Prompt Engineer',
        department: 'AI Lab',
        type: 'Full-Time',
        location: 'Remote',
        experience: '2+ Years',
        icon: Brain,
    },
    {
        id: 'backend-devops-lead',
        title: 'Backend & DevOps Lead',
        department: 'Infrastructure',
        type: 'Full-Time',
        location: 'Houston / Noida',
        experience: '7+ Years',
        icon: Terminal,
    },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 inline-flex items-center gap-2">
                        <Sparkles size={14} /> Join The Pack
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Extraordinary</span> Software
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        We are an elite team of engineers and designers solving complex problems globally. If you love clean code and high performance, there’s a place for you here.
                    </p>
                </div>

                {/* Job Listings */}
                <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    Open Engineering Roles <span className="w-8 h-1 bg-blue-600 rounded-full" />
                </h3>
                
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 md:flex items-center justify-between group">
                            
                            <div className="flex items-start gap-6 mb-8 md:mb-0">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <job.icon size={28} />
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest border border-gray-200">
                                            {job.department}
                                        </span>
                                        <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                                            {job.type}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {job.title}
                                    </h2>
                                    <div className="flex items-center gap-4 mt-4 opacity-70">
                                        <div className="flex items-center gap-1.5 text-sm font-bold text-gray-600">
                                            <MapPin size={16} className="text-gray-400" />
                                            {job.location}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group-hover:shadow-blue-500/20">
                                Apply Now <ArrowRight size={16} />
                            </button>

                        </div>
                    ))}
                </div>

                {/* Culture Notice */}
                <div className="mt-20 bg-[#0c1829] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                     <h3 className="text-3xl font-black mb-6">Don't see a fit?</h3>
                     <p className="text-gray-400 font-medium max-w-lg mx-auto mb-10">We are always looking for exceptional talent. If you believe your skills can accelerate our mission, drop us an email.</p>
                     <a href="mailto:careers@rigteq.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20">
                         Email Resume (careers@rigteq.com)
                     </a>
                </div>
            </div>
        </main>
    );
}
