'use client';

import React from 'react';
import CustomCursor from './custom-cursor';
import FloatingShapes from './floating-shapes';
import GlassNavigation from './glass-navigation';
import HeroSection from './hero-section';
import FeatureCard from './feature-card';
import InteractiveStats from './interactive-stats';
import PricingCard from './pricing-card';

const features = [
  {
    icon: '✨',
    title: 'Neural Background Removal',
    description: 'Instantly remove backgrounds with our advanced AI, trained on millions of images for surgical precision.',
    delay: 0.1,
  },
  {
    icon: '🚀',
    title: 'Quantum Upscaling',
    description: 'Enlarge your images up to 8x without losing quality, perfect for print and high-resolution displays.',
    delay: 0.2,
  },
  {
    icon: '🎨',
    title: 'AI Style Transfer',
    description: 'Transform your photos into works of art by applying the styles of famous painters or custom artistic filters.',
    delay: 0.3,
  },
];

const pricingPlans = [
  {
    plan: 'Creator',
    price: 12,
    features: ['500 AI Credits/mo', 'Standard Resolution Exports', 'Community Support'],
    buttonText: 'Get Started',
    delay: 0.1,
  },
  {
    plan: 'Pro',
    price: 25,
    features: [
      '1500 AI Credits/mo',
      '4K Resolution Exports',
      'Priority Support',
      'API Access',
    ],
    featured: true,
    buttonText: 'Choose Pro',
    delay: 0.2,
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited AI Credits',
      'Dedicated Infrastructure',
      '24/7/365 Support',
      'Custom Model Training',
    ],
    buttonText: 'Contact Us',
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
      {/* <GlassNavigation /> */}
      <main>
        <HeroSection />
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">A New Dimension of Editing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <InteractiveStats />
        <Pricing />
        {/* <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Pricing That Scales With You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.plan} {...plan} />
              ))}
            </div>
          </div>
        </section> */}
        <Contact />
      </main>
    </div>
  );
};

export default LandingPage;
