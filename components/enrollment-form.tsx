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
    <section id="enrollment" className="py-24 px-4 bg-section-light border-t border-[#1B3358]/10" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#C98A2C] font-bold text-xs tracking-widest uppercase mb-3 font-mono">
            GET STARTED
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3358] mb-4 font-heading">
            Join <span className="text-[#B23A2E]">Punjab Classes</span> Today
          </h2>
          <div className="w-20 h-1 bg-[#B23A2E] rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-[#4A5163] max-w-2xl mx-auto font-sans">
            Book your free demo class now — Limited seats available!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form - Takes 3 cols */}
          <div className={`lg:col-span-3 ${inView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            <div className="bg-white border-2 border-[#1B3358] rounded-[4px] p-8 shadow-[6px_6px_0px_#1B3358]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-[4px] bg-[#1B3358] flex items-center justify-center border border-[#1B3358] shadow-[2px_2px_0px_#B23A2E]">
                  <Send size={18} className="text-[#F1EDE3]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B3358] font-heading">Quick Enrollment</h3>
                  <p className="text-xs text-[#4A5163] font-sans">Fill details and we&apos;ll contact you</p>
                </div>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-500 rounded-[4px] flex items-center gap-3 animate-fade-in font-sans">
                  <CheckCircle size={20} className="text-emerald-700 flex-shrink-0" />
                  <div>
                    <p className="text-emerald-800 font-bold text-sm">
                      Thank you! We&apos;ll contact you within 2 hours.
                    </p>
                    <p className="text-emerald-600 text-xs mt-0.5 font-mono">
                      Check your WhatsApp for batch details.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Name */}
                <div>
                  <label htmlFor="enrollment-name" className="block text-xs font-bold uppercase tracking-wider text-[#1B3358] mb-2 font-mono">
                    Full Name <span className="text-[#B23A2E] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="enrollment-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter student's full name"
                    className="w-full px-4 py-3 border-2 border-[#1B3358] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#B23A2E]/20 focus:border-[#B23A2E] bg-[#FAF8F5] text-[#1B3358] font-semibold text-sm transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="enrollment-phone" className="block text-xs font-bold uppercase tracking-wider text-[#1B3358] mb-2 font-mono">
                    Phone Number <span className="text-[#B23A2E] font-bold">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 py-3 border-2 border-r-0 border-[#1B3358] rounded-l-[4px] bg-[#E5DEC9] text-[#1B3358] text-xs font-bold font-mono">
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
                      className="flex-1 px-4 py-3 border-2 border-[#1B3358] rounded-r-[4px] focus:outline-none focus:ring-2 focus:ring-[#B23A2E]/20 focus:border-[#B23A2E] bg-[#FAF8F5] text-[#1B3358] font-semibold text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Class & Batch */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enrollment-class" className="block text-xs font-bold uppercase tracking-wider text-[#1B3358] mb-2 font-mono">
                      Class <span className="text-[#B23A2E] font-bold">*</span>
                    </label>
                    <select
                      id="enrollment-class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#1B3358] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#B23A2E]/20 focus:border-[#B23A2E] bg-[#FAF8F5] text-[#1B3358] font-semibold text-sm appearance-none cursor-pointer"
                    >
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enrollment-batch" className="block text-xs font-bold uppercase tracking-wider text-[#1B3358] mb-2 font-mono">
                      Preferred Batch
                    </label>
                    <select
                      id="enrollment-batch"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#1B3358] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#B23A2E]/20 focus:border-[#B23A2E] bg-[#FAF8F5] text-[#1B3358] font-semibold text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Any Batch</option>
                      <option value="morning">7:00 AM – 8:20 AM</option>
                      <option value="afternoon">4:00 PM – 5:20 PM</option>
                      <option value="evening">5:40 PM – 7:00 PM</option>
                      <option value="lateevening">7:30 PM – 8:50 PM</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 btn-stamp text-base flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={18} />
                  Book Free Demo Class
                </button>

                {/* WhatsApp Alternative */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-[#1B3358]/20" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-white text-xs text-[#4A5163] font-bold font-mono uppercase">or</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 bg-[#25D366] text-[#FAF8F5] border-2 border-[#1B3358] rounded-[4px] font-bold text-sm shadow-[4px_4px_0px_#1B3358] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#1B3358] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} className="fill-white/10" />
                  Chat on WhatsApp Instead
                </button>

                <p className="text-[10px] text-[#4A5163]/60 text-center font-mono leading-relaxed mt-2">
                  BY SUBMITTING, YOU AGREE TO RECEIVE UPDATES VIA WHATSAPP AND PHONE CALLS.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Info - Takes 2 cols */}
          <div className={`lg:col-span-2 space-y-6 ${inView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            {/* Limited Seats Card */}
            <div className="bg-[#FAF8F5] border-2 border-[#1B3358] rounded-[4px] p-6 shadow-[4px_4px_0px_#C98A2C]">
              <p className="text-lg font-bold text-[#1B3358] mb-2 font-heading">Limited Seats Per Batch</p>
              <p className="text-[#4A5163] text-sm leading-relaxed">
                Only <span className="font-bold text-[#1B3358]">15–20 students</span> per batch to ensure high quality attention and personal instruction.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#1B3358] text-white border-2 border-white rounded-[4px] p-6 shadow-[4px_4px_0px_#B23A2E]">
              <p className="text-base font-bold mb-3 font-heading">Instant Response</p>
              <p className="text-white/80 text-xs leading-relaxed mb-4 font-sans">
                Get your queries answered instantly. Our mentoring team responds within minutes on WhatsApp.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 bg-white text-[#1B3358] border-2 border-[#1B3358] rounded-[4px] font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#B23A2E] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#B23A2E] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </button>
            </div>

            {/* Schedule */}
            <div className="bg-white border-2 border-[#1B3358] rounded-[4px] p-6 shadow-[4px_4px_0px_#1B3358]">
              <p className="text-base font-bold text-[#1B3358] mb-4 font-heading">Class Schedule</p>
              <div className="space-y-4">
                {scheduleItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[4px] bg-[#1B3358]/5 flex items-center justify-center flex-shrink-0 text-[#1B3358]">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] text-[#4A5163] uppercase tracking-wider font-mono block leading-none mb-0.5">{item.label}</span>
                        <p className="text-xs font-bold text-[#1B3358] leading-tight font-sans">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mini Image */}
            <div className="relative rounded-[4px] border-2 border-[#1B3358] overflow-hidden h-40 shadow-[4px_4px_0px_#B23A2E]">
              <Image
                src="/online-learning.png"
                alt="Student attending online JEE class on laptop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3358]/90 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 text-left">
                <p className="text-[#F1EDE3] font-bold text-xs font-heading">Learn from anywhere</p>
                <p className="text-white/60 text-[10px] font-sans">Interactive online classes via Zoom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
