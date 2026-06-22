'use client';

import { MessageCircle, ChevronDown, Award } from 'lucide-react';

export default function Hero() {
    const handleWhatsApp = () => {
        window.open(
            'https://wa.me/919779771055?text=Hi%20I%20want%20to%20book%20a%20free%20demo%20class',
            '_blank'
        );
    };

    const scrollToEnrollment = () => {
        const element = document.getElementById('enrollment');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid-paper pt-32 pb-16 px-4"
        >
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col gap-12">
                {/* Main Columns */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Text Column */}
                    <div className="lg:col-span-7 text-left flex flex-col items-start">
                        {/* Badge styled as exam tag */}
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-zinc-800/80 rounded-full bg-zinc-900/60 backdrop-blur-md shadow-[0_4px_20px_rgba(249,115,22,0.1)] animate-fade-in-up">
                            <Award size={16} className="text-secondary" />
                            <span className="text-white font-bold text-xs uppercase tracking-wider font-mono">
                                Trusted Since 2003 ✦ 1000+ JEE Aspirants
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.15] font-heading animate-fade-in-up delay-100">
                            Crack JEE.
                            <br />
                            <span className="text-gradient">Chase Your Dreams.</span>
                        </h1>

                        {/* Sub text */}
                        <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed font-sans max-w-xl animate-fade-in-up delay-200">
                            Online JEE Mains &amp; Advanced coaching by{' '}
                            <span className="text-white font-bold">Ex-Senior Faculty</span> of ALLEN, AAKASH &amp;
                            BANSAL — with{' '}
                            <span className="text-secondary font-bold font-mono">21+ years</span> of transforming
                            aspirants into achievers.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center w-full sm:w-auto animate-fade-in-up delay-300">
                            <button
                                onClick={scrollToEnrollment}
                                className="px-8 py-4 btn-stamp text-lg text-center"
                            >
                                Book a Free Demo Class
                            </button>
                            <button
                                onClick={handleWhatsApp}
                                className="px-8 py-4 btn-stamp-secondary text-lg text-center flex items-center justify-center gap-3"
                            >
                                <MessageCircle size={20} className="text-secondary fill-secondary/10" />
                                WhatsApp Us
                            </button>
                        </div>
                    </div>

                    {/* Graded Answer Sheet Column */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up delay-400">
                        {/* Interactive Graded Paper Card */}
                        <div className="graded-card w-full max-w-[420px] p-6 text-left font-mono relative overflow-hidden select-none bg-grid-paper-light rounded-2xl rotate-[-2deg] hover:rotate-[-0.5deg] transition-transform duration-300">
                            {/* Margin line to simulate real exam notebook */}
                            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-orange-500/20" />

                            <div className="pl-4">
                                {/* Top header */}
                                <div className="border-b border-zinc-700/60 pb-3 mb-4 flex justify-between items-center text-[10px] text-zinc-400 font-bold">
                                    <span>JEE (ADVANCED) EXAM SHEET</span>
                                    <span className="text-[#009E49] font-bold text-xs tracking-tight border border-[#009E49] px-2 py-0.5 rounded-[3px] transform rotate-3 bg-black/40 shadow-[1px_1px_0px_#009E49]">
                                        ✓ CORRECT (+4)
                                    </span>
                                </div>

                                {/* Question */}
                                <div className="mb-4">
                                    <p className="font-bold text-zinc-400 text-xs uppercase tracking-wide mb-1 font-heading">
                                        Q.12 [Single Choice Option]
                                    </p>
                                    <p className="text-sm font-bold text-white leading-relaxed">
                                        Evaluate the following definite integral:
                                        <span className="block my-3 text-base text-center bg-zinc-950 border border-zinc-700/60 py-2 rounded-lg font-mono font-semibold text-[#F4811F]">
                                            I = &int;<sub>0</sub><sup>&pi;/2</sup> dx / (1 + tan x)
                                        </span>
                                    </p>
                                </div>

                                {/* Candidate Workings */}
                                <div className="space-y-2 mb-4 pl-3 border-l border-orange-500/30 text-[11px] text-zinc-400 font-sans italic">
                                    <p className="font-bold text-[10px] text-[#009E49] font-mono not-italic uppercase tracking-widest mb-1">
                                        Candidate Working:
                                    </p>
                                    <p>1. Rewrite using sin(x) and cos(x):</p>
                                    <p className="pl-4 font-mono font-semibold not-italic text-xs text-zinc-200">
                                        I = &int;<sub>0</sub><sup>&pi;/2</sup> cos(x) / (cos(x) + sin(x)) dx &nbsp; -- (1)
                                    </p>
                                    <p>2. Apply integral property &int;<sub>a</sub><sup>b</sup> f(x)dx = &int;<sub>a</sub><sup>b</sup> f(a+b-x)dx:</p>
                                    <p className="pl-4 font-mono font-semibold not-italic text-xs text-zinc-200">
                                        I = &int;<sub>0</sub><sup>&pi;/2</sup> sin(x) / (sin(x) + cos(x)) dx &nbsp; -- (2)
                                    </p>
                                    <p>3. Add equations (1) and (2):</p>
                                    <p className="pl-4 font-mono font-semibold not-italic text-xs text-zinc-200">
                                        2I = &int;<sub>0</sub><sup>&pi;/2</sup> 1 &middot; dx = [x]<sub>0</sub><sup>&pi;/2</sup> = &pi;/2
                                    </p>
                                    <p className="pl-4 font-bold text-[#009E49] not-italic text-xs">
                                        &rArr; I = &pi;/4
                                    </p>
                                </div>

                                {/* Options */}
                                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-zinc-300 pt-3 border-t border-zinc-700/60 font-mono">
                                    <div>(A) &pi;/2</div>
                                    <div className="relative inline-flex items-center">
                                        {/* Hand-drawn green circle mark */}
                                        <span className="absolute -inset-1.5 border-2 border-[#009E49] rounded-full transform -rotate-6 scale-110 opacity-90 animate-pulse-glow" />
                                        <span className="text-[#009E49]">(B) &pi;/4</span>
                                    </div>
                                    <div>(C) &pi;</div>
                                    <div>(D) 0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats structured as an Exam Questionnaire */}
                <div className="mt-8 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(251,139,37,0.06)] text-left w-full animate-fade-in-up delay-500">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-800 pb-4 mb-6 gap-2">
                        <span className="text-secondary font-bold text-xs uppercase tracking-widest font-mono">
                            SECTION 1: COACHING CREDENTIALS & KEY STATS
                        </span>
                        <span className="text-xs text-zinc-400 font-semibold font-mono">
                            TIME ALLOWED: 21+ YEARS OF EXCELLENCE
                        </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 md:divide-x md:divide-zinc-800/60">
                        {/* Q1 */}
                        <div className="flex flex-col gap-2">
                            <span className="text-primary font-bold text-lg font-mono">
                                Q1. 21+ Years Experience
                            </span>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Decades of premium teaching experience in India&apos;s elite coaching organizations like ALLEN, AAKASH &amp; BANSAL.
                            </p>
                        </div>
                        {/* Q2 */}
                        <div className="flex flex-col gap-2 md:pl-8">
                            <span className="text-primary font-bold text-lg font-mono">
                                Q2. 1000+ Students Taught
                            </span>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Personalized mentorship leading to multiple top JEE ranks and selections in prestigious IITs and NITs.
                            </p>
                        </div>
                        {/* Q3 */}
                        <div className="flex flex-col gap-2 md:pl-8">
                            <span className="text-primary font-bold text-lg font-mono">
                                Q3. 99% Success Rate
                            </span>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Consistently high success rate of aspirants clearing competitive exams under specialized mentoring.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-8 animate-bounce">
                    <ChevronDown size={28} className="mx-auto text-white/20" />
                </div>
            </div>
        </section>
    );
}
