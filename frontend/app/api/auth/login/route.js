import { NextResponse } from 'next/server'

// Mock user database (replace with real DB)
const users = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123', // In production, use hashed passwords
    phone: '+1 234 567 890',
    createdAt: new Date().toISOString(),
  },
]

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    // Find user
    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}