import React from 'react'
import { motion } from 'framer-motion'

const FloatingShapes = () => {
  const shapes = [
    {
      id: 1,
      style: {
        width: '36rem',
        height: '36rem',
        top: '-10rem',
        right: '-10rem',
      },
      gradient: 'from-blue-500 via-purple-500 to-cyan-500',
    },
    {
      id: 2,
      style: {
        width: '24rem',
        height: '24rem',
        bottom: '-5rem',
        left: '-5rem',
      },
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
    },
    {
      id: 3,
      style: {
        width: '30rem',
        height: '30rem',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      gradient: 'from-green-400 via-teal-500 to-blue-600',
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.gradient} bg-gradient-to-r rounded-full blur-3xl opacity-30 animate-pulse`}
          style={shape.style}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
