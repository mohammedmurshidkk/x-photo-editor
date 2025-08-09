'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-slate-400 mb-12">
          Have questions or want to work with us? Drop us a message.
        </p>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 border border-white/20 rounded-full py-3 px-6 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white/10 border border-white/20 rounded-full py-3 px-6 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="bg-white/10 border border-white/20 rounded-3xl py-3 px-6 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
