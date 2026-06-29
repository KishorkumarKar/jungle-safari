'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Cultural Heritage',
    description: 'Leave a lasting imprint on your journey as you immerse yourself in the rich traditions and vibrant cultures of Tanzania. From the Maasai to the Hadzabe, connect deeply with the people who call this land home.',
    icon: '🏛️'
  },
  {
    title: 'Sustainable Travel',
    description: 'Grow your connection to the Earth with eco-conscious trips that nurture the environment. Our sustainable travel initiatives ensure that every step you take helps preserve Tanzania\'s natural beauty for generations to come.',
    icon: '🌿'
  },
  {
    title: 'Community Impact',
    description: 'Travel with a heart. Our tours are designed to benefit local communities, providing support to small businesses and fostering education and healthcare initiatives in the regions you visit.',
    icon: '🤝'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}