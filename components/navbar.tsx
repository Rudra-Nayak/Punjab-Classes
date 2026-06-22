'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

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
          ? 'bg-black/90 border-b border-[#27272a] py-2 shadow-lg backdrop-blur-md'
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
            className="flex items-center gap-3 group text-left"
            aria-label="Go to top"
          >
            <div className="relative h-12 w-44 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Punjab Classes Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div key={link.id} className="flex items-center">
                {index > 0 && <span className="text-zinc-700 text-[10px] mx-1 select-none">✦</span>}
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 text-sm font-semibold text-zinc-300 hover:text-brand-orange transition-colors rounded-lg hover:bg-white/5 font-heading cursor-pointer"
                >
                  {link.label}
                </button>
              </div>
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
            className="lg:hidden p-2 text-white hover:text-brand-orange transition-colors rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-455 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-zinc-950/90 backdrop-blur-lg border border-zinc-800/60 shadow-[0_10px_30px_-10px_rgba(251,139,37,0.15)] rounded-xl p-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2.5 text-zinc-300 hover:text-brand-orange hover:bg-white/5 rounded-lg transition-colors font-semibold text-sm font-heading"
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
