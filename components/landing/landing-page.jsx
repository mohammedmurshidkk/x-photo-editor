'use client';

import React from 'react';
import CustomCursor from './custom-cursor';
import FloatingShapes from './floating-shapes';
import HeroSection from './hero-section';
import FeatureCard from './feature-card';
import InteractiveStats from './interactive-stats';

const features = [
  {
    icon: '✨',
    title: 'Neural Background Removal',
    description:
      'Instantly remove backgrounds with our advanced AI, trained on millions of images for surgical precision.',
    delay: 0.1,
  },
  {
    icon: '🚀',
    title: 'Quantum Upscaling',
    description:
      'Enlarge your images up to 8x without losing quality, perfect for print and high-resolution displays.',
    delay: 0.2,
  },
  {
    icon: '🎨',
    title: 'AI Style Transfer',
    description:
      'Transform your photos into works of art by applying the styles of famous painters or custom artistic filters.',
    delay: 0.3,
  },
];

import Contact from './contact';
import Pricing from '../pricing';

const LandingPage = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <CustomCursor />
      <FloatingShapes />
      <main>
        <HeroSection />
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              A New Dimension of Editing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <InteractiveStats />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
};

export default LandingPage;
