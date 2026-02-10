import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Customer Experience', href: '#customer-experience' },
  { label: 'Integration', href: '#integration' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-boost-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Logo className="h-10" variant="light" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-boost-accent transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-boost-accent text-boost-dark px-6 py-2.5 rounded-full font-bold hover:bg-boost-accentHover transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,223,162,0.4)]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-boost-accent transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-boost-dark border-t border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-boost-accent text-boost-dark px-6 py-3 rounded-lg font-bold hover:bg-boost-accentHover">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};