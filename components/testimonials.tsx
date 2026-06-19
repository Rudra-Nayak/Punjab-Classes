'use client';

import { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Arjun Patel',
      class: 'Class 12',
      score: '98%ile in JEE Mains',
      text: 'Gurwinder sir\'s teaching methodology is exceptional. His focus on conceptual clarity rather than rote learning helped me score 98%ile in JEE Mains. The small batch size ensured all my doubts were cleared instantly.',
      rating: 5,
      initials: 'AP',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'Priya Sharma',
      class: 'Class 11',
      score: 'Improved from 45% to 82%',
      text: 'I was struggling with mathematics before joining Punjab Classes. Sir\'s personalized approach and the weekly doubt sessions transformed my understanding completely. Highly recommend for serious JEE aspirants!',
      rating: 5,
      initials: 'PS',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      name: 'Karan Singh',
      class: 'Class 12',
      score: '96%ile in JEE Mains',
      text: 'The structured curriculum and regular mock tests helped me identify my weak areas and improve systematically. The batch size was perfect — not too crowded, with enough personal interaction with sir.',
      rating: 5,
      initials: 'KS',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'Neha Verma',
      class: 'Class 11',
      score: 'Consistent Top Scorer',
      text: 'Best decision to join this institute. Sir explains even the toughest concepts in such a simple way that everything clicks. The evening batch timing was perfect for my schedule. Worth every penny!',
      rating: 5,
      initials: 'NV',
      gradient: 'from-purple-500 to-violet-600',
    },
    {
      name: 'Rohit Mehra',
      class: 'Class 12',
      score: 'IIT Bombay CSE',
      text: 'Punjab Classes didn\'t just prepare me for JEE — it built my problem-solving mindset. The level of individual attention is unmatched. I credit my IIT Bombay selection to Sir\'s guidance.',
      rating: 5,
      initials: 'RM',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Ananya Gupta',
      class: 'Class 12',
      score: '95%ile in JEE Mains',
      text: 'The doubt clearing sessions are a game-changer. Unlike other institutes where you feel lost in the crowd, here Sir personally ensures every student understands every concept before moving on.',
      rating: 5,
      initials: 'AG',
      gradient: 'from-cyan-500 to-sky-600',
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
    <section id="testimonials" className="py-24 px-4 bg-section-navy" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Student Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-gradient">Students</span> Say
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Hear from students who have transformed their JEE preparation with Punjab Classes
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hidden md:flex"
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
                className={`flex-shrink-0 w-[340px] snap-start glass rounded-2xl p-7 flex flex-col card-hover ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Quote & Stars */}
                <div className="flex justify-between items-start mb-5">
                  <Quote className="text-amber-400/40" size={32} />
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="#fbbf24" stroke="#fbbf24" />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="text-white/75 leading-relaxed flex-grow text-sm mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-amber-400 text-xs font-medium">{testimonial.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className={`mt-16 grid md:grid-cols-3 gap-6 ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          {[
            { value: '1000+', label: 'Students Trained Successfully', icon: '🎓' },
            { value: '99%', label: 'Students Clear JEE Exams', icon: '🏆' },
            { value: '4.9/5', label: 'Average Rating by Students', icon: '⭐' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-8 text-center card-hover">
              <p className="text-3xl mb-3">{stat.icon}</p>
              <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
