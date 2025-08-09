'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useStoreUserEffect from '@/hooks/use-store-user-effect'

const HeroSection = () => {
  const { isAuthenticated } = useStoreUserEffect()

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
        >
          The Future of Image Creation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-slate-300"
        >
          Experience the next generation of photo editing with our AI-powered
          tools. Create stunning visuals, remove backgrounds instantly, and
          upscale images with quantum precision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <Link
            href={isAuthenticated ? '/dashboard' : '/sign-in'}
            className="px-8 py-4 font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            data-hover
          >
            Experience the Magic
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
