import { NextResponse } from 'next/server'

// Mock bookings database
const bookings = [
  {
    id: '1',
    userId: '1',
    destination: 'Serengeti National Park',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    travelers: 2,
    accommodation: 'Luxury Tented Camp',
    totalPrice: 4500,
    status: 'confirmed',
    specialRequests: 'Vegetarian meals preferred',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '1',
    destination: 'Mount Kilimanjaro',
    startDate: '2024-08-01',
    endDate: '2024-08-08',
    travelers: 1,
    accommodation: 'Mountain Huts',
    totalPrice: 5200,
    status: 'pending',
    specialRequests: '',
    createdAt: new Date().toISOString(),
  },
]

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'User ID required' }, { status: 400 })
  }

  const userBookings = bookings.filter(b => b.userId === userId)
  return NextResponse.json(userBookings)
}