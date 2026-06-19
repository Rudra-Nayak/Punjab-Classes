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
      subtitle: "One of India's premier coaching institutes for JEE & medical exams",
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
    { icon: Award, value: '21+', label: 'Years Teaching', color: 'from-amber-500 to-orange-500' },
    { icon: Briefcase, value: '3', label: 'Top Institutes', color: 'from-blue-500 to-indigo-500' },
    { icon: Users, value: '1000+', label: 'Students Trained', color: 'from-emerald-500 to-teal-500' },
    { icon: GraduationCap, value: '99%', label: 'Success Rate', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="instructor" className="py-24 px-4 bg-section-light" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Your Mentor
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Learn from the <span className="text-gradient-blue">Best</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from an expert with decades of teaching experience at India&apos;s top coaching
            institutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className={`flex justify-center ${inView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-blue-600 rounded-2xl opacity-20" />

              {/* Image Container */}
              <div className="relative w-72 h-80 md:w-80 md:h-[360px] rounded-2xl overflow-hidden shadow-premium-lg">
                <Image
                  src="/gurwinder-sir.png"
                  alt="Gurwinder Singh Sir - Senior JEE Coach at Punjab Classes with 21+ years of experience"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-lg">Gurwinder Singh Sir</p>
                  <p className="text-amber-400 text-sm font-medium">Senior JEE Mathematics Coach</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-amber-500 to-amber-600 text-navy-900 px-5 py-4 rounded-2xl shadow-xl shadow-amber-500/30 animate-pulse-glow">
                <p className="font-bold text-3xl">21+</p>
                <p className="text-xs font-bold uppercase tracking-wider">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className={`${inView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Gurwinder Singh <span className="text-gradient">Sir</span>
            </h3>
            <p className="text-amber-600 font-semibold text-lg mb-8">
              Senior JEE Mathematics Coach
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-5 card-hover group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Credentials List */}
            <div className="space-y-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl hover:bg-amber-50 transition-colors group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                      <CheckCircle2 size={16} className="text-navy-900" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-navy-600 transition-colors">
                      {cred.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-0.5">{cred.subtitle}</p>
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
