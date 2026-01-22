import React from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { TechSection } from '@/components/landing/TechSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/layout/Footer';

const Landing: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <FeaturesGrid />
        <TechSection />
        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Landing;
