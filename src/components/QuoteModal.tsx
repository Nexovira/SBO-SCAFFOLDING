import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle, HardHat, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledService }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    projectType: prefilledService || 'Domestic Access',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#1E293B] border-2 border-[#EAB308] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#EAB308] text-xs font-bold uppercase tracking-wider">
                <HardHat className="w-4 h-4" /> Speak Direct with Simon
              </div>
              <h3 className="text-2xl font-black text-white">
                Request Free Fast Quote
              </h3>
              <p className="text-xs text-slate-300">
                Enter your phone number below and Simon will call you back within 15 minutes with a zero-obligation verbal estimate.
              </p>
            </div>

            {/* Direct Phone Call Banner */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 p-4 rounded-2xl font-black flex items-center justify-between text-sm shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 fill-slate-950" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider opacity-80">Instant Call</span>
                  <span className="text-base font-black">{COMPANY_INFO.phoneDisplay}</span>
                </div>
              </div>
              <span className="text-xs bg-slate-950 text-[#EAB308] px-2.5 py-1 rounded-lg">
                24/7 LIVE
              </span>
            </a>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-700"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-xs font-semibold uppercase">Or Leave Callback Info</span>
              <div className="flex-grow border-t border-slate-700"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#EAB308] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#EAB308] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Leeds Postcode</label>
                  <input
                    type="text"
                    placeholder="e.g. LS27"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#EAB308] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Brief Project Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Chimney repair scaffolding needed for 2 weeks..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:border-[#EAB308] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Submit Callback Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-950 text-emerald-400 border border-emerald-500/40 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">Callback Request Received!</h3>
            <p className="text-sm text-slate-300">
              Thank you {formData.name || 'there'}. Simon will review your details and call you at <strong className="text-white">{formData.phone}</strong> shortly.
            </p>
            <div className="pt-4 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-[#EAB308] text-slate-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase"
              >
                <Phone className="w-4 h-4" />
                <span>Call Simon Immediately Now ({COMPANY_INFO.phoneFormatted})</span>
              </a>
              <button
                onClick={onClose}
                className="w-full bg-slate-800 text-slate-300 py-2 rounded-xl text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
