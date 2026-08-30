import React from 'react';
import { X, CheckCircle2, Award, Calendar, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { siteData } from '../data/content';

export default function ProjectModal({ projectId, onClose, onOpenContact }) {
  if (!projectId) return null;

  // Search in flagship or create dynamic details for selected sector
  const project = siteData.flagshipProject;
  const sector = siteData.sectors.find((s) => s.projectId === projectId) || siteData.sectors[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh] border border-surface-container-high"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 bg-primary text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="bg-secondary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {sector.category}
            </span>
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">
              {sector.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8">
          {/* Main Image */}
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-card">
            <img
              src={sector.image}
              alt={sector.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description & Overview */}
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
              {sector.subtitle}
            </h4>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
              {sector.description}
            </p>
          </div>

          {/* Key Deliverables & Outcomes */}
          <div className="bg-surface-container-low p-6 md:p-8 rounded-xl space-y-4 border border-surface-container-high">
            <h5 className="font-bold text-primary text-base uppercase tracking-wider">
              Projectresultaten & Focusgebieden:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-primary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Integrale processturing & UAV-GC contracten</span>
              </div>
              <div className="flex items-center gap-2.5 text-primary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Bewaakt binnen budget en strakke planning</span>
              </div>
              <div className="flex items-center gap-2.5 text-primary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>BREEAM & Paris Proof duurzaamheidsdoelstellingen</span>
              </div>
              <div className="flex items-center gap-2.5 text-primary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Hoogwaardige stakeholder-afstemming</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-surface-container-high">
            <span className="text-xs text-on-surface-variant font-medium">
              Vastgoedadvies op maat voor {sector.category}
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
                className="px-6 py-2.5 rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Bespreek uw project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
