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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 border-b-2 border-[#1B3358] py-2 shadow-sm'
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
            <div className="w-10 h-10 bg-[#1B3358] border border-[#1B3358] rounded-[4px] flex items-center justify-center shadow-[2px_2px_0px_#B23A2E] transition-all group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_#B23A2E]">
              <GraduationCap size={22} className="text-[#F1EDE3]" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-[#1B3358] leading-tight font-heading">
                EliteJEE <span className="text-[#B23A2E]">Classes</span>
              </h1>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C98A2C] font-bold -mt-0.5 font-mono">
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
                className="px-4 py-2 text-sm font-semibold text-[#1B3358]/80 hover:text-[#B23A2E] transition-colors rounded-lg hover:bg-[#1B3358]/5 font-heading"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('enrollment')}
              className="ml-4 px-5 py-2.5 btn-stamp text-sm"
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1B3358] hover:text-[#B23A2E] transition-colors rounded-lg hover:bg-[#1B3358]/5"
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
          <div className="bg-[#FAF8F5] border-2 border-[#1B3358] shadow-[4px_4px_0px_#B23A2E] rounded-[4px] p-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2.5 text-[#1B3358] hover:text-[#B23A2E] hover:bg-[#1B3358]/5 rounded-[4px] transition-colors font-semibold text-sm font-heading"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('enrollment')}
              className="block w-full text-center py-3 btn-stamp mt-4 text-sm"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
