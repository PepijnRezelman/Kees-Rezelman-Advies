import React, { useState } from 'react';
import { ArrowRight, Filter, ExternalLink, Building, Calendar, Maximize2, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/content';

export default function ProjectsOverviewSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('Alles');
  const categories = ['Alles', 'Onderwijs', 'Corporate', 'Gezondheidszorg', 'Expertise'];

  const filteredProjects = activeCategory === 'Alles'
    ? siteData.projects
    : siteData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projecten" className="bg-surface relative">
      {/* Editorial Header Block from Stitch */}
      <header className="bg-surface-container-low pt-24 pb-16 px-6 md:px-8 relative overflow-hidden border-b border-surface-container-high">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          <div className="md:col-span-8 flex border-l-2 border-primary pl-6 md:pl-8 py-2">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Portfolio & Realisaties
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display text-primary leading-tight tracking-tighter mb-6">
                Projecten<br />Overzicht
              </h2>
              <p className="text-base md:text-xl font-body text-on-surface-variant max-w-2xl leading-relaxed">
                Een selectie van gerealiseerde en lopende projecten binnen onderwijs, gezondheidszorg en corporate real estate. Waar strategie en uitvoering samenkomen in de gebouwde omgeving.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex items-end justify-start md:justify-end">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high shadow-card w-full max-w-xs">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                Totale Projectwaarde
              </span>
              <span className="text-2xl font-extrabold text-primary block">
                €500M+
              </span>
              <span className="text-xs text-on-surface-variant mt-1 block">
                Gerealiseerd onder strakke kwaliteitsborging
              </span>
            </div>
          </div>
        </div>

        {/* Architectural subtle blueprint lines */}
        <div className="absolute top-0 right-20 w-px h-full bg-outline-variant/30 hidden lg:block" />
        <div className="absolute top-0 right-64 w-px h-full bg-outline-variant/20 hidden lg:block" />
      </header>

      {/* Main Content: Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 items-center mb-16 pb-6 border-b border-surface-container-high">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mr-3 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-secondary" />
            Filter op sector:
          </span>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 2-Columns Project Grid matching Stitch Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group relative flex flex-col cursor-pointer bg-surface-container-lowest p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-surface-container-low"
            >
              {/* Cover Image */}
              <div className="relative w-full h-72 md:h-80 mb-6 bg-surface-container-highest overflow-hidden rounded-xl border border-outline-variant/15">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-bold flex items-center gap-2 bg-primary/80 backdrop-blur-md px-3.5 py-2 rounded-lg">
                    <Maximize2 className="w-4 h-4 text-secondary-fixed" />
                    Klik voor volledige case study & specificaties
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-grow flex flex-col">
                {/* Category tag & line */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary border border-primary/30 px-2.5 py-1 rounded bg-surface-container-low">
                    {project.category}
                  </span>
                  <div className="h-px bg-outline-variant flex-grow opacity-40" />
                  <span className="text-xs font-semibold text-secondary">
                    {project.status.split('&')[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold font-display text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="font-body text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base line-clamp-3">
                  {project.summary}
                </p>

                {/* 3-Column Stats Metadata Strip from Stitch */}
                <div className="mt-auto pt-5 border-t border-outline-variant/30 grid grid-cols-3 gap-3">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">
                      Periode
                    </span>
                    <span className="font-semibold text-sm text-primary block">
                      {project.period}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">
                      Omvang
                    </span>
                    <span className="font-semibold text-sm text-primary block">
                      {project.area}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">
                      Rol
                    </span>
                    <span className="font-semibold text-sm text-primary truncate block">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Detail Action Trigger */}
                <div className="pt-5 mt-2 flex items-center justify-between text-secondary font-bold text-sm">
                  <span>Bekijk complete case study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
