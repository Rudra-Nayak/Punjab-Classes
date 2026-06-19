'use client';

import { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, GraduationCap, Trophy } from 'lucide-react';

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

export default function Testimonials() {
  const { ref, inView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Arjun Patel',
      class: 'Class 12',
      score: '98%ile JEE Mains',
      text: 'Sir\'s teaching methodology is exceptional. His focus on conceptual clarity rather than rote learning helped me score 98%ile in JEE Mains. The small batch size ensured all my doubts were cleared instantly.',
      rating: 5,
      initials: 'AP',
    },
    {
      name: 'Priya Sharma',
      class: 'Class 11',
      score: '82% Marks Class 11',
      text: 'I was struggling with mathematics before joining EliteJEE Classes. Sir\'s personalized approach and the weekly doubt sessions transformed my understanding completely. Highly recommend for serious JEE aspirants!',
      rating: 5,
      initials: 'PS',
    },
    {
      name: 'Karan Singh',
      class: 'Class 12',
      score: '96%ile JEE Mains',
      text: 'The structured curriculum and regular mock tests helped me identify my weak areas and improve systematically. The batch size was perfect — not too crowded, with enough personal interaction with sir.',
      rating: 5,
      initials: 'KS',
    },
    {
      name: 'Neha Verma',
      class: 'Class 11',
      score: 'Class Top Scorer',
      text: 'Best decision to join this institute. Sir explains even the toughest concepts in such a simple way that everything clicks. The evening batch timing was perfect for my schedule. Worth every penny!',
      rating: 5,
      initials: 'NV',
    },
    {
      name: 'Rohit Mehra',
      class: 'Class 12',
      score: 'IIT Bombay CSE',
      text: 'EliteJEE Classes didn\'t just prepare me for JEE — it built my problem-solving mindset. The level of individual attention is unmatched. I credit my IIT Bombay selection to Sir\'s guidance.',
      rating: 5,
      initials: 'RM',
    },
    {
      name: 'Ananya Gupta',
      class: 'Class 12',
      score: '95%ile JEE Mains',
      text: 'The doubt clearing sessions are a game-changer. Unlike other institutes where you feel lost in the crowd, here Sir personally ensures every student understands every concept before moving on.',
      rating: 5,
      initials: 'AG',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-[#1B3358] text-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#C98A2C] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            STUDENT SUCCESS STORIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1EDE3] mb-4 font-heading">
            What Our <span className="text-[#B23A2E]">Students</span> Say
          </h2>
          <div className="w-20 h-1 bg-[#B23A2E] rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-sans">
            Hear from students who have transformed their JEE preparation with EliteJEE Classes
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[340px] snap-start bg-white text-[#1B3358] border-2 border-white shadow-[4px_4px_0px_#B23A2E] rounded-[4px] p-6 flex flex-col justify-between transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#B23A2E] ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div>
                  {/* Quote & Stars */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="text-[#B23A2E]/20" size={28} />
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={12} fill="#C98A2C" stroke="#C98A2C" />
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-[#4A5163] leading-relaxed text-sm mb-6 font-sans">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                {/* Student Info */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1B3358]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[4px] bg-[#1B3358]/10 text-[#1B3358] flex items-center justify-center font-bold text-sm font-heading border border-[#1B3358]/20">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-[#1B3358] text-xs font-heading">{testimonial.name}</p>
                      <p className="text-[#4A5163] text-[10px] font-mono">{testimonial.class}</p>
                    </div>
                  </div>
                  {/* Circle-graded style score */}
                  <div className="relative border border-[#B23A2E] px-2 py-0.5 rounded-[4px] text-[10px] font-bold text-[#B23A2E] uppercase font-mono tracking-tight transform rotate-3 shadow-[1px_1px_0px_#B23A2E]">
                    {testimonial.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified Score Report / Ledger Card */}
        <div className={`mt-16 bg-white border-2 border-white rounded-[4px] p-6 sm:p-8 shadow-[6px_6px_0px_#B23A2E] text-[#1B3358] max-w-4xl mx-auto ${
          inView ? 'animate-fade-in-up delay-500' : 'opacity-0'
        }`}>
          <div className="border-b border-[#1B3358]/20 pb-3 mb-6 flex justify-between items-center text-xs font-bold font-mono">
            <span>OFFICIAL PERFORMANCE REPORT</span>
            <span className="text-[#C98A2C]">ACCREDITED: 2025/2026</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center md:divide-x-2 md:divide-[#1B3358]/15">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-[4px] bg-[#1B3358]/5 flex items-center justify-center text-[#B23A2E]">
                <GraduationCap size={20} />
              </div>
              <p className="text-3xl font-bold font-mono text-[#1B3358]">1,000+</p>
              <p className="text-[#4A5163] text-xs uppercase font-bold tracking-wider font-mono">Successful Alumni</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 md:pl-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#1B3358]/5 flex items-center justify-center text-[#B23A2E]">
                <Trophy size={20} />
              </div>
              <p className="text-3xl font-bold font-mono text-[#1B3358]">99%</p>
              <p className="text-[#4A5163] text-xs uppercase font-bold tracking-wider font-mono">Exam Clear Rate</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 md:pl-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#1B3358]/5 flex items-center justify-center text-[#B23A2E]">
                <Star size={20} />
              </div>
              <p className="text-3xl font-bold font-mono text-[#1B3358]">4.9/5</p>
              <p className="text-[#4A5163] text-xs uppercase font-bold tracking-wider font-mono">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
