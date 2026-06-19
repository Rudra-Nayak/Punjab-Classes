'use client';

import { MessageCircle, ChevronDown, Award } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20free%20demo%20class',
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
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border-2 border-[#1B3358] rounded-[4px] bg-[#FAF8F5] shadow-[2px_2px_0px_#1B3358] animate-fade-in-up">
              <Award size={16} className="text-[#C98A2C]" />
              <span className="text-[#1B3358] font-bold text-xs uppercase tracking-wider font-mono">
                Trusted Since 2003 • 1000+ JEE Aspirants
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1B3358] mb-6 leading-[1.15] font-heading animate-fade-in-up delay-100">
              Crack JEE.
              <br />
              <span className="text-[#B23A2E]">Chase Your Dreams.</span>
            </h1>

            {/* Sub text */}
            <p className="text-lg md:text-xl text-[#4A5163] mb-8 leading-relaxed font-sans max-w-xl animate-fade-in-up delay-200">
              Online JEE Mains &amp; Advanced coaching by{' '}
              <span className="text-[#1B3358] font-bold">Ex-Senior Faculty</span> of ALLEN, AAKASH &amp;
              BANSAL — with{' '}
              <span className="text-[#C98A2C] font-bold font-mono">21+ years</span> of transforming
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
                <MessageCircle size={20} className="text-[#25D366] fill-[#25D366]/10" />
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Graded Answer Sheet Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up delay-400">
            {/* Interactive Graded Paper Card */}
            <div className="graded-card w-full max-w-[420px] p-6 text-left font-mono relative overflow-hidden select-none bg-grid-paper-light">
              {/* Margin line to simulate real exam notebook */}
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-400/40" />
              
              <div className="pl-4">
                {/* Top header */}
                <div className="border-b border-[#1B3358]/20 pb-3 mb-4 flex justify-between items-center text-[10px] text-[#4A5163] font-bold">
                  <span>JEE (ADVANCED) EXAM SHEET</span>
                  <span className="text-[#B23A2E] font-bold text-xs tracking-tight border border-[#B23A2E] px-2 py-0.5 rounded-[3px] transform rotate-3 bg-[#FAF8F5] shadow-[1px_1px_0px_#B23A2E]">
                    ✓ CORRECT (+4)
                  </span>
                </div>
                
                {/* Question */}
                <div className="mb-4">
                  <p className="font-bold text-[#1B3358] text-xs uppercase tracking-wide mb-1 font-heading">
                    Q.12 [Single Choice Option]
                  </p>
                  <p className="text-sm font-bold text-[#1B3358] leading-relaxed">
                    Evaluate the following definite integral:
                    <span className="block my-3 text-base text-center bg-[#1B3358]/5 py-2 rounded-[4px] font-mono font-semibold">
                      I = &int;<sub>0</sub><sup>&pi;/2</sup> dx / (1 + tan x)
                    </span>
                  </p>
                </div>

                {/* Candidate Workings */}
                <div className="space-y-2 mb-4 pl-3 border-l border-amber-600/30 text-[11px] text-[#4A5163] font-sans italic">
                  <p className="font-bold text-[10px] text-[#C98A2C] font-mono not-italic uppercase tracking-widest mb-1">
                    Candidate Working:
                  </p>
                  <p>1. Rewrite using sin(x) and cos(x):</p>
                  <p className="pl-4 font-mono font-semibold not-italic text-xs text-[#1B3358]">
                    I = &int;<sub>0</sub><sup>&pi;/2</sup> cos(x) / (cos(x) + sin(x)) dx &nbsp; -- (1)
                  </p>
                  <p>2. Apply integral property &int;<sub>a</sub><sup>b</sup> f(x)dx = &int;<sub>a</sub><sup>b</sup> f(a+b-x)dx:</p>
                  <p className="pl-4 font-mono font-semibold not-italic text-xs text-[#1B3358]">
                    I = &int;<sub>0</sub><sup>&pi;/2</sup> sin(x) / (sin(x) + cos(x)) dx &nbsp; -- (2)
                  </p>
                  <p>3. Add equations (1) and (2):</p>
                  <p className="pl-4 font-mono font-semibold not-italic text-xs text-[#1B3358]">
                    2I = &int;<sub>0</sub><sup>&pi;/2</sup> 1 &middot; dx = [x]<sub>0</sub><sup>&pi;/2</sup> = &pi;/2
                  </p>
                  <p className="pl-4 font-bold text-[#B23A2E] not-italic text-xs">
                    &rArr; I = &pi;/4
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-[#1B3358] pt-3 border-t border-[#1B3358]/10 font-mono">
                  <div>(A) &pi;/2</div>
                  <div className="relative inline-flex items-center">
                    {/* Hand-drawn red circle mark */}
                    <span className="absolute -inset-1.5 border-2 border-[#B23A2E] rounded-full transform -rotate-6 scale-110 opacity-90 animate-pulse-glow" />
                    <span className="text-[#B23A2E]">(B) &pi;/4</span>
                  </div>
                  <div>(C) &pi;</div>
                  <div>(D) 0</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats structured as an Exam Questionnaire */}
        <div className="mt-8 bg-white border-2 border-[#1B3358] rounded-[4px] p-6 sm:p-8 shadow-[6px_6px_0px_#1B3358] text-left w-full animate-fade-in-up delay-500">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-[#1B3358]/20 pb-4 mb-6 gap-2">
            <span className="text-[#C98A2C] font-bold text-xs uppercase tracking-widest font-mono">
              SECTION 1: COACHING CREDENTIALS & KEY STATS
            </span>
            <span className="text-xs text-[#4A5163] font-semibold font-mono">
              TIME ALLOWED: 21+ YEARS OF EXCELLENCE
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:divide-x-2 md:divide-[#1B3358]/20">
            {/* Q1 */}
            <div className="flex flex-col gap-2">
              <span className="text-[#B23A2E] font-bold text-lg font-mono">
                Q1. 21+ Years Experience
              </span>
              <p className="text-[#4A5163] text-sm leading-relaxed">
                Decades of premium teaching experience in India&apos;s elite coaching organizations like ALLEN, AAKASH &amp; BANSAL.
              </p>
            </div>
            {/* Q2 */}
            <div className="flex flex-col gap-2 md:pl-8">
              <span className="text-[#B23A2E] font-bold text-lg font-mono">
                Q2. 1000+ Students Taught
              </span>
              <p className="text-[#4A5163] text-sm leading-relaxed">
                Personalized mentorship leading to multiple top JEE ranks and selections in prestigious IITs and NITs.
              </p>
            </div>
            {/* Q3 */}
            <div className="flex flex-col gap-2 md:pl-8">
              <span className="text-[#B23A2E] font-bold text-lg font-mono">
                Q3. 99% Success Rate
              </span>
              <p className="text-[#4A5163] text-sm leading-relaxed">
                Consistently high success rate of aspirants clearing competitive exams under specialized mentoring.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <ChevronDown size={28} className="mx-auto text-[#1B3358]/30" />
        </div>
      </div>
    </section>
  );
}
