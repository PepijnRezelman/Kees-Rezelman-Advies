import React, { useState } from 'react';
import { School, HeartPulse, Landmark, Building2, ArrowRight, Eye } from 'lucide-react';
import { siteData } from '../data/content';

const iconByCategory = {
  Onderwijs: School,
  Gezondheidszorg: HeartPulse,
  'Financiële Instellingen': Landmark,
  'Commercieel Vastgoed': Building2,
};

export default function SectorsSection({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('Alles');

  const filters = [
    'Alles',
    'Onderwijs',
    'Gezondheidszorg',
    'Financiële Instellingen',
    'Commercieel Vastgoed',
  ];

  const filteredSectors = activeFilter === 'Alles'
    ? siteData.sectors
    : siteData.sectors.filter((s) => s.category === activeFilter);

  return (
    <section id="sectoren" className="py-24 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold text-xs tracking-widest uppercase">
                Focus & Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Onze Sectoren
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed border-l-2 border-surface-container-highest pl-6">
              Specialistische kennis toegepast op de unieke uitdagingen van maatschappelijk, publiek en commercieel vastgoed.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 items-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mr-3">
            Filter op sector:
          </span>
          {filters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-white hover:text-primary'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredSectors.map((sector) => {
            const IconComp = iconByCategory[sector.category] || Building2;
            const isLarge = sector.gridSpan.includes('col-span-8');

            return (
              <div
                key={sector.id}
                onClick={() => onOpenProject(sector.projectId)}
                className={`${
                  activeFilter === 'Alles' ? sector.gridSpan : 'col-span-1 md:col-span-6'
                } group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer flex flex-col justify-between`}
              >
                {/* Image Area with Gradient */}
                <div className={`relative ${sector.aspectRatio} overflow-hidden`}>
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-90 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {sector.badge}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/60 backdrop-blur-md flex items-center justify-center text-white">
                    <IconComp className="w-5 h-5 text-secondary-fixed" />
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <span className="text-secondary-container font-bold text-xs tracking-widest uppercase mb-1 block">
                      {sector.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base line-clamp-2 max-w-xl font-normal">
                      {sector.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link Area */}
                <div className="p-5 md:p-6 bg-surface-container-lowest flex items-center justify-between border-t border-surface-container-low">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    {sector.subtitle}
                  </span>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                    <span>Bekijk project details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
