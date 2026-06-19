'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, CheckCircle, Calendar, Clock, BookOpen, HelpCircle } from 'lucide-react';
import Image from 'next/image';

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

export default function EnrollmentForm() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: '11',
    batch: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', class: '11', batch: '' });
      setSubmitted(false);
    }, 4000);
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'd like to know more about Class ${formData.class} batches for ${formData.batch || 'JEE preparation'}. Name: ${formData.name || 'Student'}, Phone: ${formData.phone || 'Not provided'}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scheduleItems = [
    { icon: Calendar, label: 'Classes', value: 'Monday, Wednesday, Friday' },
    { icon: Clock, label: 'Duration', value: '80 minutes per class' },
    { icon: BookOpen, label: 'Curriculum', value: 'JEE Mains & Advanced' },
    { icon: HelpCircle, label: 'Doubt Sessions', value: 'Weekly (Included)' },
  ];

  return (
    <section id="enrollment" className="py-24 px-4 bg-section-light" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join <span className="text-gradient-blue">Punjab Classes</span> Today
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Book your free demo class now — Limited seats available!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form - Takes 3 cols */}
          <div className={`lg:col-span-3 ${inView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-premium-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center">
                  <Send size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Quick Enrollment</h3>
                  <p className="text-sm text-muted-foreground">Fill details and we&apos;ll contact you</p>
                </div>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 animate-fade-in">
                  <CheckCircle size={20} className="text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-emerald-800 font-semibold text-sm">
                      Thank you! We&apos;ll contact you within 2 hours.
                    </p>
                    <p className="text-emerald-600 text-xs mt-0.5">
                      Check your WhatsApp for batch details.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="enrollment-name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="enrollment-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter student's full name"
                    className="w-full px-4 py-3.5 border border-border rounded-xl focus:border-navy-500 focus:ring-2 focus:ring-navy-500/10 focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-foreground"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="enrollment-phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 py-3.5 border border-r-0 border-border rounded-l-xl bg-gray-50 text-muted-foreground text-sm font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="enrollment-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="10-digit phone number"
                      pattern="[0-9]{10}"
                      className="flex-1 px-4 py-3.5 border border-border rounded-r-xl focus:border-navy-500 focus:ring-2 focus:ring-navy-500/10 focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-foreground"
                    />
                  </div>
                </div>

                {/* Class & Batch */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enrollment-class" className="block text-sm font-semibold text-foreground mb-2">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="enrollment-class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-border rounded-xl focus:border-navy-500 focus:ring-2 focus:ring-navy-500/10 focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-foreground appearance-none cursor-pointer"
                    >
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enrollment-batch" className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Batch
                    </label>
                    <select
                      id="enrollment-batch"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-border rounded-xl focus:border-navy-500 focus:ring-2 focus:ring-navy-500/10 focus:outline-none transition-all bg-gray-50/50 hover:bg-white text-foreground appearance-none cursor-pointer"
                    >
                      <option value="">Any Batch</option>
                      <option value="morning">🌅 7:00 AM – 8:20 AM</option>
                      <option value="afternoon">☀️ 4:00 PM – 5:20 PM</option>
                      <option value="evening">🌆 5:40 PM – 7:00 PM</option>
                      <option value="lateevening">🌙 7:30 PM – 8:50 PM</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-navy-800 to-navy-700 text-white rounded-xl font-bold text-base hover:from-navy-700 hover:to-navy-600 transition-all shadow-lg shadow-navy-800/20 flex items-center justify-center gap-2 active:scale-[0.98] btn-shimmer"
                >
                  <Send size={18} />
                  Book Free Demo Class
                </button>

                {/* WhatsApp Alternative */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-white text-xs text-muted-foreground font-medium">or</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp Instead
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to receive updates via WhatsApp and phone calls.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Info - Takes 2 cols */}
          <div className={`lg:col-span-2 space-y-5 ${inView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            {/* Limited Seats Card */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-6">
              <p className="text-xl font-bold text-foreground mb-2">⏰ Limited Seats Per Batch</p>
              <p className="text-muted-foreground text-sm">
                Only <span className="font-bold text-foreground">15–20 students</span> per batch for personalized attention and quality education.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-6">
              <p className="text-lg font-bold mb-3">💬 Instant Response</p>
              <p className="text-white/70 text-sm mb-4">
                Get your doubts cleared instantly. Our team responds within minutes on WhatsApp.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-white text-navy-900 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </button>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl p-6 shadow-premium border border-border/50">
              <p className="text-lg font-bold text-foreground mb-4">📅 Class Schedule</p>
              <div className="space-y-3">
                {scheduleItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-navy-600" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mini Image */}
            <div className="relative rounded-2xl overflow-hidden h-40 shadow-premium">
              <Image
                src="/online-learning.png"
                alt="Student attending online JEE class on laptop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Learn from anywhere 🌍</p>
                <p className="text-white/60 text-xs">Interactive online classes via Zoom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
