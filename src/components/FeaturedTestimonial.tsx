import React from 'react';
import { Star, Quote, CheckCircle, HeartHandshake, Phone, Shield } from 'lucide-react';
import { STANDOUT_TESTIMONIAL, ADDITIONAL_REVIEWS, COMPANY_INFO } from '../data/landingData';

export const FeaturedTestimonial: React.FC = () => {
  return (
    <section id="customer-story" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden border-t border-slate-800">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-amber-500/30 text-[#EAB308] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-[#F97316]" /> Real Customer Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How Simon Helps Homeowners <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-[#F97316]">
              When Things Go Wrong
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Building works don't always go to plan, but SBO Scaffolding Services stands by you with fair prices and genuine local support.
          </p>
        </div>

        {/* Special Featured Testimonial Card required by user prompt */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-slate-800/95 border-2 border-[#EAB308] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-yellow-500/10 overflow-hidden">
            
            {/* Top Right Quote Icon */}
            <Quote className="absolute top-6 right-6 w-20 h-20 text-amber-500/10 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Star Rating & Verified Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-[#EAB308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#EAB308]" />
                  ))}
                  <span className="ml-2 font-black text-white text-base">5.0 / 5.0</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{STANDOUT_TESTIMONIAL.date}</span>
                </div>
              </div>

              {/* Exact Requested Review Heading */}
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                "{STANDOUT_TESTIMONIAL.title}"
              </h3>

              {/* Exact Requested Review Quote Text */}
              <blockquote className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed italic border-l-4 border-[#F97316] pl-4 sm:pl-6 my-4">
                "{STANDOUT_TESTIMONIAL.text}"
              </blockquote>

              {/* Author Attribution */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/80">
                <div>
                  <h4 className="text-lg font-black text-white">
                    — {STANDOUT_TESTIMONIAL.author}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {STANDOUT_TESTIMONIAL.location} • Homeowner Review
                  </p>
                </div>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hidden sm:flex items-center gap-2 bg-[#EAB308] hover:bg-[#d9a307] text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition-transform hover:scale-105"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Speak to Simon</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Additional Local Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ADDITIONAL_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-500 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#EAB308]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EAB308]" />
                  ))}
                </div>
                <h4 className="font-bold text-white text-base">"{rev.title}"</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="text-slate-200 font-semibold">{rev.author}</span>
                <span className="text-emerald-400">✓ Google Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
