'use client';

import { MessageCircle, Phone, Mail, GraduationCap, ArrowRight, Heart, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-[#1B3358] py-16 px-4 text-white border-t-2 border-[#1B3358]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1EDE3] mb-4 font-heading">
                Ready to Transform Your <span className="text-[#B23A2E]">JEE Journey</span>?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm sm:text-base font-sans">
                Join 1000+ successful students who cracked JEE with EliteJEE Classes. Limited seats
                available for the upcoming batch.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-stretch sm:items-center">
                <button
                  onClick={() => scrollToSection('enrollment')}
                  className="px-8 py-4 bg-[#B23A2E] text-white border-2 border-white rounded-[4px] font-bold text-lg shadow-[4px_4px_0px_#C98A2C] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#C98A2C] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Book Free Demo Today
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-[4px] font-bold text-lg shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_rgba(255,255,255,0.2)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#FAF8F5] py-16 px-4 text-[#1B3358] border-t border-[#1B3358]/10 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#1B3358] border border-[#1B3358] rounded-[4px] flex items-center justify-center shadow-[2px_2px_0px_#B23A2E]">
                  <GraduationCap size={22} className="text-[#F1EDE3]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1B3358] font-heading">
                    EliteJEE <span className="text-[#B23A2E]">Classes</span>
                  </h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C98A2C] font-bold -mt-0.5 font-mono">
                    Est. 2003
                  </p>
                </div>
              </div>
              <p className="text-[#4A5163] text-sm leading-relaxed mb-5 font-sans">
                Premier online coaching for JEE Mains &amp; Advanced. Expert faculty from ALLEN,
                AAKASH &amp; BANSAL with 21+ years of experience in shaping future engineers.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1B3358]/5 hover:bg-[#1B3358]/10 border border-[#1B3358]/20 rounded-[4px] flex items-center justify-center text-[#25D366] transition-all hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="tel:+919876543210"
                  className="w-10 h-10 bg-[#1B3358]/5 hover:bg-[#1B3358]/10 border border-[#1B3358]/20 rounded-[4px] flex items-center justify-center text-[#1B3358] transition-all hover:scale-105"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="mailto:info@elitejeeclasses.com"
                  className="w-10 h-10 bg-[#1B3358]/5 hover:bg-[#1B3358]/10 border border-[#1B3358]/20 rounded-[4px] flex items-center justify-center text-[#B23A2E] transition-all hover:scale-105"
                  aria-label="Email us"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-[#1B3358] font-bold mb-5 text-xs uppercase tracking-wider font-mono">
                Quick Links
              </h5>
              <ul className="space-y-3 font-sans">
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
                      className="text-[#4A5163] hover:text-[#B23A2E] transition-colors text-sm flex items-center gap-2 group font-semibold"
                    >
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-[#B23A2E]" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Class Timings */}
            <div>
              <h5 className="text-[#1B3358] font-bold mb-5 text-xs uppercase tracking-wider font-mono">
                Class Timings
              </h5>
              <div className="space-y-3 font-sans">
                <p className="text-[#C98A2C] font-bold text-xs uppercase font-mono">Mon, Wed, Fri</p>
                {[
                  { icon: Sunrise, time: '7:00 AM – 8:20 AM' },
                  { icon: Sun, time: '4:00 PM – 5:20 PM' },
                  { icon: Sunset, time: '5:40 PM – 7:00 PM' },
                  { icon: Moon, time: '7:30 PM – 8:50 PM' },
                ].map((slot, i) => (
                  <p key={i} className="text-[#4A5163] text-sm flex items-center gap-2 font-mono">
                    <slot.icon size={16} className="text-[#B23A2E]" /> {slot.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-[#1B3358] font-bold mb-5 text-xs uppercase tracking-wider font-mono">
                Contact Us
              </h5>
              <div className="space-y-4 font-sans text-sm">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-[#4A5163] hover:text-[#B23A2E] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#1B3358]/5 flex items-center justify-center group-hover:bg-[#1B3358]/10 transition-colors">
                    <Phone size={14} className="text-[#1B3358]" />
                  </div>
                  <span className="font-semibold">+91 98765 43210</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#4A5163] hover:text-[#25D366] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#1B3358]/5 flex items-center justify-center group-hover:bg-[#25D366]/10 transition-colors">
                    <MessageCircle size={14} className="text-[#25D366]" />
                  </div>
                  <span className="font-semibold">WhatsApp Us</span>
                </a>
                <a
                  href="mailto:info@elitejeeclasses.com"
                  className="flex items-center gap-3 text-[#4A5163] hover:text-[#B23A2E] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#1B3358]/5 flex items-center justify-center group-hover:bg-[#B23A2E]/10 transition-colors">
                    <Mail size={14} className="text-[#B23A2E]" />
                  </div>
                  <span className="font-semibold">info@elitejeeclasses.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1B3358]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#4A5163]/60">
            <p>
              © {currentYear} EliteJEE Classes. All rights reserved.
            </p>
            <p className="flex items-center gap-1 font-bold">
              Helping students crack JEE since 2003 with{' '}
              <Heart size={12} className="text-[#B23A2E] fill-[#B23A2E]" /> &amp; dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
