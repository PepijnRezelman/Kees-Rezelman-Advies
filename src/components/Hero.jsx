import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function Hero({ onExploreSectors, onExploreExpertise, onOpenContact }) {
  return (
    <section className="relative min-h-[90vh] md:min-h-[850px] flex items-center overflow-hidden bg-primary pt-24 md:pt-20">
      {/* Background Architectural Photography with Editorial Overlay */}
      <div className="absolute inset-0 opacity-35 mix-blend-luminosity">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm8kNxb5aayc9IoI7nFMjm24DgCEjDUJVHC0kaWP-XfxRKAslLoUz5wZ0yjRqQRS932htOXmUCTYNPitHOuzJuxBqeQR6xTUrK45DcGLIDMtdvPtl6mBT6NvThg7PPbP6QfhSo4IfURaUdAXX4rIh66cpyP2Xxd8-FbEvrgxu7rElTDMm8ikESJZCToDidFG5rl7raycCv6gjKjOY7fbtZ7aBTlz8BT0J4ZmZdruPNBWiqKBUHEn2hXcBy4r0-mmktbUpOZhy1Szg"
          alt="Modern architectural glass facade with geometric precision"
          className="w-full h-full object-cover scale-105 transform motion-safe:animate-pulse motion-safe:duration-[10000ms]"
        />
      </div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/60 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Accent Line & Category */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-[3px] bg-secondary rounded-full" />
            <span className="text-secondary-fixed font-semibold tracking-widest uppercase text-xs md:text-sm">
              Strategisch Bouw- & Vastgoedmanagement
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.08] mb-8">
            Kees Rezelman Advies
          </h1>

          {/* Lead Paragraph */}
          <p className="text-primary-fixed-dim text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-normal">
            Kees Rezelman Advies biedt strategisch advies en deskundig projectmanagement voor grootschalige, complexe bouwprojecten. Ik vertaal bestuurlijke visie naar tastbare, duurzame realiteit.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreExpertise}
              className="bg-secondary hover:bg-secondary/90 text-white px-7 py-4 rounded-lg font-bold text-base transition-all duration-200 shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3"
            >
              <span>Onze Expertise</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreSectors}
              className="border border-white/25 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm px-7 py-4 rounded-lg font-semibold text-base transition-all duration-200 flex items-center gap-2"
            >
              <Compass className="w-5 h-5 text-secondary-fixed" />
              <span>Ontdek Sectoren</span>
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-white/90">
            <div>
              <span className="text-2xl md:text-3xl font-extrabold text-white block tracking-tight">20+ Jaar</span>
              <span className="text-xs text-primary-fixed-dim uppercase tracking-wider font-medium">Ervaring in verschillende sectoren</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-extrabold text-white block tracking-tight">BREEAM</span>
              <span className="text-xs text-primary-fixed-dim uppercase tracking-wider font-medium">Excellent gecertificeerd</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-2xl md:text-3xl font-extrabold text-white block tracking-tight">100+</span>
              <span className="text-xs text-primary-fixed-dim uppercase tracking-wider font-medium">Succesvolle tenders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
