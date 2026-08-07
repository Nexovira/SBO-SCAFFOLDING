import React, { useState } from 'react';
import { Phone, HardHat, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1E293B]/95 backdrop-blur-md border-b border-slate-700/60 shadow-xl">
      {/* Top Emergency Announcement Bar */}
      <div className="bg-[#F97316] text-white text-xs sm:text-sm font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
        <Clock className="w-4 h-4 inline-block" />
        <span>Need Urgent Scaffolding in Leeds? Simon & Crew Available 24/7</span>
        <a 
          href={`tel:${COMPANY_INFO.phoneRaw}`} 
          className="underline font-bold hover:text-slate-900 transition-colors ml-1 hidden sm:inline-block"
        >
          Call {COMPANY_INFO.phoneFormatted}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Placeholder / Brand Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#EAB308] flex items-center justify-center font-black text-slate-900 rounded-sm shadow-md group-hover:bg-yellow-400 transition-colors">
              <span className="text-lg font-black tracking-tighter">SBO</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white block leading-none">
                SBO <span className="text-[#EAB308]">SCAFFOLDING</span>
              </span>
              <span className="text-[11px] text-slate-300 font-semibold tracking-wider flex items-center gap-1 uppercase mt-0.5">
                <ShieldCheck className="w-3 h-3 text-[#F97316]" /> LEEDS & WEST YORKSHIRE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide text-slate-300">
            <a 
              href="#services" 
              className="hover:text-[#EAB308] transition-colors"
            >
              Our Services
            </a>
            <a 
              href="#why-simon" 
              className="hover:text-[#EAB308] transition-colors"
            >
              Why Simon
            </a>
            <a 
              href="#customer-story" 
              className="hover:text-[#EAB308] transition-colors"
            >
              Customer Story
            </a>
            <a 
              href="#estimator" 
              className="hover:text-[#EAB308] transition-colors"
            >
              Cost Estimator
            </a>
            <a 
              href="#areas" 
              className="hover:text-[#EAB308] transition-colors"
            >
              Areas Served
            </a>
          </nav>

          {/* Call Simon Direct CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="text-slate-300 hover:text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors border border-slate-700 hover:border-slate-500"
            >
              Get Quick Estimate
            </button>
            <a
              id="header-call-simon-btn"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black px-5 py-3 rounded-xl shadow-lg shadow-yellow-500/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm tracking-wide"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call Simon Direct</span>
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-[#EAB308] text-slate-950 font-extrabold text-xs px-3 py-2 rounded-lg flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-slate-800 border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E293B] border-b border-slate-700 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 font-medium hover:bg-slate-800"
          >
            Our Services
          </a>
          <a
            href="#why-simon"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 font-medium hover:bg-slate-800"
          >
            Why Choose Simon
          </a>
          <a
            href="#customer-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 font-medium hover:bg-slate-800"
          >
            Customer Story
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 font-medium hover:bg-slate-800"
          >
            Cost Estimator
          </a>
          <a
            href="#areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-200 font-medium hover:bg-slate-800"
          >
            Areas Served in Leeds
          </a>
          
          <div className="pt-2 border-t border-slate-700 space-y-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Simon Direct ({COMPANY_INFO.phoneFormatted})</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-xl border border-slate-600 text-center text-sm"
            >
              Request Free Call Back
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
