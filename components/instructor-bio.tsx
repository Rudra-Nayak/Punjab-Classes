'use client';

import { useRef, useEffect, useState } from 'react';
import { Award, GraduationCap, Briefcase, Users, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function InstructorBio() {
  const { ref, inView } = useInView();

  const credentials = [
    {
      title: 'Ex-Senior Faculty at ALLEN',
      subtitle: "One of India's premier coaching institutes for JEE & competitive exams",
    },
    {
      title: 'Ex-Senior Faculty at AAKASH',
      subtitle: 'Trusted by millions of students across India for competitive exam prep',
    },
    {
      title: 'Ex-Senior Faculty at BANSAL',
      subtitle: 'Known for advanced problem-solving methods and foundational strength',
    },
  ];

  const stats = [
    { icon: Award, value: '21+', label: 'Years Teaching' },
    { icon: Briefcase, value: '3', label: 'Top Institutes' },
    { icon: Users, value: '1000+', label: 'Students Trained' },
    { icon: GraduationCap, value: '99%', label: 'Success Rate' },
  ];

  return (
    <section id="instructor" className="py-24 px-4 bg-grid-paper-orange border-t border-zinc-800/80" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-3 font-mono flex items-center justify-center gap-2">
            ✦ YOUR MENTOR ✦
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Learn from the <span className="text-primary">Best</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-sans">
            Learn from an expert with decades of teaching experience at India&apos;s top coaching
            institutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className={`flex justify-center ${inView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-72 h-80 md:w-80 md:h-[360px] rounded-2xl border border-zinc-850 overflow-hidden shadow-[0_20px_50px_rgba(251,139,37,0.08)]">
                <Image
                  src="/gurwinder-sir.png"
                  alt="Gurwinder Singh Sir - Senior JEE Coach at Punjab Classes with 21+ years of experience"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-bold text-lg font-heading">Gurwinder Singh Sir</p>
                  <p className="text-brand-green-light text-sm font-semibold font-mono uppercase tracking-wider">Mathematics Expert</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -right-5 bg-brand-green text-white border border-brand-green/20 px-5 py-4 rounded-xl shadow-[0_8px_25px_rgba(1,151,64,0.3)] transform rotate-3 select-none text-center">
                <p className="font-bold text-3xl font-mono leading-none">21+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider font-mono">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className={`text-left ${inView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 font-heading">
              Gurwinder Singh <span className="text-brand-orange">Sir</span>
            </h3>
            <p className="text-brand-green-light font-bold text-lg mb-8 font-mono uppercase tracking-wider">
              Senior JEE Mathematics Coach
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-xl p-5 shadow-[0_8px_25px_rgba(251,139,37,0.04)] transition-all hover:border-brand-orange/20 hover:-translate-y-0.5 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 text-brand-green-light flex items-center justify-center mb-3 group-hover:bg-brand-green group-hover:text-white transition-all">
                      <Icon size={18} />
                    </div>
                    <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
                    <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider font-mono mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Credentials List */}
            <div className="space-y-4 font-sans">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-zinc-800/60 hover:bg-zinc-900/30 transition-all group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 border border-brand-green/25 flex items-center justify-center text-brand-green-light">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-heading group-hover:text-brand-orange transition-colors">
                      {cred.title}
                    </h4>
                    <p className="text-zinc-400 text-sm mt-1">{cred.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
