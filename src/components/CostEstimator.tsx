import React, { useState } from 'react';
import { Calculator, Check, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface CostEstimatorProps {
  onLockInQuote: (estimateDetails: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onLockInQuote }) => {
  const [projectType, setProjectType] = useState<'chimney' | 'semi' | 'detached' | 'extension' | 'commercial'>('semi');
  const [sides, setSides] = useState<number>(1);
  const [durationWeeks, setDurationWeeks] = useState<number>(2);
  const [needPermit, setNeedPermit] = useState<boolean>(false);

  // Calculation Logic for estimated range
  const calculateEstimate = () => {
    let basePrice = 280; // Base rate in GBP
    
    switch (projectType) {
      case 'chimney':
        basePrice = 220;
        break;
      case 'semi':
        basePrice = 320;
        break;
      case 'detached':
        basePrice = 450;
        break;
      case 'extension':
        basePrice = 290;
        break;
      case 'commercial':
        basePrice = 550;
        break;
    }

    const sideMultiplier = 1 + (sides - 1) * 0.45;
    const weekMultiplier = 1 + (durationWeeks - 1) * 0.25;
    const permitFee = needPermit ? 85 : 0; // Leeds council permit fee estimation

    const estimatedTotal = Math.round((basePrice * sideMultiplier * weekMultiplier) + permitFee);
    const lowEstimate = Math.round(estimatedTotal * 0.9);
    const highEstimate = Math.round(estimatedTotal * 1.12);

    return { lowEstimate, highEstimate, estimatedTotal };
  };

  const { lowEstimate, highEstimate, estimatedTotal } = calculateEstimate();

  const handleBookEstimate = () => {
    const pNames = {
      chimney: 'Chimney Stack Tower',
      semi: '2-Story Semi-Detached House',
      detached: 'Full Detached Property',
      extension: 'Extension / Loft Access',
      commercial: 'Commercial / Trade Site',
    };

    const details = `Project: ${pNames[projectType]}, Sides: ${sides}, Duration: ${durationWeeks} weeks, Pavement Permit: ${needPermit ? 'Yes' : 'No Driveway'}, Estimated: £${lowEstimate} - £${highEstimate}`;
    onLockInQuote(details);
  };

  return (
    <section id="estimator" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-amber-500/30 text-[#EAB308] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#F97316]" /> Instant Estimate Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Scaffolding <span className="text-[#EAB308]">Hire Cost</span> Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Get an instant estimated price range for your Leeds project in under 30 seconds. No obligation.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Side: Interactive Controls */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Select Property / Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'chimney', label: 'Chimney Tower' },
                  { id: 'semi', label: 'Semi-Detached' },
                  { id: 'detached', label: 'Detached House' },
                  { id: 'extension', label: 'Extension / Loft' },
                  { id: 'commercial', label: 'Commercial Site' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border text-left transition-all ${
                      projectType === item.id
                        ? 'bg-[#EAB308] text-slate-950 border-[#EAB308] shadow-md shadow-yellow-500/20'
                        : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Number of Sides */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                  2. Number of Elevational Sides
                </label>
                <span className="text-xs text-[#EAB308] font-bold">{sides} {sides === 1 ? 'Elevation Side' : 'Elevation Sides'}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSides(num)}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-extrabold border transition-all ${
                      sides === num
                        ? 'bg-[#F97316] text-white border-[#F97316]'
                        : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {num} {num === 1 ? 'Side' : 'Sides'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Estimated Duration */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                  3. Expected Hire Duration
                </label>
                <span className="text-xs text-[#EAB308] font-bold">{durationWeeks} {durationWeeks === 1 ? 'Week' : 'Weeks'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={durationWeeks}
                onChange={(e) => setDurationWeeks(parseInt(e.target.value))}
                className="w-full accent-[#EAB308] bg-slate-900 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>1 Week</span>
                <span>2 Weeks</span>
                <span>4 Weeks</span>
                <span>8+ Weeks (Flexible Rate)</span>
              </div>
            </div>

            {/* Step 4: Pavement Permit Toggle */}
            <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200 block">Sits on Public Pavement?</span>
                <span className="text-[11px] text-slate-400">Requires Leeds City Council Highway Permit</span>
              </div>
              <button
                type="button"
                onClick={() => setNeedPermit(!needPermit)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold border transition-colors ${
                  needPermit
                    ? 'bg-amber-500/20 text-[#EAB308] border-[#EAB308]'
                    : 'bg-slate-900 text-slate-400 border-slate-700'
                }`}
              >
                {needPermit ? '✓ Permit Included' : 'Private Property (No Permit)'}
              </button>
            </div>

          </div>

          {/* Right Side: Estimated Total & CTA */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-[#EAB308] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Local Rate</span>
              </div>
              <h3 className="text-xl font-black text-white">Your Project Estimate Range</h3>
              <p className="text-xs text-slate-300">
                Includes delivery, full erection, TG20 safety signoff, and dismantling.
              </p>
            </div>

            {/* Price Display Box */}
            <div className="bg-slate-950/80 border border-slate-700/80 p-6 rounded-2xl text-center space-y-1">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                Estimated Total Hire Price
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#EAB308] tracking-tight">
                £{lowEstimate} – £{highEstimate}
              </div>
              <span className="text-xs text-slate-400 block pt-1">
                + VAT (Transparent weekly breakdown)
              </span>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F97316]" />
                <span>Free site visit by Simon before setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F97316]" />
                <span>Full £5M Public Liability Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F97316]" />
                <span>Zero extension penalty rate guarantee</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleBookEstimate}
                className="w-full bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black py-4 rounded-xl flex items-center justify-center gap-2 text-base shadow-lg shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Lock In This Rate With Simon</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-slate-900 hover:bg-slate-950 text-white font-bold py-3 rounded-xl border border-slate-700 flex items-center justify-center gap-2 text-xs text-center transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F97316]" />
                <span>Or Call Simon Immediately: {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
