import React from 'react';
import { CheckCircle, ArrowRight, Award, Shield, FileSpreadsheet, Quote } from 'lucide-react';
import { siteData } from '../data/content';

export default function ExpertiseSection({ onOpenContact, onSelectProject }) {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-24 pb-8 border-b border-surface-container-high">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold text-xs tracking-widest uppercase">
                Gespecialiseerde Diensten
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight">
              Onze Expertise
            </h2>
          </div>
          <p className="text-on-surface-variant text-base md:text-lg max-w-md leading-relaxed">
            Strategisch advies en operationele precisie in de wereld van complexe bouw- en huisvestingsvraagstukken.
          </p>
        </div>

        {/* Alternating Editorial Sections */}
        <div className="space-y-32">
          {siteData.expertiseList.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                id={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Visual Image Column */}
                <div
                  className={`md:col-span-6 lg:col-span-7 ${
                    isEven ? 'order-2 md:order-1' : 'order-2 md:order-2'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-elevated bg-surface-container-highest">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />

                    {/* Tag badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-lg uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Narrative Column */}
                <div
                  className={`md:col-span-6 lg:col-span-5 space-y-6 ${
                    isEven ? 'order-1 md:order-2' : 'order-1 md:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                      {item.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Optional Quote */}
                  {item.quote && (
                    <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary my-4">
                      <div className="flex gap-3">
                        <Quote className="w-6 h-6 text-secondary flex-shrink-0" />
                        <blockquote className="italic text-primary font-medium text-sm md:text-base leading-relaxed">
                          "{item.quote}"
                        </blockquote>
                      </div>
                    </div>
                  )}

                  {/* Optional Badges (Duurzaamheid) */}
                  {item.badges && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.badges.map((b, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 bg-surface-container-low text-primary text-xs font-bold uppercase tracking-wider rounded-md border border-surface-container-high"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Optional Stats (Inkoop) */}
                  {item.stats && (
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {item.stats.map((s, i) => (
                        <div key={i} className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-low">
                          <span className="text-secondary font-extrabold text-2xl md:text-3xl block">
                            {s.value}
                          </span>
                          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-tight">
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Points Checklist */}
                  {item.points && (
                    <ul className="space-y-3 pt-2">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-3 text-primary font-medium text-sm md:text-base">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Action Link */}
                  <div className="pt-4">
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary-container font-bold text-sm md:text-base group"
                    >
                      <span>Vraag advies over {item.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
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
