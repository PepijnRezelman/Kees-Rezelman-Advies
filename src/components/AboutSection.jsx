import React from 'react';
import { Mail, Linkedin, GraduationCap, Briefcase, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/content';

export default function AboutSection({ onOpenContact }) {
  const { about, meta } = siteData;

  return (
    <section id="over-ons" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Profile Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated bg-surface-container-high relative group">
              <img
                src={about.portrait}
                alt={about.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
              
              {/* Experience badge */}
              <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-lg border border-white/10">
                <span className="text-xs text-primary-fixed-dim uppercase tracking-wider block font-medium">Vastgoedervaring</span>
                <span className="text-xl font-extrabold text-white">{about.experience}</span>
              </div>
            </div>

            {/* Subtle Ambient Glow */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-secondary" />
                <span className="text-secondary font-bold text-xs tracking-widest uppercase">
                  Adviseur & Oprichter
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight">
                {about.name}
              </h2>
              <p className="text-base md:text-lg font-semibold text-secondary pt-1">
                {about.title}
              </p>
            </div>

            <p className="text-xl text-primary font-medium leading-relaxed">
              {about.bioLead}
            </p>

            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-normal">
              {about.bioBody}
            </p>

            {/* Direct Link Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`mailto:${meta.email}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-bold text-sm transition-colors border border-surface-container-high"
              >
                <Mail className="w-4 h-4 text-secondary" />
                <span>{meta.email}</span>
              </a>

              <a
                href={meta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-bold text-sm transition-colors border border-surface-container-high"
              >
                <Linkedin className="w-4 h-4 text-secondary" />
                <span>LinkedIn Profiel</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-variant" />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Subgrid: Wat ik doe, Ervaring & Opleiding */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Wat ik doe (8-cols) */}
          <div className="md:col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-card flex flex-col justify-between border border-surface-container-low">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Wat ik doe</h3>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                Ik adviseer overheden, universiteiten, zorginstellingen en vastgoedbeleggers bij het sturen van complexe projecten. Mijn focus ligt op het creëren van harmonie tussen esthetische ambities, technische uitvoerbaarheid en strak budgetbeheer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {about.servicesList.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-container-low text-primary text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ervaring Timeline (4-cols) */}
          <div className="md:col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-card border border-surface-container-low flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Ervaring</h3>
              </div>
              <div className="space-y-6">
                {about.timeline.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-secondary/40 pl-4 space-y-1">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                      {item.period}
                    </span>
                    <h4 className="font-bold text-primary text-sm md:text-base">
                      {item.role}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Opleiding & Achtergrond (12-cols full width banner) */}
          <div className="md:col-span-12 bg-primary text-white p-8 md:p-12 rounded-2xl shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-secondary-fixed flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-primary-fixed-dim block font-semibold">Academisch Fundament</span>
                <h3 className="text-2xl font-extrabold text-white">Opleiding & Kwalificaties</h3>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 lg:pt-0">
              {about.education.map((edu, idx) => (
                <div key={idx} className="border-l border-white/15 pl-4 space-y-1">
                  <span className="font-bold text-secondary-fixed text-sm block">{edu.institution}</span>
                  <h4 className="font-semibold text-white text-sm leading-snug">{edu.degree}</h4>
                  <p className="text-xs text-primary-fixed-dim mt-1">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
