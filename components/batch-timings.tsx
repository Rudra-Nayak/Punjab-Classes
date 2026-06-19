'use client';

import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, Users, Zap } from 'lucide-react';

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

export default function BatchTimings() {
  const [selectedClass, setSelectedClass] = useState<'11' | '12'>('11');
  const { ref, inView } = useInView();

  const batches = [
    {
      name: 'Morning Batch',
      time: '7:00 AM – 8:20 AM',
      days: 'Mon, Wed, Fri',
      seats: 18,
      total: 20,
      featured: false,
      emoji: '🌅',
    },
    {
      name: 'Afternoon Batch',
      time: '4:00 PM – 5:20 PM',
      days: 'Mon, Wed, Fri',
      seats: 20,
      total: 20,
      featured: false,
      emoji: '☀️',
    },
    {
      name: 'Evening Batch',
      time: '5:40 PM – 7:00 PM',
      days: 'Mon, Wed, Fri',
      seats: 15,
      total: 20,
      featured: true,
      emoji: '🌆',
    },
    {
      name: 'Late Evening',
      time: '7:30 PM – 8:50 PM',
      days: 'Mon, Wed, Fri',
      seats: 19,
      total: 20,
      featured: false,
      emoji: '🌙',
    },
  ];

  const enrollmentLink = () => {
    const element = document.getElementById('enrollment');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="batches" className="py-24 px-4 bg-section-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Batch <span className="text-gradient-blue">Timings</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Classes held 3 days a week — Choose your preferred time slot
          </p>
        </div>

        {/* Class Selection Toggle */}
        <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-premium border border-border">
            {(['11', '12'] as const).map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 ${
                  selectedClass === cls
                    ? 'bg-gradient-to-r from-navy-800 to-navy-700 text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gray-50'
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Batches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {batches.map((batch, index) => {
            const seatPercentage = (batch.seats / batch.total) * 100;
            const seatsLeft = batch.total - batch.seats;
            const isFull = seatsLeft === 0;

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden card-hover ${
                  batch.featured
                    ? 'ring-2 ring-amber-400 shadow-xl shadow-amber-500/10'
                    : 'shadow-premium'
                } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Featured Badge */}
                {batch.featured && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 px-4 py-1.5 rounded-bl-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                      <Zap size={12} /> Most Popular
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className={`p-6 ${batch.featured ? 'bg-gradient-to-br from-navy-800 to-navy-900 text-white' : 'bg-white'}`}>
                  {/* Header */}
                  <div className="text-3xl mb-3">{batch.emoji}</div>
                  <h3 className={`text-xl font-bold mb-5 ${batch.featured ? 'text-white' : 'text-foreground'}`}>
                    {batch.name}
                  </h3>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        batch.featured ? 'bg-amber-500/20' : 'bg-navy-50'
                      }`}>
                        <Clock size={18} className={batch.featured ? 'text-amber-400' : 'text-navy-600'} />
                      </div>
                      <div>
                        <p className={`text-xs ${batch.featured ? 'text-white/60' : 'text-muted-foreground'}`}>
                          Timing
                        </p>
                        <p className={`font-bold text-sm ${batch.featured ? 'text-white' : 'text-foreground'}`}>
                          {batch.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        batch.featured ? 'bg-amber-500/20' : 'bg-navy-50'
                      }`}>
                        <Calendar size={18} className={batch.featured ? 'text-amber-400' : 'text-navy-600'} />
                      </div>
                      <div>
                        <p className={`text-xs ${batch.featured ? 'text-white/60' : 'text-muted-foreground'}`}>
                          Days
                        </p>
                        <p className={`font-bold text-sm ${batch.featured ? 'text-white' : 'text-foreground'}`}>
                          {batch.days}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Seat Progress */}
                  <div className={`p-3 rounded-xl mb-5 ${batch.featured ? 'bg-white/10' : 'bg-gray-50'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs font-medium ${batch.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                        <Users size={12} className="inline mr-1" />
                        Seats Filled
                      </span>
                      <span className={`text-xs font-bold ${
                        isFull
                          ? 'text-red-400'
                          : batch.featured ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                        {batch.seats}/{batch.total}
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${batch.featured ? 'bg-white/10' : 'bg-gray-200'}`}>
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          isFull
                            ? 'bg-red-500'
                            : seatPercentage > 80
                            ? 'bg-amber-500'
                            : 'bg-emerald-500'
                        }`}
                        style={{ width: `${seatPercentage}%` }}
                      />
                    </div>
                    {isFull && (
                      <p className="text-red-400 text-xs font-semibold mt-1.5">⚠️ Batch Full — Join Waitlist</p>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={enrollmentLink}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${
                      batch.featured
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20'
                        : 'bg-gradient-to-r from-navy-800 to-navy-700 text-white hover:from-navy-700 hover:to-navy-600 shadow-md'
                    }`}
                  >
                    {isFull ? 'Join Waitlist' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className={`glass-card rounded-2xl p-8 text-center border-l-4 border-amber-400 ${
          inView ? 'animate-fade-in-up delay-600' : 'opacity-0'
        }`}>
          <p className="text-lg text-foreground mb-1">
            💡 <span className="font-bold">All batches</span> cover the complete Class{' '}
            {selectedClass} JEE curriculum
          </p>
          <p className="text-muted-foreground">
            Classes held on <span className="font-bold text-foreground">Monday, Wednesday, and Friday</span> every
            week • 80 min/class • Weekly doubt sessions included
          </p>
        </div>
      </div>
    </section>
  );
}
