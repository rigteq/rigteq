import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { cases } from '@/lib/caseStudies';

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const study = cases.find((c) => c.id === id);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/#portfolio"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-bold text-sm tracking-wide mb-12 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Case Studies
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100 mb-6 inline-block">
                        {study.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                        {study.title}
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-3xl">
                        {study.description}
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Text Details */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-px bg-gray-300"></span> The Problem
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                                {study.problem}
                            </p>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                {study.fullProblem}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-px bg-gray-300"></span> The Solution
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                                {study.solution}
                            </p>
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                {study.fullSolution}
                            </p>
                        </section>

                        <section className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                                <CheckCircle2 size={18} /> The Result
                            </h2>
                            <p className="text-xl font-bold text-gray-900 leading-relaxed">
                                {study.result}
                            </p>
                            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
                                {study.fullResult}
                            </p>
                        </section>
                    </div>

                    {/* Image / Stats */}
                    <div>
                        <div className="sticky top-24">
                            <div className="bg-gray-100 rounded-[2rem] overflow-hidden aspect-[4/3] flex items-center justify-center border border-gray-200 shadow-lg shadow-gray-200/50 relative">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-contain p-8"
                                />
                            </div>

                            {/* Client Summary */}
                            <div className="mt-8 bg-gray-900 rounded-[2rem] p-8 text-white">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Client Profile</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                                        <span className="text-gray-400">Organization</span>
                                        <span className="font-bold">{study.client}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                                        <span className="text-gray-400">Sector</span>
                                        <span className="font-bold">{study.category}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Role</span>
                                        <span className="font-bold">{study.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
