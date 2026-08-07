import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Phone } from 'lucide-react';
import { LEEDS_AREAS, COMPANY_INFO } from '../data/landingData';

export const CoverageArea: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-[#1E293B] relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#F97316] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#EAB308]" /> Local Leeds Base
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Areas We Serve Across <span className="text-[#EAB308]">Leeds & West Yorkshire</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Based locally at <strong>31 Hepworth Ave, Churwell (LS27 7RH)</strong>, Simon and the SBO team provide rapid 24/7 dispatch across all Leeds postcodes.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Left: Address & Emergency Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#EAB308]/20 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-[#EAB308]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Headquarters</span>
                  <h3 className="text-lg font-black text-white">{COMPANY_INFO.name}</h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#EAB308] shrink-0" />
                  <span className="text-emerald-400 font-bold">{COMPANY_INFO.openingHours}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span className="text-white font-bold">{COMPANY_INFO.phoneDisplay}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Simon Now (24/7 Emergency)</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 font-bold text-[#EAB308]">
                <ShieldCheck className="w-4 h-4" /> 30–60 Minute Rapid Response
              </div>
              <p>For urgent storm damage, unstable chimney stacks, or immediate builder takeover in Leeds.</p>
            </div>
          </div>

          {/* Right: Interactive Area Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-extrabold text-white mb-4">
              Key Districts Covered with Zero Travel Surcharges:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {LEEDS_AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-700/80 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold text-slate-200 hover:border-amber-500/60 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 mt-6 italic">
              * Don't see your exact street listed? We cover all of West Yorkshire within a 25-mile radius of Leeds!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
