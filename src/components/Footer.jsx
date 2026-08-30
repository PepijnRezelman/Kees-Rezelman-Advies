import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';
import { siteData } from '../data/content';

export default function Footer({ onNavigate }) {
  const { meta } = siteData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white w-full py-16 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white text-primary flex items-center justify-center font-extrabold text-base">
                KR
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Kees Rezelman Advies
              </span>
            </div>
            <p className="text-primary-fixed-dim text-sm max-w-sm leading-relaxed">
              Strategisch advies en deskundig projectmanagement voor toonaangevende bouwprojecten, campusontwikkeling en zorgvastgoed.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold text-secondary-fixed uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                The Blueprint Editorial — Precision & Leadership
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-secondary-fixed font-bold uppercase tracking-widest text-xs block mb-4">
              Navigatie
            </span>
            <ul className="space-y-2.5 text-sm font-medium text-primary-fixed-dim">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sectoren')}
                  className="hover:text-white transition-colors"
                >
                  Sectoren & Focus
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise')}
                  className="hover:text-white transition-colors"
                >
                  Diensten & Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projecten')}
                  className="hover:text-white transition-colors"
                >
                  Uitgelichte Projecten
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('over-ons')}
                  className="hover:text-white transition-colors"
                >
                  Over Kees Rezelman
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Office */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-secondary-fixed font-bold uppercase tracking-widest text-xs block mb-4">
              Contactgegevens
            </span>
            <div className="space-y-3 text-sm text-primary-fixed-dim">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary-fixed flex-shrink-0" />
                <span>Kantoor Amsterdam, Nederland</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary-fixed flex-shrink-0" />
                <a href={`mailto:${meta.email}`} className="hover:text-white transition-colors">
                  {meta.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary-fixed flex-shrink-0" />
                <a href={`tel:${meta.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {meta.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-secondary-fixed flex-shrink-0" />
                <a href={meta.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn Netwerk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-fixed-dim">
          <p>© {new Date().getFullYear()} Kees Rezelman Advies. Alle rechten voorbehouden.</p>
          
          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
              <span>Naar boven</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
