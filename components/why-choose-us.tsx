'use client';

import { useRef, useEffect, useState } from 'react';
import { Users, MessageCircle, BookOpen, Clock, Video, BarChart3, ArrowRight } from 'lucide-react';

function useInView(threshold = 0.15) {
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

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  const features = [
    {
      icon: Users,
      title: 'Small Batch Size',
      description: 'Only 15–20 students per batch for personalized attention and individual doubt solving.',
    },
    {
      icon: BookOpen,
      title: 'Expert Faculty',
      description: 'Learn from experienced faculty who have taught at ALLEN, AAKASH & BANSAL — India\'s top institutes.',
    },
    {
      icon: Video,
      title: 'Live Interactive Classes',
      description: 'Real-time classes with live interaction, screen sharing, and instant Q&A sessions.',
    },
    {
      icon: MessageCircle,
      title: 'Doubt Solving Sessions',
      description: 'Dedicated doubt clearing sessions every week to ensure zero confusion and strong foundations.',
    },
    {
      icon: Clock,
      title: 'Structured Schedule',
      description: 'Well-planned weekly schedule with balanced theory, problem-solving, and revision sessions.',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Regular tests and performance analysis to track progress and identify improvement areas.',
    },
  ];

  const scrollToEnrollment = () => {
    const element = document.getElementById('enrollment');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-us" className="py-24 px-4 bg-grid-paper-green border-t border-zinc-800/80" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-3 font-mono flex items-center justify-center gap-2">
            ✦ OUR ADVANTAGE ✦
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Why Choose <span className="text-primary font-bold">Punjab Classes</span>?
          </h2>
          <div className="w-20 h-1 bg-primary rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-sans">
            Everything you need to crack JEE Mains &amp; Advanced with personalized mentoring and
            expert guidance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group border border-white/5 rounded-2xl bg-zinc-950/40 p-6 transition-all duration-300 hover:border-zinc-800/80 hover:bg-zinc-900/30 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Icon Container */}
                <div
                  className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800/80 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-black transition-all duration-300 font-bold"
                >
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div
          className={`mt-16 relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-md text-white shadow-[0_20px_50px_rgba(1,151,64,0.07)] ${
            inView ? 'animate-fade-in-up delay-700' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-[url('/students-success.png')] bg-cover bg-center opacity-5 pointer-events-none" />
          <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">
                Limited Seats Available
              </p>
              <p className="text-zinc-400 max-w-xl text-sm font-sans">
                Only <span className="font-bold text-white">15–20 students</span> per batch to ensure quality education and personalized
                attention. Don&apos;t miss your chance to join!
              </p>
            </div>
            <button
              onClick={scrollToEnrollment}
              className="px-8 py-4 btn-stamp text-lg flex items-center gap-2 group whitespace-nowrap"
            >
              Enroll Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
