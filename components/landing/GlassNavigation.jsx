import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'Features', 'Pricing', 'Contact'];

const GlassNavigation = () => {
  const [active, setActive] = useState('Home');

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg">
        <ul className="flex items-center gap-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`relative text-sm font-medium transition-colors duration-300 ${active === link ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {link}
                {active === link && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-x-0 bottom-[-8px] h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default GlassNavigation;
