import React from 'react';
import { Star, ShieldCheck, ThumbsUp, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

export const ReputationBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-10 border-y border-amber-500/20 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-amber-500/10 to-orange-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/90 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: Visually Striking Badge required by prompt */}
            <div className="flex items-center gap-5 text-center md:text-left">
              
              {/* Glowing Google Badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#EAB308] to-[#F97316] rounded-2xl p-0.5 shadow-lg shadow-yellow-500/30 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-black text-[#EAB308] leading-none">
                    5.0★
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mt-0.5">
                    GOOGLE
                  </span>
                </div>
              </div>

              {/* Text & Glowing Stars */}
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1 text-[#EAB308] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 sm:w-7 sm:h-7 fill-[#EAB308] drop-shadow-[0_0_8px_rgba(234,179,8,0.7)]" 
                    />
                  ))}
                </div>
                
                {/* Requested Exact Title */}
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  5.0★ Google Rated Local Reputation
                </h2>
                
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Trusted by hundreds of homeowners, roofers, and trade builders across Leeds & Churwell.
                </p>
              </div>

            </div>

            {/* Right: Quick Stat Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-8">
              
              <div className="bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-700/80 text-center min-w-[120px]">
                <span className="block text-xl font-black text-[#EAB308]">100%</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Safety Record</span>
              </div>

              <div className="bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-700/80 text-center min-w-[120px]">
                <span className="block text-xl font-black text-[#F97316]">24/7</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Call Response</span>
              </div>

              <div className="bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-700/80 text-center min-w-[120px]">
                <span className="block text-xl font-black text-white">£5M</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Public Liability</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
