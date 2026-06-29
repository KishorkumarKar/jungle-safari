'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container-custom relative z-10 text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">ESSENTIA</span>
            <span className="text-yellow-300">SAFARI</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-2">
            Tanzania's leading tailor made safari company
          </p>
          <div className="h-1 w-24 bg-yellow-500 mx-auto my-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Curate life-changing journeys through Tanzania's hidden wildlife reserves.
          </p>
          <Link href="/start-adventure" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105">
            Start Your Adventure
          </Link>
        </motion.div>
      </div>
    </section>
  )
}