'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Welcome to Jungle Safari Company
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              where we curate life-changing journeys through Tanzania's hidden wildlife reserves.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Immerse yourself in the epitome of luxury at our exclusive safari lodges, where the wild beauty of Africa unfolds before you. As evening falls, the rhythm of tribal drums sets the stage for enchanting performances, while gourmet dining and fine wines make each night unforgettable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every detail of your safari is tailored to create an extraordinary and seamless adventure in the heart of the African wilderness.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury safari lodge" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full -z-10 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}