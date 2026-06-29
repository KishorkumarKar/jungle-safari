'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Tailored Packages',
    description: 'Truly customized safaris for your dream trip to Tanzania\'s greatest places. These thrilling activities are readily paired with a pleasant, calm beach vacation.'
  },
  {
    title: 'Value For Money',
    description: 'If you\'re looking for a low-cost Tanzania safari, you\'ve come to the perfect place. We tailor safaris to your specific interests and budget.'
  },
  {
    title: 'Exclusive Access',
    description: 'Tailored Packages offer access to private reserves and unique experiences, giving you more intimate wildlife encounters and the chance to explore hidden gems.'
  },
  {
    title: 'Experienced Team',
    description: 'Travel with experienced team. Our experienced guides will guide you to the right trip.'
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Why us</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto my-4"></div>
          <p className="text-gray-600 text-lg">Reasons to travel with us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 rounded-xl hover:bg-green-50 transition"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}