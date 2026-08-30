import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sectoren', label: 'Sectoren' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projecten', label: 'Projecten' },
    { id: 'over-ons', label: 'Over mij' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-structural py-3.5 border-b border-surface-container-high/60'
          : 'bg-white/95 md:bg-white/80 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg tracking-wider group-hover:bg-primary-container transition-colors shadow-sm">
            KR
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-primary block leading-none">
              Kees Rezelman
            </span>
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase block mt-0.5">
              Advies & Management
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-secondary font-bold'
                    : 'text-primary hover:text-secondary'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-2"
          >
            <span>Neem Contact Op</span>
            <ArrowRight className="w-4 h-4 text-secondary-container" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-primary hover:text-secondary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-surface-container-high px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 font-medium text-base">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-surface-container-low text-secondary font-bold'
                    : 'text-primary hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-surface-container-high">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-secondary-container" />
              <span>Neem Contact Op</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
