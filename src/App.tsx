import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ReputationBanner } from './components/ReputationBanner';
import { ServicesGrid } from './components/ServicesGrid';
import { FeaturedTestimonial } from './components/FeaturedTestimonial';
import { WhyChooseSimon } from './components/WhyChooseSimon';
import { CostEstimator } from './components/CostEstimator';
import { CoverageArea } from './components/CoverageArea';
import { FAQ } from './components/FAQ';
import { GoogleProfileNotice } from './components/GoogleProfileNotice';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPrefilledService, setModalPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenModal = (serviceTitle?: string) => {
    setModalPrefilledService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleLockInQuote = (estimateDetails: string) => {
    setModalPrefilledService(estimateDetails);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#1E293B] text-slate-100 font-sans antialiased selection:bg-[#EAB308] selection:text-slate-950 pb-16 md:pb-0">
      {/* Header / Navigation */}
      <Header onOpenQuoteModal={() => handleOpenModal()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenModal()} />

        {/* 5-Star Google Reputation Banner */}
        <ReputationBanner />

        {/* Core Services Grid */}
        <ServicesGrid onOpenQuoteModal={(title) => handleOpenModal(title)} />

        {/* Standout Customer Story (Tony Green Testimonial) */}
        <FeaturedTestimonial />

        {/* Why Choose Simon & SBO Difference */}
        <WhyChooseSimon onOpenQuoteModal={() => handleOpenModal()} />

        {/* Interactive Cost Estimator */}
        <CostEstimator onLockInQuote={handleLockInQuote} />

        {/* Areas Served in Leeds & Churwell */}
        <CoverageArea />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Google Listing & 24/7 Notice */}
        <GoogleProfileNotice />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Sticky Bar for Direct Phone Call & Quote */}
      <MobileStickyBar onOpenQuoteModal={() => handleOpenModal()} />

      {/* Pop-up Quote & Callback Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledService={modalPrefilledService}
      />
    </div>
  );
}
