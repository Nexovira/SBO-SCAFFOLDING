import React from 'react';
import { Building2, Home, Clock, Check, ArrowRight, Shield, Phone } from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/landingData';

interface ServicesGridProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenQuoteModal }) => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#EAB308]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#F97316]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#EAB308]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#EAB308]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#1E293B] relative overflow-hidden">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-[radial-[#334155]_1px,transparent_1px] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#EAB308] text-xs font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" /> High-Trust Local Scaffolding
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Core <span className="text-[#EAB308]">Scaffolding</span> Services
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Whether you are a homeowner tackling a chimney fix or a building contractor running a multi-week site, Simon provides fully safety-certified scaffolding tailored to your exact budget.
          </p>
        </div>

        {/* 3 Clean Cards Core Services Grid with Geometric Balance left border accent */}
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/90 rounded-2xl border border-slate-700/80 border-l-4 border-l-[#EAB308] hover:border-amber-500/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-xs font-bold text-[#EAB308]">
                    {service.badge}
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center shadow-lg">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-[#EAB308] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-700/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Included with every hire:
                    </span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Note */}
                  <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-300">
                    <strong className="text-[#EAB308] font-bold">Ideal for: </strong> {service.idealFor}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm tracking-wide"
                >
                  <span>Get Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full bg-slate-900 hover:bg-slate-950 text-slate-300 hover:text-white font-semibold py-2 rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-all text-xs text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Call Simon: {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
