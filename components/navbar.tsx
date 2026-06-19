'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-accent">Punjab Classes</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('instructor')}
              className="hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('batches')}
              className="hover:text-accent transition-colors"
            >
              Batches
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-accent transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('enrollment')}
              className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 hover:bg-primary-light rounded transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('instructor')}
              className="block w-full text-left px-4 py-2 hover:bg-primary-light rounded transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('batches')}
              className="block w-full text-left px-4 py-2 hover:bg-primary-light rounded transition-colors"
            >
              Batches
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 hover:bg-primary-light rounded transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('enrollment')}
              className="block w-full text-left px-4 py-2 bg-accent text-primary rounded font-semibold hover:bg-accent-light transition-colors"
            >
              Book Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
