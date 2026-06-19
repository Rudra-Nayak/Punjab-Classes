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
    <section id="instructor" className="py-24 px-4 bg-section-light border-t border-[#1B3358]/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#C98A2C] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            YOUR MENTOR
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3358] mb-4 font-heading">
            Learn from the <span className="text-[#B23A2E]">Best</span>
          </h2>
          <div className="w-20 h-1 bg-[#B23A2E] rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[#4A5163] max-w-2xl mx-auto font-sans">
            Learn from an expert with decades of teaching experience at India&apos;s top coaching
            institutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className={`flex justify-center ${inView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-72 h-80 md:w-80 md:h-[360px] rounded-[4px] border-2 border-[#1B3358] overflow-hidden shadow-[6px_6px_0px_#1B3358]">
                <Image
                  src="/generic-teacher.png"
                  alt="Gurwinder Singh Sir - Senior JEE Coach at EliteJEE Classes with 21+ years of experience"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3358]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left bg-gradient-to-t from-[#1b3358]/80 to-transparent">
                  <p className="text-[#F1EDE3] font-bold text-lg font-heading">Gurwinder Singh Sir</p>
                  <p className="text-[#C98A2C] text-sm font-semibold font-mono uppercase tracking-wider">Mathematics Expert</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#B23A2E] text-white border-2 border-[#1B3358] px-5 py-4 rounded-[4px] shadow-[4px_4px_0px_#1B3358] transform rotate-3 select-none text-center">
                <p className="font-bold text-3xl font-mono leading-none">21+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider font-mono">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className={`text-left ${inView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B3358] mb-1 font-heading">
              Gurwinder Singh <span className="text-[#B23A2E]">Sir</span>
            </h3>
            <p className="text-[#C98A2C] font-bold text-lg mb-8 font-mono uppercase tracking-wider">
              Senior JEE Mathematics Coach
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border-2 border-[#1B3358] rounded-[4px] p-5 shadow-[3px_3px_0px_#1B3358] transition-all hover:shadow-[5px_5px_0px_#1B3358] hover:-translate-y-0.5 group"
                  >
                    <div className="w-9 h-9 rounded-[4px] bg-[#1B3358]/5 text-[#1B3358] flex items-center justify-center mb-3 group-hover:bg-[#1B3358] group-hover:text-white transition-all">
                      <Icon size={18} />
                    </div>
                    <p className="text-2xl font-bold text-[#1B3358] font-mono">{stat.value}</p>
                    <p className="text-[#4A5163] text-xs font-semibold uppercase tracking-wider font-mono mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Credentials List */}
            <div className="space-y-4 font-sans">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-[4px] border-2 border-transparent hover:border-[#1B3358] hover:bg-[#FAF8F5] transition-all group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-[4px] bg-[#1B3358] flex items-center justify-center shadow-[2px_2px_0px_#B23A2E] text-white">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B3358] font-heading group-hover:text-[#B23A2E] transition-colors">
                      {cred.title}
                    </h4>
                    <p className="text-[#4A5163] text-sm mt-1">{cred.subtitle}</p>
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
