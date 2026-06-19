'use client';

import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function BatchTimings() {
  const [selectedClass, setSelectedClass] = useState<'11' | '12'>('11');

  const batches = [
    {
      name: 'Morning Batch',
      time: '7:00 AM - 8:20 AM',
      days: 'Mon, Wed, Fri',
      seats: '18/20',
      featured: false,
    },
    {
      name: 'Afternoon Batch',
      time: '4:00 PM - 5:20 PM',
      days: 'Mon, Wed, Fri',
      seats: '20/20',
      featured: false,
    },
    {
      name: 'Evening Batch',
      time: '5:40 PM - 7:00 PM',
      days: 'Mon, Wed, Fri',
      seats: '15/20',
      featured: true,
    },
    {
      name: 'Late Evening Batch',
      time: '7:30 PM - 8:50 PM',
      days: 'Mon, Wed, Fri',
      seats: '19/20',
      featured: false,
    },
  ];

  const enrollmentLink = () => {
    const element = document.getElementById('enrollment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="batches" className="py-20 px-4 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Batch Timings</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-foreground-light">Classes held 3 days a week - Choose your preferred time slot</p>
        </div>

        {/* Class Selection Toggle */}
        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => setSelectedClass('11')}
            className={`px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
              selectedClass === '11'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-background border-2 border-border text-foreground hover:border-primary'
            }`}
          >
            Class 11
          </button>
          <button
            onClick={() => setSelectedClass('12')}
            className={`px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
              selectedClass === '12'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-background border-2 border-border text-foreground hover:border-primary'
            }`}
          >
            Class 12
          </button>
        </div>

        {/* Batches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {batches.map((batch, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${
                batch.featured
                  ? 'bg-gradient-to-br from-primary to-primary-light text-white shadow-2xl scale-105 md:scale-110'
                  : 'bg-background border-2 border-border hover:border-primary hover:shadow-lg'
              }`}
            >
              {batch.featured && (
                <div className="absolute -top-4 right-4 bg-accent text-primary px-4 py-1 rounded-full font-bold text-sm">
                  Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-4 ${batch.featured ? 'text-white' : 'text-foreground'}`}>
                {batch.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={20} className={batch.featured ? 'text-accent' : 'text-primary'} />
                  <div>
                    <p className={`text-sm ${batch.featured ? 'text-white text-opacity-80' : 'text-foreground-light'}`}>
                      Time
                    </p>
                    <p className={`font-bold ${batch.featured ? 'text-white' : 'text-foreground'}`}>{batch.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={20} className={batch.featured ? 'text-accent' : 'text-primary'} />
                  <div>
                    <p className={`text-sm ${batch.featured ? 'text-white text-opacity-80' : 'text-foreground-light'}`}>
                      Days
                    </p>
                    <p className={`font-bold ${batch.featured ? 'text-white' : 'text-foreground'}`}>{batch.days}</p>
                  </div>
                </div>
              </div>

              <div className={`mt-6 p-3 rounded-lg ${batch.featured ? 'bg-white bg-opacity-20' : 'bg-background-alt'}`}>
                <p className={`text-sm ${batch.featured ? 'text-white text-opacity-80' : 'text-foreground-light'}`}>
                  Seats Available
                </p>
                <p className={`text-lg font-bold ${batch.featured ? 'text-accent' : 'text-primary'}`}>
                  {batch.seats}
                </p>
              </div>

              <button
                onClick={enrollmentLink}
                className={`w-full mt-6 py-2 rounded-lg font-bold transition-colors ${
                  batch.featured
                    ? 'bg-accent text-primary hover:bg-accent-light'
                    : 'bg-primary text-white hover:bg-primary-light'
                }`}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-background border-2 border-accent border-opacity-30 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground-light mb-2">
            💡 <span className="font-bold">All batches</span> cover the complete Class {selectedClass} curriculum
          </p>
          <p className="text-foreground">
            Classes are held on <span className="font-bold">Monday, Wednesday, and Friday</span> every week
          </p>
        </div>
      </div>
    </section>
  );
}
