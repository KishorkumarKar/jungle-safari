'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Input from '@/components/forms/Input'
import { SectionLoader } from '@/components/shared/Loader'

export default function AccountSettingsPage() {
  const { user, isAuthenticated, loading, updateUser } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login')
    }
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
      }))
    }
  }, [loading, isAuthenticated, router, user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setMessage({ type: '', text: '' })
  }

  const handleProfileUpdate = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch('/api/user/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        updateUser(data.user)
        setMessage({ type: 'success', text: 'Profile updated successfully!' })
      } else {
        const error = await response.json()
        setMessage({ type: 'error', text: error.message || 'Update failed' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setIsSaving(false)
    }
  }

  const handlePasswordUpdate = async (e) => {
    e.preventDefault()
    
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' })
      return
    }

    if (formData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' })
      return
    }

    setIsSaving(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch('/api/user/update-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Password updated successfully!' })
        setFormData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }))
      } else {
        const error = await response.json()
        setMessage({ type: 'error', text: error.message || 'Update failed' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setIsSaving(false)
    }
  }

  if (loading) return <SectionLoader />

  if (!isAuthenticated) return null

  return (
    <Section bg="gray" className="min-h-screen pt-8">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-green-800 mb-2">Account Settings</h1>
            <p className="text-gray-600 mb-8">Manage your profile and account preferences</p>

            {message.text && (
              <div className={`p-4 rounded-lg mb-6 ${
                message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            {/* Profile Settings */}
            <Card className="p-6 md:p-8 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h2>
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  disabled
                  className="bg-gray-50"
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                />
                <Button type="submit" isLoading={isSaving} size="sm">
                  Save Changes
                </Button>
              </form>
            </Card>

            {/* Password Settings */}
            <Card className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Change Password</h2>
              <form onSubmit={handlePasswordUpdate} className="space-y-4">
                <Input
                  label="Current Password"
                  name="currentPassword"
                  type="password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
                <Input
                  label="New Password"
                  name="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
                <Input
                  label="Confirm New Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
                <Button type="submit" isLoading={isSaving} size="sm">
                  Update Password
                </Button>
              </form>
            </Card>

            {/* Danger Zone */}
            <Card className="p-6 md:p-8 mt-6 border-2 border-red-200">
              <h3 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h3>
              <p className="text-gray-600 text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                    // Implement account deletion
                  }
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete Account
              </button>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}