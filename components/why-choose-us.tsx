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
    <section id="why-us" className="py-24 px-4 bg-section-light border-t border-[#1B3358]/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#C98A2C] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            OUR ADVANTAGE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3358] mb-4 font-heading">
            Why Choose <span className="text-[#B23A2E]">Punjab Classes</span>?
          </h2>
          <div className="w-20 h-1 bg-[#B23A2E] rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[#4A5163] max-w-2xl mx-auto font-sans">
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
                className={`group exam-card rounded-[4px] p-6 transition-all duration-300 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Icon Container */}
                <div
                  className="w-12 h-12 rounded-[4px] bg-[#1B3358]/10 text-[#1B3358] flex items-center justify-center mb-5 group-hover:bg-[#1B3358] group-hover:text-[#F1EDE3] transition-all duration-300"
                >
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#1B3358] mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-[#4A5163] text-sm leading-relaxed font-sans">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div
          className={`mt-16 relative overflow-hidden rounded-[4px] border-2 border-[#1B3358] bg-[#1B3358] text-[#F1EDE3] shadow-[6px_6px_0px_#B23A2E] ${
            inView ? 'animate-fade-in-up delay-700' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-[url('/students-success.png')] bg-cover bg-center opacity-5 pointer-events-none" />
          <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#F1EDE3] mb-2 font-heading">
                Limited Seats Available
              </p>
              <p className="text-[#F1EDE3]/80 max-w-xl text-sm font-sans">
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
