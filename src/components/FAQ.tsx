import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { FAQ_LIST, COMPANY_INFO } from '../data/landingData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-900 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#EAB308] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#F97316]" /> Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-[#EAB308]">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about hiring scaffolding with SBO Scaffolding Services in Leeds.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-[#EAB308] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#EAB308]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-700/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Simon Direct Box */}
        <div className="mt-12 text-center bg-slate-800/60 border border-slate-700 p-6 rounded-2xl space-y-3">
          <p className="text-sm text-slate-200 font-medium">
            Have a specific scaffolding question or complex site setup?
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Ask Simon Directly ({COMPANY_INFO.phoneFormatted})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
