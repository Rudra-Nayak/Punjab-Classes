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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "90f4840e-c4db-4022-b165-078e05befe6d";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          phone: formData.phone,
          class: formData.class,
          batch: formData.batch || "Any Batch",
          subject: `New Lead: ${formData.name} (Class ${formData.class})`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', class: '11', batch: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error("Web3Forms submission failed:", result);
        alert("Something went wrong. Please try again or chat via WhatsApp.");
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'd like to know more about Class ${formData.class} batches for ${formData.batch || 'JEE preparation'}. Name: ${formData.name || 'Student'}, Phone: ${formData.phone || 'Not provided'}`;
    window.open(`https://wa.me/919779771055?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scheduleItems = [
    { icon: Calendar, label: 'Classes', value: 'Monday, Wednesday, Friday' },
    { icon: Clock, label: 'Duration', value: '80 minutes per class' },
    { icon: BookOpen, label: 'Curriculum', value: 'JEE Mains & Advanced' },
    { icon: HelpCircle, label: 'Doubt Sessions', value: 'Weekly (Included)' },
  ];

  return (
    <section id="enrollment" className="py-24 px-4 bg-grid-paper border-t border-zinc-800/80" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-3 font-mono flex items-center justify-center gap-2">
            ✦ GET STARTED ✦
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Join <span className="text-primary">Punjab Classes</span> Today
          </h2>
          <div className="w-20 h-1 bg-primary rounded-[2px] mx-auto mb-6" />
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-sans">
            Book your free demo class now — Limited seats available!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form - Takes 3 cols */}
          <div className={`lg:col-span-3 ${inView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-8 shadow-[0_20px_50px_rgba(251,139,37,0.06)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/25 flex items-center justify-center">
                  <Send size={18} className="text-brand-green-light" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Quick Enrollment</h3>
                  <p className="text-xs text-zinc-400 font-sans">Fill details and we&apos;ll contact you</p>
                </div>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-brand-green/10 border border-brand-green/35 rounded-lg flex items-center gap-3 animate-fade-in font-sans">
                  <CheckCircle size={20} className="text-brand-green-light flex-shrink-0" />
                  <div>
                    <p className="text-brand-green-light font-bold text-sm">
                      Thank you! We&apos;ll contact you within 2 hours.
                    </p>
                    <p className="text-brand-green text-xs mt-0.5 font-mono">
                      Check your WhatsApp for batch details.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Name */}
                <div>
                  <label htmlFor="enrollment-name" className="block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 font-mono">
                    Full Name <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    id="enrollment-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter student's full name"
                    className="w-full px-4 py-3 border border-zinc-800/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange bg-zinc-900/60 text-white font-semibold text-sm transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="enrollment-phone" className="block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 font-mono">
                    Phone Number <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 py-3 border border-r-0 border-zinc-800/80 rounded-l-lg bg-zinc-900/80 text-zinc-300 text-xs font-bold font-mono">
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
                      className="flex-1 px-4 py-3 border border-zinc-800/80 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange bg-zinc-900/60 text-white font-semibold text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Class & Batch */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enrollment-class" className="block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 font-mono">
                      Class <span className="text-red-500 font-bold">*</span>
                    </label>
                    <select
                      id="enrollment-class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-800/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange bg-zinc-900/60 text-white font-semibold text-sm appearance-none cursor-pointer"
                    >
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enrollment-batch" className="block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 font-mono">
                      Preferred Batch
                    </label>
                    <select
                      id="enrollment-batch"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-800/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange bg-zinc-900/60 text-white font-semibold text-sm appearance-none cursor-pointer"
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
                  disabled={isSubmitting}
                  className="w-full py-3.5 btn-stamp text-base flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending Request...' : 'Book Free Demo Class'}
                </button>

                {/* WhatsApp Alternative */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-800/60" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-[#080a10] text-xs text-zinc-500 font-bold font-mono uppercase">or</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 btn-stamp-green text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} className="fill-black/10" />
                  Chat on WhatsApp Instead
                </button>

                <p className="text-[10px] text-zinc-500 text-center font-mono leading-relaxed mt-2">
                  BY SUBMITTING, YOU AGREE TO RECEIVE UPDATES VIA WHATSAPP AND PHONE CALLS.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Info - Takes 2 cols */}
          <div className={`lg:col-span-2 space-y-6 ${inView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            {/* Limited Seats Card */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 shadow-[0_8px_25px_rgba(251,139,37,0.04)] text-white">
              <p className="text-lg font-bold text-white mb-2 font-heading">Limited Seats Per Batch</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Only <span className="font-bold text-white">15–20 students</span> per batch to ensure high quality attention and personal instruction.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-brand-green/10 border border-brand-green/20 text-white rounded-2xl p-6 shadow-[0_8px_25px_rgba(1,151,64,0.15)]">
              <p className="text-base font-bold mb-3 font-heading text-white">Instant Response</p>
              <p className="text-white/80 text-xs leading-relaxed mb-4 font-sans">
                Get your queries answered instantly. Our mentoring team responds within minutes on WhatsApp.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 btn-stamp-green text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </button>
            </div>

            {/* Schedule */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 shadow-[0_8px_25px_rgba(1,151,64,0.04)]">
              <p className="text-base font-bold text-white mb-4 font-heading">Class Schedule</p>
              <div className="space-y-4">
                {scheduleItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-brand-green-light">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono block leading-none mb-0.5">{item.label}</span>
                        <p className="text-xs font-bold text-white leading-tight font-sans">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mini Image */}
            <div className="relative rounded-2xl border border-zinc-800/80 overflow-hidden h-40 shadow-lg">
              <Image
                src="/online-learning.png"
                alt="Student attending online JEE class on laptop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 text-left">
                <p className="text-white font-bold text-xs font-heading">Learn from anywhere</p>
                <p className="text-zinc-400 text-[10px] font-sans">Interactive online classes via Zoom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
