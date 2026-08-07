import React from 'react';
import { Phone, MapPin, Clock, HardHat, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EAB308] to-[#F97316] rounded-xl flex items-center justify-center">
                <HardHat className="w-6 h-6 text-slate-950 stroke-[2.2]" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {COMPANY_INFO.tagline}. Your trusted local scaffolding contractor for domestic house access, commercial tower hire, and emergency builder takeover support across West Yorkshire.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-[#EAB308]">
              <ShieldCheck className="w-4 h-4 text-[#F97316]" />
              <span>CITB / CISRS Certified • £5M Public Liability Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#EAB308]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-simon" className="hover:text-white transition-colors">Why Choose Simon</a></li>
              <li><a href="#customer-story" className="hover:text-white transition-colors">Tony Green's Review</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Hire Cost Calculator</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Areas Served in Leeds</a></li>
            </ul>
          </div>

          {/* Contact Details required by user prompt */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#EAB308]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EAB308] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold hover:underline">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded font-extrabold border border-emerald-500/30">
                  {COMPANY_INFO.openingHours}
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright Notice */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Providing scaffolding hire in Churwell, Morley, Beeston, Horsforth, Pudsey & all Leeds.
          </p>
        </div>

      </div>
    </footer>
  );
};
