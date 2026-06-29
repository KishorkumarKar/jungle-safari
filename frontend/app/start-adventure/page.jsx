'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const adventures = [
  {
    id: 'ultimate-safari',
    title: 'Ultimate Safari Experience',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Journey through Tanzania\'s greatest wildlife reserves. Witness the Great Migration and stay in luxury tented camps.',
    duration: '7 Days',
    price: '$4,500',
    rating: 5,
    includes: ['Luxury Accommodation', 'Game Drives', 'All Meals', 'Expert Guide'],
  },
  {
    id: 'kilimanjaro-trek',
    title: 'Kilimanjaro Trekking Expedition',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Conquer Africa\'s highest peak with experienced guides. Summit at sunrise for breathtaking views.',
    duration: '8 Days',
    price: '$5,200',
    rating: 5,
    includes: ['Professional Guides', 'Camping Equipment', 'Meals', 'Park Fees'],
  },
  {
    id: 'gorilla-trek',
    title: 'Gorilla Trekking Adventure',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Encounter mountain gorillas in Uganda\'s dense forests. A once-in-a-lifetime wildlife experience.',
    duration: '5 Days',
    price: '$6,800',
    rating: 5,
    includes: ['Permits', 'Accommodation', 'Expert Guides', 'Meals'],
  },
  {
    id: 'zanzibar-beach',
    title: 'Zanzibar Beach Paradise',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Relax on pristine beaches, explore Stone Town, and enjoy water activities in crystal-clear waters.',
    duration: '5 Days',
    price: '$2,800',
    rating: 4,
    includes: ['Beach Resort', 'Water Activities', 'Meals', 'Cultural Tour'],
  },
  {
    id: 'serengeti-balloon',
    title: 'Serengeti Hot Air Balloon Safari',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Float above the Serengeti at sunrise. Watch wildlife from above and enjoy a champagne breakfast.',
    duration: '3 Days',
    price: '$3,200',
    rating: 5,
    includes: ['Balloon Flight', 'Breakfast', 'Transport', 'Photography'],
  },
  {
    id: 'family-safari',
    title: 'Family Safari Adventure',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Kid-friendly safari with educational activities and safe wildlife viewing for the whole family.',
    duration: '6 Days',
    price: '$3,800',
    rating: 4,
    includes: ['Family Accommodation', 'Kid Activities', 'Meals', 'Game Drives'],
  },
]

export default function StartAdventure() {
  const [selectedAdventure, setSelectedAdventure] = useState(null)
  const [travelers, setTravelers] = useState(2)
  const [startDate, setStartDate] = useState('')

  const handleBooking = (adventureId) => {
    // Redirect to plan your trip with selected adventure
    window.location.href = `/plan-your-trip?adventure=${adventureId}`
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Adventure</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Choose from our curated safaris and let us create your perfect African experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Adventures Grid */}
      <Section bg="gray">
        <Container>
          <SectionHeader 
            title="Featured Adventures" 
            subtitle="Discover Our Top Experiences"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each adventure is carefully crafted to provide you with an unforgettable African experience.
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {adventures.map((adventure, index) => (
              <motion.div
                key={adventure.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full flex flex-col overflow-hidden">
                  <div className="h-48 overflow-hidden -m-6 -mt-6 mb-4">
                    <img 
                      src={adventure.image} 
                      alt={adventure.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                      {adventure.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-800 mb-2">{adventure.title}</h3>
                  
                  <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                    {'★'.repeat(adventure.rating)}
                    {'☆'.repeat(5 - adventure.rating)}
                  </div>
                  
                  <p className="text-gray-600 text-sm flex-grow mb-4">{adventure.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {adventure.includes.map((item) => (
                      <span key={item} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <span className="text-2xl font-bold text-green-700">{adventure.price}</span>
                      <span className="text-sm text-gray-500"> / person</span>
                    </div>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handleBooking(adventure.id)}
                    >
                      Book Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Booking Section */}
      <Section bg="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Ready for Your Adventure?</h2>
              <p className="text-green-100 mb-6">
                Not sure where to start? Our experts will help you choose the perfect adventure.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-1 w-full">
                  <label className="block text-sm font-medium mb-1">Travelers</label>
                  <select
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n} className="text-gray-900">{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 w-full">
                  <label className="block text-sm font-medium mb-1">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="w-full md:w-auto">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="w-full md:w-auto mt-1"
                    onClick={() => window.location.href = '/plan-your-trip'}
                  >
                    Start Planning
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}