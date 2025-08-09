import { PricingTable } from '@clerk/clerk-react';
import { clerkTheme } from '@/app/clerk-theme';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Pricing That Scales With You
        </h2>
        <PricingTable appearance={clerkTheme} />
      </div>
    </section>
  );
};

export default Pricing;