'use client'

import { motion } from 'framer-motion'

const excursions = [
  {
    title: 'Ultimate Adventure',
    description: 'Our expertly crafted journeys across Tanzania, Rwanda, and Uganda promise unforgettable experiences: from iconic wildlife encounters to breathtaking landscapes, all within the finest luxury safari settings.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Serengeti Migration',
    description: 'Witness the greatest wildlife spectacle on earth as millions of wildebeest and zebras thunder across the plains of the Serengeti in search of fresh grazing.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cultural Immersion',
    description: 'Connect with Tanzania\'s rich cultural heritage through authentic interactions with local communities, from Maasai villages to ancient rock art sites.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export default function Excursions() {
  return (
    <section id="excursions" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Get Inspired</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse some of our most well-known excursions and get in contact to start planning your very own adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {excursions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}