'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionLoader } from '@/components/shared/Loader'
import { useRouter } from 'next/navigation'

export default function MyAccountPage() {
  const { user, bookings, isAuthenticated, loading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('bookings')

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login')
    }
  }, [loading, isAuthenticated, router])

  if (loading) return <SectionLoader />

  if (!isAuthenticated) return null

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800',
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <Section bg="gray" className="min-h-screen pt-8">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                  {user?.firstName?.[0] || user?.email?.[0]?.toUpperCase() || 'U'}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-green-800">
                    {user?.firstName} {user?.lastName}
                  </h1>
                  <p className="text-gray-600">{user?.email}</p>
                  <p className="text-sm text-gray-500">Member since {new Date(user?.createdAt || Date.now()).toLocaleDateString()}</p>
                </div>
              </div>
              <Link href="/account-settings">
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`pb-4 px-2 font-medium transition ${
                activeTab === 'bookings'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`pb-4 px-2 font-medium transition ${
                activeTab === 'wishlist'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Wishlist
            </button>
          </div>

          {/* Bookings List */}
          {activeTab === 'bookings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {bookings.length === 0 ? (
                <Card className="text-center py-12">
                  <div className="text-6xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Yet</h3>
                  <p className="text-gray-600 mb-6">Start planning your dream safari adventure today!</p>
                  <Link href="/plan-your-trip">
                    <Button>Plan Your Trip</Button>
                  </Link>
                </Card>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card hover className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </span>
                              <span className="text-sm text-gray-500">
                                Booking #{booking.id.slice(0, 8)}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">{booking.destination}</h3>
                            <p className="text-gray-600 text-sm">
                              {booking.startDate} - {booking.endDate}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                              <span>👥 {booking.travelers} travelers</span>
                              <span>🏨 {booking.accommodation}</span>
                              <span>💰 ${booking.totalPrice}</span>
                            </div>
                          </div>
                          <Link href={`/booking/${booking.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center py-12">
                <div className="text-6xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h3>
                <p className="text-gray-600 mb-6">Save your favorite adventures to plan later.</p>
                <Link href="/start-adventure">
                  <Button>Browse Adventures</Button>
                </Link>
              </Card>
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  )
}