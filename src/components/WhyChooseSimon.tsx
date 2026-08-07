import React from 'react';
import { UserCheck, ShieldAlert, ShieldCheck, BadgePercent, Phone, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_SIMON, COMPANY_INFO } from '../data/landingData';

interface WhyChooseSimonProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseSimon: React.FC<WhyChooseSimonProps> = ({ onOpenQuoteModal }) => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-7 h-7 text-[#EAB308]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-[#F97316]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#EAB308]" />;
      case 'BadgePercent':
        return <BadgePercent className="w-7 h-7 text-[#F97316]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#EAB308]" />;
    }
  };

  return (
    <section id="why-simon" className="py-20 bg-[#1E293B] relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#F97316] text-xs font-bold uppercase tracking-wider">
            Local High-Trust Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Leeds Chooses <span className="text-[#EAB308]">Simon & SBO</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            When you hire scaffolding, you need reliability, safety, and a contractor who respects your timeline and property. Here is why SBO is Leeds' top-rated local hire service.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WHY_CHOOSE_SIMON.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/90 border border-slate-700/80 hover:border-amber-500/60 p-6 rounded-3xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 text-xs font-semibold text-[#EAB308] flex items-center gap-1">
                <span>Guaranteed Standard</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">100% Local</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action Strip */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-2 border-amber-500/30 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Have a scaffolding question or need advice on your site?
            </h3>
            <p className="text-sm text-slate-300">
              Call Simon right now for an honest, friendly chat and an instant verbal quote.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call Simon ({COMPANY_INFO.phoneFormatted})</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3.5 rounded-xl border border-slate-600 text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Get Price Estimate</span>
              <ArrowRight className="w-4 h-4 text-[#F97316]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
