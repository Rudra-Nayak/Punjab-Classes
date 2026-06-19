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
      gradient: 'from-blue-500 to-indigo-600',
      bg: 'bg-blue-50',
    },
    {
      icon: BookOpen,
      title: 'Expert Faculty',
      description: 'Learn from experienced faculty who have taught at ALLEN, AAKASH & BANSAL — India\'s top institutes.',
      gradient: 'from-emerald-500 to-teal-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Video,
      title: 'Live Interactive Classes',
      description: 'Real-time classes with live interaction, screen sharing, and instant Q&A sessions.',
      gradient: 'from-purple-500 to-violet-600',
      bg: 'bg-purple-50',
    },
    {
      icon: MessageCircle,
      title: 'Doubt Solving Sessions',
      description: 'Dedicated doubt clearing sessions every week to ensure zero confusion and strong foundations.',
      gradient: 'from-rose-500 to-pink-600',
      bg: 'bg-rose-50',
    },
    {
      icon: Clock,
      title: 'Structured Schedule',
      description: 'Well-planned weekly schedule with balanced theory, problem-solving, and revision sessions.',
      gradient: 'from-amber-500 to-orange-600',
      bg: 'bg-amber-50',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Regular tests and performance analysis to track progress and identify improvement areas.',
      gradient: 'from-cyan-500 to-sky-600',
      bg: 'bg-cyan-50',
    },
  ];

  const scrollToEnrollment = () => {
    const element = document.getElementById('enrollment');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-us" className="py-24 px-4 bg-section-light" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-blue">Punjab Classes</span>?
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to crack JEE Mains & Advanced with personalized mentoring and
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
                className={`group glass-card rounded-2xl p-7 card-hover ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-navy-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div
          className={`mt-16 relative overflow-hidden rounded-2xl ${
            inView ? 'animate-fade-in-up delay-700' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800" />
          <div className="absolute inset-0 bg-[url('/students-success.png')] bg-cover bg-center opacity-15" />
          <div className="relative px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                🎯 Limited Seats Available
              </p>
              <p className="text-white/70 max-w-xl">
                Only 15–20 students per batch to ensure quality education and personalized
                attention. Don&apos;t miss your chance to join!
              </p>
            </div>
            <button
              onClick={scrollToEnrollment}
              className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2 group btn-shimmer"
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
