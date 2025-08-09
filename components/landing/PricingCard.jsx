import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingCard = ({ plan, price, features, featured, buttonText, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay }}
      className={`relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg flex flex-col ${featured ? 'border-blue-400 scale-105' : ''}`}
      data-hover
    >
      {featured && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white text-center mb-2">{plan}</h3>
      <p className="text-4xl font-bold text-center mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">${price}</span>
        <span className="text-slate-400 text-sm">/mo</span>
      </p>
      <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`w-full text-center py-3 font-semibold rounded-lg transition-all duration-300 ${featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/10 text-white hover:bg-white/20'}`}
      >
        {buttonText}
      </a>
    </motion.div>
  );
};

export default PricingCard;
