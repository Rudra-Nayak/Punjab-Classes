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
    <section id="batches" className="py-24 px-4 bg-section-cream border-t border-[#1B3358]/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#C98A2C] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            SCHEDULE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3358] mb-4 font-heading">
            Batch <span className="text-[#B23A2E]">Timings</span>
          </h2>
          <div className="w-20 h-1 bg-[#B23A2E] rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[#4A5163] max-w-2xl mx-auto font-sans">
            Classes held 3 days a week — Choose your preferred time slot
          </p>
        </div>

        {/* Class Selection Toggle */}
        <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="inline-flex bg-white border-2 border-[#1B3358] rounded-[4px] p-1.5 shadow-[4px_4px_0px_#1B3358]">
            {(['11', '12'] as const).map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-8 py-2.5 rounded-[2px] font-bold text-sm transition-all duration-300 font-heading ${
                  selectedClass === cls
                    ? 'bg-[#1B3358] text-[#F1EDE3] shadow-md'
                    : 'text-[#1B3358] hover:text-[#B23A2E] hover:bg-[#1B3358]/5'
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
                className={`relative rounded-[4px] overflow-hidden border-2 border-[#1B3358] transition-all duration-300 ${
                  batch.featured
                    ? 'ring-2 ring-[#B23A2E] shadow-[6px_6px_0px_#B23A2E]'
                    : 'shadow-[4px_4px_0px_#1B3358] hover:shadow-[6px_6px_0px_#1B3358] hover:-translate-y-1'
                } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Featured Tag */}
                {batch.featured && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-[#B23A2E] text-white border-b-2 border-l-2 border-[#1B3358] px-3 py-1 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 font-mono">
                      <Zap size={10} /> Popular
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className={`p-6 h-full flex flex-col justify-between ${
                  batch.featured ? 'bg-[#1B3358] text-white' : 'bg-white text-[#1B3358]'
                }`}>
                  <div>
                    {/* Header Icon */}
                    <div className={`w-10 h-10 rounded-[4px] flex items-center justify-center mb-5 ${
                      batch.featured ? 'bg-[#F1EDE3]/10 text-white' : 'bg-[#1B3358]/10 text-[#1B3358]'
                    }`}>
                      <batch.icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 font-heading">
                      {batch.name}
                    </h3>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Clock size={16} className={batch.featured ? 'text-[#C98A2C]' : 'text-[#B23A2E]'} />
                        <div>
                          <p className={`text-[10px] uppercase tracking-wider font-mono ${batch.featured ? 'text-white/60' : 'text-[#4A5163]/60'}`}>
                            TIMING
                          </p>
                          <p className="font-bold text-xs font-mono">
                            {batch.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar size={16} className={batch.featured ? 'text-[#C98A2C]' : 'text-[#B23A2E]'} />
                        <div>
                          <p className={`text-[10px] uppercase tracking-wider font-mono ${batch.featured ? 'text-white/60' : 'text-[#4A5163]/60'}`}>
                            DAYS
                          </p>
                          <p className="font-bold text-xs font-mono">
                            {batch.days}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seat Progress */}
                  <div>
                    <div className={`p-3 rounded-[4px] mb-5 border ${
                      batch.featured ? 'bg-white/5 border-white/10' : 'bg-[#FAF8F5] border-[#1B3358]/10'
                    }`}>
                      <div className="flex justify-between items-center mb-2 font-mono text-[10px]">
                        <span className="flex items-center gap-1 font-semibold">
                          <Users size={10} />
                          SEATS FILLED
                        </span>
                        <span className={`font-bold ${isFull ? 'text-red-400' : batch.featured ? 'text-white' : 'text-[#1B3358]'}`}>
                          {batch.seats}/{batch.total}
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-[2px] ${batch.featured ? 'bg-white/10' : 'bg-[#1B3358]/10'}`}>
                        <div
                          className={`h-full rounded-[2px] transition-all duration-1000 ${
                            isFull
                              ? 'bg-red-500'
                              : batch.featured ? 'bg-[#C98A2C]' : 'bg-[#B23A2E]'
                          }`}
                          style={{ width: `${seatPercentage}%` }}
                        />
                      </div>
                      {isFull && (
                        <p className="text-red-400 text-[10px] font-bold mt-1.5 font-mono uppercase">Batch Full</p>
                      )}
                    </div>

                    {/* CTA */}
                    {batch.featured ? (
                      <button
                        onClick={enrollmentLink}
                        className="w-full py-2.5 bg-[#B23A2E] text-white border-2 border-white rounded-[4px] font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#C98A2C] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#C98A2C] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                      >
                        {isFull ? 'Join Waitlist' : 'Enroll Now'}
                      </button>
                    ) : (
                      <button
                        onClick={enrollmentLink}
                        className="w-full py-2.5 btn-stamp text-xs uppercase tracking-wider"
                      >
                        {isFull ? 'Join Waitlist' : 'Enroll Now'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box / Notice */}
        <div className={`bg-white border-2 border-dashed border-[#1B3358] rounded-[4px] p-6 text-center max-w-4xl mx-auto shadow-sm ${
          inView ? 'animate-fade-in-up delay-600' : 'opacity-0'
        }`}>
          <p className="text-base text-[#1B3358] mb-1 font-heading">
            <span className="text-[#B23A2E] font-bold font-mono">IMPORTANT NOTICE:</span> All batches cover the complete Class {selectedClass} JEE curriculum
          </p>
          <p className="text-sm text-[#4A5163] font-sans">
            Classes are held on <span className="font-bold text-[#1B3358]">Monday, Wednesday, and Friday</span> every
            week &bull; 80 min/class &bull; Weekly doubt clearing sessions included.
          </p>
        </div>
      </div>
    </section>
  );
}
