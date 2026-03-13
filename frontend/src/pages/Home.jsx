import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ChallengesSection } from '@/components/ChallengesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyCPEvalProSection } from '@/components/WhyCPEvalProSection';
import { PricingSection } from '@/components/PricingSection';
import { ContactSection } from '@/components/ContactSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <ProcessSection />
      <WhyCPEvalProSection />
      <PricingSection />
      <ContactSection />
    </>
  );
};

export default Home;
