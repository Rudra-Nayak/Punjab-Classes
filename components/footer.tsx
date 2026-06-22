'use client';

import { MessageCircle, Phone, Mail, ArrowRight, Heart, Sunrise, Sun, Sunset, Moon } from 'lucide-react';
import Image from 'next/image';

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
      <div className="bg-zinc-950/80 backdrop-blur-md py-16 px-4 text-white border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Ready to Transform Your <span className="text-gradient">JEE Journey</span>?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-sm sm:text-base font-sans">
                Join 1000+ successful students who cracked JEE with Punjab Classes. Limited seats
                available for the upcoming batch.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-stretch sm:items-center">
                <button
                  onClick={() => scrollToSection('enrollment')}
                  className="px-8 py-4 btn-stamp text-lg flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Book Free Demo Today
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/919779771055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 btn-stamp-secondary text-lg flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle size={20} className="text-brand-green-light fill-brand-green-light/10" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-grid-paper-orange py-16 px-4 text-zinc-300 border-t border-zinc-800/80 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="relative h-12 w-44 overflow-hidden mb-5">
                <Image
                  src="/logo.png"
                  alt="Punjab Classes Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-sans">
                Premier online coaching for JEE Mains &amp; Advanced. Expert faculty from ALLEN,
                AAKASH &amp; BANSAL with 21+ years of experience in shaping future engineers.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919779771055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-lg flex items-center justify-center text-brand-green-light transition-all hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="tel:+919779771055"
                  className="w-10 h-10 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-lg flex items-center justify-center text-white transition-all hover:scale-105"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="mailto:info@punjabclasses.com"
                  className="w-10 h-10 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-lg flex items-center justify-center text-brand-orange transition-all hover:scale-105"
                  aria-label="Email us"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white font-bold mb-5 text-xs uppercase tracking-wider font-mono">
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
                      className="text-zinc-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group font-semibold cursor-pointer"
                    >
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-brand-green-light" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Class Timings */}
            <div>
              <h5 className="text-white font-bold mb-5 text-xs uppercase tracking-wider font-mono">
                Class Timings
              </h5>
              <div className="space-y-3 font-sans">
                <p className="text-brand-green-light font-bold text-xs uppercase font-mono">Mon, Wed, Fri</p>
                {[
                  { icon: Sunrise, time: '7:00 AM – 8:20 AM' },
                  { icon: Sun, time: '4:00 PM – 5:20 PM' },
                  { icon: Sunset, time: '5:40 PM – 7:00 PM' },
                  { icon: Moon, time: '7:30 PM – 8:50 PM' },
                ].map((slot, i) => (
                  <p key={i} className="text-zinc-400 text-sm flex items-center gap-2 font-mono">
                    <slot.icon size={16} className="text-brand-orange" /> {slot.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-white font-bold mb-5 text-xs uppercase tracking-wider font-mono">
                Contact Us
              </h5>
              <div className="space-y-4 font-sans text-sm">
                <a
                  href="tel:+919779771055"
                  className="flex items-center gap-3 text-zinc-400 hover:text-brand-orange transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-850 transition-colors">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span className="font-semibold">+91 9779771055</span>
                </a>
                <a
                  href="https://wa.me/919779771055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-brand-green-light transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-850 transition-colors">
                    <MessageCircle size={14} className="text-brand-green-light" />
                  </div>
                  <span className="font-semibold">WhatsApp Us</span>
                </a>
                <a
                  href="mailto:info@punjabclasses.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-brand-orange transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-850 transition-colors">
                    <Mail size={14} className="text-brand-orange" />
                  </div>
                  <span className="font-semibold">info@punjabclasses.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
            <p>
              © {currentYear} Punjab Classes. All rights reserved.
            </p>
            <p className="flex items-center gap-1 font-bold">
              Helping students crack JEE since 2003 with{' '}
              <Heart size={12} className="text-brand-orange fill-brand-orange" /> &amp; dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
