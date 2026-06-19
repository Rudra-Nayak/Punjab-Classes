'use client';

import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'instructor' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Batches', id: 'batches' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-premium-lg py-2'
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-400/30 transition-shadow">
              <GraduationCap size={22} className="text-navy-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">
                Punjab <span className="text-gradient">Classes</span>
              </h1>
              <p className="text-[10px] tracking-[0.2em] uppercase text-amber-300/70 font-medium -mt-0.5">
                Est. 2003
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('enrollment')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 rounded-xl font-bold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 btn-shimmer"
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-white/80 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('enrollment')}
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-navy-900 rounded-xl font-bold mt-2 hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
