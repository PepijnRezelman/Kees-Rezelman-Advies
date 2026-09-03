import React from 'react';
import { Layers, Compass, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '../data/content';

const iconMap = {
  Layers: Layers,
  Compass: Compass,
  Leaf: Leaf,
};

export default function PillarsSection({ onSelectPillar }) {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Kerncompetenties
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Layers;
            return (
              <div
                key={pillar.id}
                className="group bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors">
                    <IconComponent className="w-8 h-8 text-secondary transition-transform group-hover:scale-110" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-surface-container-low">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm font-medium text-primary">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={() => onSelectPillar(pillar.id)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary-container transition-colors group/btn"
                  >
                    <span>Lees meer over de aanpak</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
