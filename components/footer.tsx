'use client';

import { MessageCircle, Phone, Mail, MapPin, GraduationCap, ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -inset-20 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your <span className="text-gradient">JEE Journey</span>?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Join 1000+ successful students who cracked JEE with Punjab Classes. Limited seats
                available for the upcoming batch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('enrollment')}
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 btn-shimmer"
                >
                  Book Free Demo Today
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 glass rounded-xl font-bold text-lg text-white hover:bg-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} className="text-green-400" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-navy-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap size={22} className="text-navy-900" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Punjab <span className="text-amber-400">Classes</span>
                  </h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-amber-400/60 font-medium">
                    Est. 2003
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Premier online coaching for JEE Mains & Advanced. Expert faculty from ALLEN,
                AAKASH & BANSAL with 21+ years of experience in shaping future engineers.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="tel:+919876543210"
                  className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 transition-all hover:scale-110"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="mailto:info@punjabclasses.com"
                  className="w-10 h-10 bg-amber-500/20 hover:bg-amber-500/30 rounded-xl flex items-center justify-center text-amber-400 transition-all hover:scale-110"
                  aria-label="Email us"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </h5>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'About Instructor', id: 'instructor' },
                  { label: 'Why Choose Us', id: 'why-us' },
                  { label: 'Batch Timings', id: 'batches' },
                  { label: 'Student Reviews', id: 'testimonials' },
                  { label: 'Enroll Now', id: 'enrollment' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/50 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Class Timings */}
            <div>
              <h5 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
                Class Timings
              </h5>
              <div className="space-y-3">
                <p className="text-amber-400 font-medium text-sm">Mon, Wed, Fri</p>
                {[
                  { emoji: '🌅', time: '7:00 AM – 8:20 AM' },
                  { emoji: '☀️', time: '4:00 PM – 5:20 PM' },
                  { emoji: '🌆', time: '5:40 PM – 7:00 PM' },
                  { emoji: '🌙', time: '7:30 PM – 8:50 PM' },
                ].map((slot, i) => (
                  <p key={i} className="text-white/50 text-sm flex items-center gap-2">
                    <span>{slot.emoji}</span> {slot.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
                Contact Us
              </h5>
              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-white/50 hover:text-amber-400 transition-colors text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-emerald-400 transition-colors text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <MessageCircle size={16} />
                  </div>
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="mailto:info@punjabclasses.com"
                  className="flex items-center gap-3 text-white/50 hover:text-amber-400 transition-colors text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span>info@punjabclasses.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Punjab Classes. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-1">
              Helping students crack JEE since 2003 with{' '}
              <Heart size={14} className="text-red-400 fill-red-400" /> &amp; dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
