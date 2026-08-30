import React, { useState } from 'react';
import { Award, CheckCircle2, Calendar, UserCheck, Maximize2, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { siteData } from '../data/content';

export default function FeaturedProjectSection({ onOpenContact }) {
  const project = siteData.flagshipProject;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projecten" className="py-24 md:py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold text-xs tracking-widest uppercase">
                Uitgelicht Project / Case Study
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
              {project.title} — {project.subtitle}
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
              Een architectonisch baken van duurzaamheid en innovatie in het hart van de Nijmeegse campus.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary shadow-card w-full max-w-sm">
              <span className="block text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                Project Status
              </span>
              <span className="text-lg font-bold text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Panorama Image */}
        <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-elevated mb-16 relative group cursor-pointer"
             onClick={() => setSelectedImage({ url: project.heroImage, title: project.title, caption: project.subtitle })}>
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-primary flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-secondary" />
            <span>Vergroot weergave</span>
          </div>
        </div>

        {/* Project Key Metrics (Bento 4-Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {project.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-card flex flex-col justify-between border-t-2 border-primary/10 hover:border-secondary transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">
                {stat.label}
              </span>
              <span className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative & Testimonial Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              Visie en Realisatie
            </h3>
            <div className="space-y-4 text-on-surface-variant text-base md:text-lg leading-relaxed">
              {project.narrative.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                Kerncompetenties ingezet:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyExpertises.map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-container-lowest text-primary text-sm font-medium border border-surface-container-high">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Quote Card */}
          <div className="lg:col-span-5">
            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-elevated">
              <Quote className="w-12 h-12 text-secondary-container opacity-80 mb-6" />
              <blockquote className="text-lg md:text-xl font-medium italic mb-8 leading-relaxed">
                "{project.clientQuote.quote}"
              </blockquote>
              <div className="h-[2px] w-12 bg-secondary mb-4" />
              <p className="font-bold text-sm uppercase tracking-widest text-white">
                {project.clientQuote.author}
              </p>
              <p className="text-primary-fixed-dim text-xs mt-0.5">
                {project.clientQuote.organization}
              </p>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-primary">Projectgalerij</h3>
            <div className="h-px flex-grow bg-surface-container-highest" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className="group relative overflow-hidden rounded-xl shadow-card aspect-[4/3] cursor-pointer bg-surface-container-highest"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6 md:p-8 text-white">
                  <h4 className="text-lg md:text-xl font-bold mb-1 text-white">{img.title}</h4>
                  <p className="text-sm text-primary-fixed-dim">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-cover"
              />
              <div className="p-6 bg-primary text-white flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">{selectedImage.title}</h4>
                  <p className="text-sm text-primary-fixed-dim">{selectedImage.caption}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  Sluiten
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
