import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const AnimatedCounter = ({ target, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = target
      const increment = end / (duration * 60)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, target, duration])

  return (
    <span
      ref={ref}
      className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { id: 1, value: 10, suffix: 'M+', label: 'Images Processed' },
  { id: 2, value: 99, suffix: '.9%', label: 'Uptime Guarantee' },
  { id: 3, value: 200, suffix: 'K+', label: 'Happy Creators' },
]

const InteractiveStats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-5xl md:text-6xl font-bold">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-slate-400 mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveStats
