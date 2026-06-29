'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Lucy',
    text: 'We went on 5 days of safari, visited the Serengeti and the caldera of Ngoro Ngoro, Kennedy showed us many animals and birds. At lunch we had a picnic under a tree in the middle of the park! Fantastic experience, it felt like being in a movie. We stayed in a fabulous tented camp. Everything wonderful!',
    rating: 5
  },
  {
    name: 'Tom',
    text: 'We climbed Kilimanjaro and reached Uhuru Peak just as the sun rose – breathtaking, unforgettable views! The guides were incredible, keeping us motivated, positive, and safe throughout the trek. Challenging but absolutely unforgettable experience of a lifetime!',
    rating: 5
  },
  {
    name: 'Emma',
    text: 'Zanzibar was absolute paradise! We explored vibrant spice markets, snorkeled in crystal-clear turquoise waters, and relaxed on stunning white beaches. Sunset dinners with fresh seafood on the sand made it a magical and perfect trip to remember.',
    rating: 5
  },
  {
    name: 'James',
    text: 'Visiting Uganda to see the mountain gorillas was incredible! Trekking through the dense forest was thrilling, and the guides were so knowledgeable, helpful, and kind. Watching the gorillas up close was a humbling and unforgettable once-in-a-lifetime experience!',
    rating: 5
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Reviews</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto my-4"></div>
          <div className="flex items-center justify-center gap-2 text-yellow-500 text-2xl">
            <span>★★★★★</span>
            <span className="text-gray-700 text-lg ml-2">5.0 (70 ratings)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-green-800 text-lg">{review.name}</h4>
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-gray-600 leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}