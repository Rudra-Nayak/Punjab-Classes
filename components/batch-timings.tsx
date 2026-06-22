'use client';

import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, Users, Zap, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

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
      time: '07:00 AM – 08:20 AM',
      days: 'Mon, Wed, Fri',
      seats: 18,
      total: 20,
      featured: false,
      icon: Sunrise,
    },
    {
      name: 'Afternoon Batch',
      time: '04:00 PM – 05:20 PM',
      days: 'Mon, Wed, Fri',
      seats: 20,
      total: 20,
      featured: false,
      icon: Sun,
    },
    {
      name: 'Evening Batch',
      time: '05:40 PM – 07:00 PM',
      days: 'Mon, Wed, Fri',
      seats: 15,
      total: 20,
      featured: true,
      icon: Sunset,
    },
    {
      name: 'Late Evening',
      time: '07:30 PM – 08:50 PM',
      days: 'Mon, Wed, Fri',
      seats: 19,
      total: 20,
      featured: false,
      icon: Moon,
    },
  ];

  const enrollmentLink = () => {
    const element = document.getElementById('enrollment');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="batches" className="py-24 px-4 bg-grid-paper-orange border-t border-zinc-800/80" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-3 font-mono flex items-center justify-center gap-2">
            ✦ SCHEDULE ✦
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Batch <span className="text-primary">Timings</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-sans">
            Classes held 3 days a week — Choose your preferred time slot
          </p>
        </div>

        {/* Class Selection Toggle */}
        <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="inline-flex bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            {(['11', '12'] as const).map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 font-heading ${
                  selectedClass === cls
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                    : 'text-zinc-400 hover:text-brand-green-light hover:bg-white/5'
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Batches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {batches.map((batch, index) => {
            const seatPercentage = (batch.seats / batch.total) * 100;
            const seatsLeft = batch.total - batch.seats;
            const isFull = seatsLeft === 0;

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 bg-zinc-900/40 backdrop-blur-md ${
                  batch.featured
                    ? 'border-brand-orange/40 ring-1 ring-brand-orange/20 shadow-[0_15px_40px_rgba(251,139,37,0.15)] bg-zinc-900/60'
                    : 'border-zinc-800/80 shadow-none hover:border-brand-orange/30 hover:-translate-y-1 hover:bg-zinc-900/50'
                } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Featured Tag */}
                {batch.featured && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-brand-green text-white border-b border-l border-brand-green/20 px-3 py-1 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 font-mono rounded-bl-lg">
                      <Zap size={10} /> Popular
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    {/* Header Icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${
                      batch.featured ? 'bg-brand-green/10 border border-brand-green/20 text-brand-green-light' : 'bg-zinc-900 border border-zinc-800 text-brand-orange'
                    }`}>
                      <batch.icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 font-heading">
                      {batch.name}
                    </h3>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Clock size={16} className={batch.featured ? 'text-brand-green-light' : 'text-brand-orange'} />
                        <div>
                          <p className="text-[10px] uppercase tracking-wider font-mono text-zinc-500">
                            TIMING
                          </p>
                          <p className="font-bold text-xs font-mono text-zinc-300">
                            {batch.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar size={16} className={batch.featured ? 'text-brand-green-light' : 'text-brand-orange'} />
                        <div>
                          <p className="text-[10px] uppercase tracking-wider font-mono text-zinc-500">
                            DAYS
                          </p>
                          <p className="font-bold text-xs font-mono text-zinc-300">
                            {batch.days}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seat Progress */}
                  <div>
                    <div className="p-3 rounded-xl mb-5 border bg-zinc-950/50 border-zinc-900/80">
                      <div className="flex justify-between items-center mb-2 font-mono text-[10px]">
                        <span className="flex items-center gap-1 font-semibold text-zinc-400">
                          <Users size={10} />
                          SEATS FILLED
                        </span>
                        <span className={`font-bold ${isFull ? 'text-red-450' : 'text-zinc-300'}`}>
                          {batch.seats}/{batch.total}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-[2px] bg-zinc-800">
                        <div
                          className={`h-full rounded-[2px] transition-all duration-1000 ${
                            isFull
                              ? 'bg-red-500'
                              : batch.featured ? 'bg-brand-green' : 'bg-brand-orange'
                          }`}
                          style={{ width: `${seatPercentage}%` }}
                        />
                      </div>
                      {isFull && (
                        <p className="text-red-450 text-[10px] font-bold mt-1.5 font-mono uppercase">Batch Full</p>
                      )}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={enrollmentLink}
                      className="w-full py-2.5 btn-stamp text-xs uppercase tracking-wider"
                    >
                      {isFull ? 'Join Waitlist' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box / Notice */}
        <div className={`bg-zinc-900/30 backdrop-blur-md border border-dashed border-brand-orange/40 rounded-2xl p-6 text-center max-w-4xl mx-auto shadow-[0_15px_30px_rgba(0,0,0,0.2)] ${
          inView ? 'animate-fade-in-up delay-600' : 'opacity-0'
        }`}>
          <p className="text-base text-white mb-1 font-heading">
            <span className="text-brand-green-light font-bold font-mono">IMPORTANT NOTICE:</span> All batches cover the complete Class {selectedClass} JEE curriculum
          </p>
          <p className="text-sm text-zinc-400 font-sans">
            Classes are held on <span className="font-bold text-brand-orange">Monday, Wednesday, and Friday</span> every week &bull; 80 min/class &bull; Weekly doubt clearing sessions included.
          </p>
        </div>
      </div>
    </section>
  );
}
