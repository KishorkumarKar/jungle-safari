import { NextResponse } from 'next/server'

// Mock user database
let users = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '+1 234 567 890',
    createdAt: new Date().toISOString(),
  },
]

export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json()

    // Check if user exists
    if (users.find(u => u.email === email)) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }

    // Create new user
    const newUser = {
      id: String(users.length + 1),
      firstName,
      lastName: lastName || '',
      email,
      password, // In production, hash this!
      phone: '',
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser

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