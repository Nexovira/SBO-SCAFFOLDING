import React from 'react';
import { Phone, Calculator, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1E293B]/95 backdrop-blur-md border-t border-slate-700 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onOpenQuoteModal}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 px-3 rounded-xl border border-slate-600 text-xs flex items-center justify-center gap-1.5"
        >
          <Calculator className="w-4 h-4 text-[#F97316]" />
          <span>Cost Estimator</span>
        </button>

        <a
          id="mobile-sticky-call-btn"
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="bg-[#EAB308] active:bg-[#d9a307] text-slate-950 font-black py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-yellow-500/20"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call Simon ({COMPANY_INFO.phoneFormatted})</span>
        </a>
      </div>
    </div>
  );
};
