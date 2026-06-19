'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-gradient">
      {count}
      {suffix}
    </div>
  );
}

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-classroom.png"
          alt="Modern classroom at Punjab Classes coaching institute"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0f2240]/85 to-[#0a1628]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/40" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float delay-500" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-300" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 glass rounded-full animate-fade-in-up">
          <Sparkles size={16} className="text-amber-400" />
          <span className="text-amber-300 font-semibold text-sm tracking-wide">
            Trusted by 1000+ JEE Aspirants Since 2003
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] animate-fade-in-up delay-100">
          Crack JEE.
          <br />
          <span className="text-gradient">Chase Your Dreams.</span>
        </h1>

        {/* Sub text */}
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Online JEE Mains &amp; Advanced coaching by{' '}
          <span className="text-white font-semibold">Ex-Senior Faculty</span> of ALLEN, AAKASH &amp;
          BANSAL — with{' '}
          <span className="text-amber-400 font-semibold">21+ years</span> of transforming
          aspirants into achievers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <button
            onClick={scrollToEnrollment}
            className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 rounded-2xl font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] btn-shimmer"
          >
            📚 Book a Free Demo Class
          </button>
          <button
            onClick={handleWhatsApp}
            className="group px-8 py-4 glass rounded-2xl font-bold text-lg text-white hover:bg-white/15 transition-all flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle size={20} className="text-green-400" />
            WhatsApp Us
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up delay-500">
          <div className="glass rounded-2xl p-6 card-hover">
            <AnimatedCounter target={21} suffix="+" />
            <p className="text-white/60 mt-2 text-sm font-medium tracking-wide uppercase">
              Years of Excellence
            </p>
          </div>
          <div className="glass rounded-2xl p-6 card-hover">
            <AnimatedCounter target={1000} suffix="+" />
            <p className="text-white/60 mt-2 text-sm font-medium tracking-wide uppercase">
              Students Trained
            </p>
          </div>
          <div className="glass rounded-2xl p-6 card-hover">
            <AnimatedCounter target={99} suffix="%" />
            <p className="text-white/60 mt-2 text-sm font-medium tracking-wide uppercase">
              Success Rate
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown size={28} className="mx-auto text-white/30" />
        </div>
      </div>
    </section>
  );
}
