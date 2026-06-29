'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '3+', label: 'Countries' },
  { number: '2k+', label: 'Satisfied Clients' },
  { number: '20+', label: 'Years of Experience' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">{stat.number}</div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}