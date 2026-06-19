'use client';

import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    // WhatsApp link - replace with actual number
    window.open('https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20free%20demo%20class', '_blank');
  };

  const scrollToEnrollment = () => {
    const element = document.getElementById('enrollment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary flex items-center justify-center px-4 pt-20"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tagline Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-accent bg-opacity-20 border border-accent border-opacity-50 rounded-full">
          <p className="text-accent font-semibold text-sm">🚀 Your Path to Success Starts Here</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Crack JEE - Chase Your Dreams
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 text-balance">
          Online JEE Mains & JEE Advanced Classes for Class 11 & 12
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToEnrollment}
            className="px-8 py-4 bg-accent text-primary rounded-lg font-bold text-lg hover:bg-accent-light transition-all transform hover:scale-105 shadow-lg"
          >
            📚 Book a Free Demo Class
          </button>
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-white bg-opacity-20 text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-opacity-30 transition-all flex items-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <p className="text-5xl font-bold text-accent mb-2">21+</p>
            <p className="text-white text-opacity-80">Years of Experience</p>
          </div>
          <div className="p-4">
            <p className="text-5xl font-bold text-accent mb-2">1000+</p>
            <p className="text-white text-opacity-80">Students Trained</p>
          </div>
          <div className="p-4">
            <p className="text-5xl font-bold text-accent mb-2">3</p>
            <p className="text-white text-opacity-80">Top Coaching Institutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
