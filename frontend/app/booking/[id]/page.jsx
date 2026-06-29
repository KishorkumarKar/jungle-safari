'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionLoader } from '@/components/shared/Loader'

export default function BookingViewPage() {
  const params = useParams()
  const { user, isAuthenticated } = useAuth()
  const [booking, setBooking] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(`/api/bookings/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setBooking(data)
        }
      } catch (error) {
        console.error('Error fetching booking:', error)
      } finally {
        setLoading(false)
      }
    }

    if (isAuthenticated) {
      fetchBooking()
    }
  }, [params.id, isAuthenticated])

  if (loading) return <SectionLoader />

  if (!booking) {
    return (
      <Section className="min-h-screen pt-20">
        <Container>
          <Card className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Not Found</h2>
            <p className="text-gray-600 mb-6">The booking you're looking for doesn't exist or you don't have access.</p>
            <Link href="/my-account">
              <Button>Back to My Account</Button>
            </Link>
          </Card>
        </Container>
      </Section>
    )
  }

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
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/my-account" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to My Account
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <Card className="p-6 md:p-8 mb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-green-800">Booking Details</h1>
                  <p className="text-gray-500 text-sm">Booking #{booking.id.slice(0, 8)}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
            </Card>

            {/* Itinerary Details */}
            <Card className="p-6 md:p-8 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Trip Itinerary</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Destination</label>
                    <p className="text-lg font-semibold text-gray-800">{booking.destination}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Accommodation</label>
                    <p className="text-lg font-semibold text-gray-800">{booking.accommodation || 'Not specified'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Start Date</label>
                    <p className="text-lg font-semibold text-gray-800">{booking.startDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">End Date</label>
                    <p className="text-lg font-semibold text-gray-800">{booking.endDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Travelers</label>
                    <p className="text-lg font-semibold text-gray-800">{booking.travelers}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Total Price</label>
                    <p className="text-lg font-semibold text-green-700">${booking.totalPrice}</p>
                  </div>
                </div>

                {booking.specialRequests && (
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Special Requests</label>
                    <p className="text-gray-700 mt-1">{booking.specialRequests}</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Trip Details */}
            <Card className="p-6 md:p-8 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Expert Guide</h4>
                    <p className="text-gray-600 text-sm">Professional safari guide with 10+ years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">All Meals Included</h4>
                    <p className="text-gray-600 text-sm">Full board accommodation with local and international cuisine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Game Drives</h4>
                    <p className="text-gray-600 text-sm">Daily game drives in custom safari vehicles</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary">
                Download Itinerary (PDF)
              </Button>
              <Button variant="outline">
                Contact Support
              </Button>
              {booking.status === 'pending' && (
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                  Cancel Booking
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}