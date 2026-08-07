import React from 'react';
import { Phone, CheckCircle2, ShieldCheck, Clock, MapPin, Award, Star, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative bg-[#1E293B] text-white overflow-hidden pt-10 pb-16 lg:py-24 border-b border-slate-800">
      
      {/* Visual Accent Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Local Trust Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EAB308]"></span>
              </span>
              <span className="text-[#EAB308] font-bold">24/7 LOCAL RESPONSE</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Churwell, Morley & All Leeds</span>
            </div>

            {/* Heavy Bold Heading - Geometric Balance styling with signature underline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Reliable & Affordable <br className="hidden sm:inline" />
              <span className="text-yellow-500 underline decoration-4 underline-offset-8 decoration-yellow-500">
                Scaffolding Services
              </span> in Leeds
            </h1>

            {/* Subtitle - Emphasizing 24/7 availability, rapid response, customer-first pricing */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              From fast domestic chimney repairs to full house wraps and long-term trade hire. 
              <strong className="text-white font-semibold"> Simon and the SBO team</strong> deliver 24/7 rapid response, 
              CITB-certified safety, and honest customer-first pricing with zero hidden extension penalties.
            </p>

            {/* Key Value Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2.5 text-slate-200 text-sm sm:text-base font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#EAB308] shrink-0" />
                <span>24/7 Rapid Emergency Setup</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm sm:text-base font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#EAB308] shrink-0" />
                <span>£5M Public Liability Insurance</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm sm:text-base font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#EAB308] shrink-0" />
                <span>Fair Rates if Projects Get Delayed</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm sm:text-base font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#EAB308] shrink-0" />
                <span>Speak Direct to Simon (No Middlemen)</span>
              </div>
            </div>

            {/* Prominent CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              
              {/* Direct Click-To-Call Button with requested phone number */}
              <a
                id="hero-call-simon-btn"
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-950/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 fill-slate-950" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider font-extrabold text-slate-900/80">
                    Call Simon Direct (24/7)
                  </span>
                  <span className="text-xl font-black">{COMPANY_INFO.phoneDisplay}</span>
                </div>
              </a>

              {/* Get Instant Free Quote Button */}
              <button
                onClick={onOpenQuoteModal}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-6 py-4 rounded-2xl border border-slate-700 hover:border-slate-500 flex items-center justify-center gap-2 transition-all shadow-lg group"
              >
                <span>Request Free Callback</span>
                <ArrowRight className="w-5 h-5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Local Trust Badges Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <MapPin className="w-4 h-4 text-[#F97316]" /> Based at 31 Hepworth Ave, LS27
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Award className="w-4 h-4 text-[#EAB308]" /> CITB & CISRS Trained
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#F97316]" /> 100% Fully Compliant
              </span>
            </div>

          </div>

          {/* Right Column - Hero Visual & Quick Call Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-slate-800 shadow-2xl group">
              
              {/* Hero Background Image */}
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
                alt="SBO Scaffolding Services in Leeds"
                className="w-full h-[380px] sm:h-[460px] object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/40 to-transparent" />

              {/* Top Floating Badge: Google 5 Stars */}
              <div className="absolute top-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="bg-[#EAB308] text-slate-950 font-black text-xs px-2.5 py-1 rounded-md">
                    5.0 ★
                  </div>
                  <div className="flex text-[#EAB308]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EAB308]" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-slate-300 font-semibold">Google Verified Local Reputation</span>
              </div>

              {/* Bottom Card Content inside Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-5 rounded-2xl border border-amber-500/30 shadow-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#EAB308] uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Open 24 Hours
                  </span>
                  <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Crew On Standby
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-100">
                  "Simon was a lifesaver when our builder left us in the lurch. Kept scaffolding up for a great price."
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
                  <span className="font-semibold text-white">— Tony Green, Leeds</span>
                  <a href="#customer-story" className="text-[#EAB308] underline font-bold hover:text-white">
                    Read Story →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
