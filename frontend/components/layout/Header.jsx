'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-2xl font-bold text-green-800">
          Jungle<span className="text-yellow-700">Safari</span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="#about" className="hover:text-green-700 transition">About</Link>
          <Link href="#excursions" className="hover:text-green-700 transition">Excursions</Link>
          <Link href="#why-us" className="hover:text-green-700 transition">Why Us</Link>
          <Link href="#reviews" className="hover:text-green-700 transition">Reviews</Link>
          <Link href="/plan-your-trip" className="hover:text-green-700 transition">
            Plan Your Trip
          </Link>
          <Link href="/start-adventure" className="hover:text-green-700 transition">
            Adventures
          </Link>
        </nav>

        <Link href="/plan-your-trip" className="hidden md:block bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
          Plan Your Trip
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
          <Link href="#about" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="#excursions" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Excursions</Link>
          <Link href="#why-us" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Why Us</Link>
          <Link href="#reviews" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
          <button className="w-full bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
            Plan Your Trip
          </button>
          
          <Link href="/plan-your-trip" className="hover:text-green-700 transition">
            Plan Your Trip
          </Link>
          <Link href="/start-adventure" className="hover:text-green-700 transition">
            Adventures
          </Link>
        </div>
      )}
    </header>
  )
}