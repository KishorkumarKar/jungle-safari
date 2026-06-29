'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  // Close user menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu')) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const navLinks = [
    { href: '/plan-your-trip', label: 'Plan Your Trip' },
    { href: '/start-adventure', label: 'Adventures' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-800 flex-shrink-0">
          Essentia<span className="text-yellow-700">Safari</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="#about" className="hover:text-green-700 transition">About</Link>
          <Link href="#excursions" className="hover:text-green-700 transition">Excursions</Link>
          <Link href="#why-us" className="hover:text-green-700 transition">Why Us</Link>
          <Link href="#reviews" className="hover:text-green-700 transition">Reviews</Link>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-green-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative user-menu">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-50 transition"
              >
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                  {user?.firstName?.[0] || user?.email?.[0]?.toUpperCase() || 'U'}
                </div>
                <span className="font-medium text-gray-700">
                  {user?.firstName || user?.email?.split('@')[0]}
                </span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-semibold text-gray-800">{user?.firstName} {user?.lastName}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                  <Link
                    href="/my-account"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Account
                  </Link>
                  <Link
                    href="/account-settings"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsUserMenuOpen(false)
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
          <Link href="#about" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="#excursions" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Excursions</Link>
          <Link href="#why-us" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Why Us</Link>
          <Link href="#reviews" className="block text-gray-700 hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block text-gray-700 hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {isAuthenticated ? (
            <>
              <div className="pt-3 border-t border-gray-100">
                <p className="font-semibold text-gray-800">
                  {user?.firstName || user?.email?.split('@')[0]}
                </p>
                <Link 
                  href="/my-account" 
                  className="block text-gray-700 hover:text-green-700 mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Account
                </Link>
                <Link 
                  href="/account-settings" 
                  className="block text-gray-700 hover:text-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left text-red-600 font-medium mt-2"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link 
              href="/login" 
              className="block text-center bg-green-700 text-white px-6 py-2 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  )
}