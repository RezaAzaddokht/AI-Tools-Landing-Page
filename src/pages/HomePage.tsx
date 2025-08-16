import React from 'react';
import { Hero } from '../components/sections/Hero';
import { DatasetHub } from '../components/sections/DatasetHub';
import { ChatbotPlatform } from '../components/sections/ChatbotPlatform';
import { VideoSection } from '../components/sections/VideoSection';
import { ContactUs } from '../components/sections/ContactUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <DatasetHub />
      <ChatbotPlatform />
      <Testimonials />
      <VideoSection />
      <CTA />
      <ContactUs />
    </div>
  );
};