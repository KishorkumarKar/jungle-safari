'use client'

import { motion } from 'framer-motion'

const accommodations = [
  { name: 'Classic', color: 'bg-blue-100', textColor: 'text-blue-800' },
  { name: 'Deluxe', color: 'bg-purple-100', textColor: 'text-purple-800' },
  { name: 'Luxury', color: 'bg-yellow-100', textColor: 'text-yellow-800' },
]

export default function Accommodations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Our Favorite Accommodations</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto my-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {accommodations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.color} p-8 rounded-xl text-center shadow-md hover:shadow-lg transition`}
            >
              <h3 className={`text-2xl font-bold ${item.textColor}`}>{item.name}</h3>
              <div className="mt-3 h-1 w-12 bg-gray-300 mx-auto"></div>
              <p className="mt-4 text-gray-600">Experience comfort and style in our {item.name.toLowerCase()} accommodations.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}