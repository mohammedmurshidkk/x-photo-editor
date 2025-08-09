import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeatureCard = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg text-center flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:border-blue-400"
      data-hover
    >
      <div className="text-4xl text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  )
}

export default FeatureCard
