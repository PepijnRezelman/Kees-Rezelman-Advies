import React, { useState } from 'react';
import { X, CheckCircle2, Award, Calendar, ArrowRight, ShieldCheck, MapPin, Quote, Maximize2, Building2 } from 'lucide-react';
import { siteData } from '../data/content';

export default function ProjectDetailModal({ projectId, onClose, onOpenContact }) {
  if (!projectId) return null;

  // Find selected project
  const project = siteData.projects.find((p) => p.id === projectId) || siteData.projects[0];
  const [selectedLightboxImage, setSelectedLightboxImage] = useState(null);

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-surface max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl my-6 relative flex flex-col max-h-[92vh] border border-surface-container-high"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface-container-lowest border-b border-surface-container-high sticky top-0 z-20">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            <span>Projecten</span>
            <span className="text-on-surface-variant/40">/</span>
            <span>{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="hidden sm:inline-flex bg-primary hover:bg-primary-container text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
            >
              Vraag Advies Aan
            </button>
            <button
              onClick={onClose}
              className="p-2 text-primary hover:bg-surface-container-low rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-12 bg-surface">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4 datum-line pl-6">
                {project.title}
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-secondary shadow-card w-full max-w-sm">
                <span className="block text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                  Status
                </span>
                <span className="text-base font-bold text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[21/9] w-full rounded-xl overflow-hidden shadow-elevated relative bg-surface-container-highest">
            <img
              src={project.heroImage || project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Bento Grid (4 Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-6 rounded-xl shadow-card border-t-2 border-primary/10 flex flex-col justify-between"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary mb-2 block">
                  {stat.label}
                </span>
                <span className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Narrative & Quote Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-primary tracking-tight">
                Visie en Realisatie
              </h3>
              <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
                {project.narrative.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Expertises */}
              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Kerncompetenties ingezet:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyExpertises.map((exp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-lowest text-primary text-xs md:text-sm font-medium border border-surface-container-high"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-5">
              <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden shadow-elevated">
                <Quote className="w-10 h-10 text-secondary-container opacity-80 mb-4" />
                <blockquote className="text-base md:text-lg font-medium italic mb-6 leading-relaxed">
                  "{project.clientQuote.quote}"
                </blockquote>
                <div className="h-[2px] w-10 bg-secondary mb-3" />
                <p className="font-bold text-xs uppercase tracking-widest text-white">
                  {project.clientQuote.author}
                </p>
                <p className="text-primary-fixed-dim text-xs mt-0.5">
                  {project.clientQuote.organization}
                </p>
              </div>
            </div>
          </div>

          {/* Project Gallery if available */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-surface-container-high">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-primary">Projectgalerij</h3>
                <div className="h-px flex-grow bg-surface-container-highest" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedLightboxImage(img)}
                    className="group relative overflow-hidden rounded-xl shadow-card aspect-[4/3] cursor-pointer bg-surface-container-highest"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-white">
                      <h4 className="text-base font-bold mb-0.5">{img.title}</h4>
                      <p className="text-xs text-primary-fixed-dim">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-surface-container-high flex flex-wrap justify-between items-center gap-4">
            <span className="text-xs text-on-surface-variant font-medium">
              Vastgoedadvies & projectmanagement op maat
            </span>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors"
              >
                Sluiten
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-lg text-sm font-bold bg-primary hover:bg-primary-container text-white transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Bespreek dit type project</span>
                <ArrowRight className="w-4 h-4 text-secondary-container" />
              </button>
            </div>
          </div>
        </div>

        {/* Lightbox zoom modal */}
        {selectedLightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedLightboxImage(null)}
          >
            <div className="max-w-4xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedLightboxImage.url}
                alt={selectedLightboxImage.title}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
              <div className="p-5 bg-primary text-white flex justify-between items-center">
                <div>
                  <h4 className="text-base font-bold">{selectedLightboxImage.title}</h4>
                  <p className="text-xs text-primary-fixed-dim">{selectedLightboxImage.caption}</p>
                </div>
                <button
                  onClick={() => setSelectedLightboxImage(null)}
                  className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg text-xs font-semibold"
                >
                  Sluiten
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
