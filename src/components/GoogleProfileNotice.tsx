import React from 'react';
import { Info, Phone, Clock, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

export const GoogleProfileNotice: React.FC = () => {
  return (
    <section className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-amber-500/40 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-5 h-5 text-[#EAB308]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-2">
                <span>Google Profile & Opening Hours Notice</span>
                <span className="bg-amber-500/20 text-[#EAB308] text-[10px] px-2 py-0.5 rounded font-bold">
                  24/7 OPERATIONAL
                </span>
              </h4>
              {/* Exact requirement from user prompt */}
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                Please note: We are open and accepting calls 24 hours a day, 7 days a week. Even if technical glitches or automated edits on Google business profiles occasionally show altered hours, Simon and the SBO Scaffolding team are always fully active, on call, and dispatching crews 24/7 across Leeds.
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="shrink-0 bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 fill-slate-950" />
            <span>Call 24/7: {COMPANY_INFO.phoneFormatted}</span>
          </a>

        </div>
      </div>
    </section>
  );
};
