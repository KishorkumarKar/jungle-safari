'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Input from '@/components/forms/Input'
import Select from '@/components/forms/Select'
import Textarea from '@/components/forms/Textarea'
import Checkbox from '@/components/forms/Checkbox'

const destinations = [
  {
    id: 'serengeti',
    name: 'Serengeti National Park',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Witness the Great Migration and endless plains',
    price: 'From $2,500',
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro Crater',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Explore the world\'s largest intact volcanic caldera',
    price: 'From $3,200',
  },
  {
    id: 'kilimanjaro',
    name: 'Mount Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Conquer Africa\'s highest peak',
    price: 'From $4,500',
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar Beach Resort',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Relax on pristine white sand beaches',
    price: 'From $1,800',
  },
  {
    id: 'tarangire',
    name: 'Tarangire National Park',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Home to massive elephant herds and baobab trees',
    price: 'From $2,200',
  },
  {
    id: 'uganda',
    name: 'Uganda Gorilla Trekking',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Encounter mountain gorillas in their natural habitat',
    price: 'From $5,500',
  },
]

const accommodationTypes = [
  { value: 'classic', label: 'Classic' },
  { value: 'deluxe', label: 'Deluxe' },
  { value: 'luxury', label: 'Luxury' },
]

const groupSizes = [
  { value: 'solo', label: 'Solo Traveler' },
  { value: 'couple', label: 'Couple' },
  { value: 'family', label: 'Family (2-4)' },
  { value: 'group', label: 'Group (5+)' },
]

const durations = [
  { value: '3', label: '3 Days' },
  { value: '5', label: '5 Days' },
  { value: '7', label: '7 Days' },
  { value: '10', label: '10 Days' },
  { value: '14', label: '14 Days' },
]

export default function PlanYourTrip() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: '',
    email: '',
    phone: '',
    country: '',
    // Step 2: Trip Details
    destination: '',
    duration: '',
    groupSize: '',
    accommodation: '',
    travelers: 2,
    // Step 3: Preferences
    preferences: [],
    budget: '',
    specialRequests: '',
    // Step 4: Confirmation
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Submit form data to API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        // Show success message or redirect
        alert('Your trip request has been submitted! We\'ll contact you within 24 hours.')
        setStep(4)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const nextStep = () => {
    // Validate current step
    if (step === 1) {
      // Validate personal info
      if (!formData.fullName || !formData.email) {
        alert('Please fill in your name and email')
        return
      }
    }
    if (step === 2) {
      // Validate trip details
      if (!formData.destination) {
        alert('Please select a destination')
        return
      }
    }
    setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Safari Adventure</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Let us craft your dream African safari. Fill in your preferences and we'll create a personalized itinerary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <Section bg="gray">
        <Container>
          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center">
              {['Personal Info', 'Trip Details', 'Preferences', 'Confirm'].map((label, index) => (
                <div key={index} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm ${
                    step > index + 1 ? 'bg-green-600 text-white' :
                    step === index + 1 ? 'bg-yellow-600 text-white' :
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {step > index + 1 ? '✓' : index + 1}
                  </div>
                  <span className={`hidden md:block ml-2 text-sm ${
                    step === index + 1 ? 'text-green-800 font-semibold' : 'text-gray-500'
                  }`}>
                    {label}
                  </span>
                  {index < 3 && (
                    <div className={`w-12 md:w-24 h-1 mx-2 ${
                      step > index + 1 ? 'bg-green-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-green-800">Personal Information</h2>
                <p className="text-gray-600">Tell us who you are so we can personalize your experience.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                  />
                  <Input
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="United States"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={nextStep} size="lg">
                    Next Step →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Trip Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-green-800">Trip Details</h2>
                <p className="text-gray-600">Tell us where you want to go and what you'd like to experience.</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Your Destination *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {destinations.map((dest) => (
                        <div
                          key={dest.id}
                          onClick={() => setFormData(prev => ({ ...prev, destination: dest.id }))}
                          className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                            formData.destination === dest.id 
                              ? 'border-green-600 shadow-lg' 
                              : 'border-transparent hover:shadow-md'
                          }`}
                        >
                          <div className="h-32 overflow-hidden">
                            <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-3 bg-white">
                            <h4 className="font-semibold text-sm">{dest.name}</h4>
                            <p className="text-xs text-gray-500">{dest.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label="Duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      options={durations}
                      placeholder="Select duration"
                    />
                    <Select
                      label="Group Size"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      options={groupSizes}
                      placeholder="Select group size"
                    />
                    <Select
                      label="Accommodation Type"
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleChange}
                      options={accommodationTypes}
                      placeholder="Select accommodation"
                    />
                    <Input
                      label="Number of Travelers"
                      name="travelers"
                      type="number"
                      value={formData.travelers}
                      onChange={handleChange}
                      min="1"
                      max="20"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={prevStep}>
                    ← Back
                  </Button>
                  <Button onClick={nextStep} size="lg">
                    Next Step →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Preferences */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-green-800">Travel Preferences</h2>
                <p className="text-gray-600">Tell us about your interests and any special requirements.</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What are you most interested in?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Wildlife Viewing', 'Bird Watching', 'Cultural Experiences', 
                        'Photography', 'Hiking/Trekking', 'Beach Relaxation', 
                        'Luxury Accommodation', 'Local Cuisine', 'Night Safaris'].map((pref) => (
                        <Checkbox
                          key={pref}
                          label={pref}
                          name="preferences"
                          value={pref}
                          checked={formData.preferences.includes(pref)}
                          onChange={(e) => {
                            const { checked, value } = e.target
                            setFormData(prev => ({
                              ...prev,
                              preferences: checked 
                                ? [...prev.preferences, value]
                                : prev.preferences.filter(p => p !== value)
                            }))
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <Select
                    label="Budget Range"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    options={[
                      { value: 'under-2000', label: 'Under $2,000' },
                      { value: '2000-4000', label: '$2,000 - $4,000' },
                      { value: '4000-6000', label: '$4,000 - $6,000' },
                      { value: '6000-10000', label: '$6,000 - $10,000' },
                      { value: '10000+', label: '$10,000+' },
                    ]}
                    placeholder="Select your budget"
                  />

                  <Textarea
                    label="Special Requests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any specific requirements, dietary needs, or special occasions we should know about?"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={prevStep}>
                    ← Back
                  </Button>
                  <Button onClick={nextStep} size="lg">
                    Review & Confirm →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-green-800">Confirm Your Trip</h2>
                <p className="text-gray-600">Review your details and confirm to start planning your adventure.</p>

                <Card className="bg-gray-50">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-green-800">Personal Information</h3>
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
                    
                    <hr className="my-3" />
                    
                    <h3 className="font-semibold text-green-800">Trip Details</h3>
                    <p><strong>Destination:</strong> {destinations.find(d => d.id === formData.destination)?.name || 'Not selected'}</p>
                    <p><strong>Duration:</strong> {durations.find(d => d.value === formData.duration)?.label || 'Not selected'}</p>
                    <p><strong>Travelers:</strong> {formData.travelers}</p>
                    <p><strong>Accommodation:</strong> {formData.accommodation || 'Not selected'}</p>
                    
                    <hr className="my-3" />
                    
                    <h3 className="font-semibold text-green-800">Preferences</h3>
                    <p><strong>Interests:</strong> {formData.preferences.join(', ') || 'None selected'}</p>
                    <p><strong>Budget:</strong> {formData.budget || 'Not specified'}</p>
                    {formData.specialRequests && (
                      <p><strong>Special Requests:</strong> {formData.specialRequests}</p>
                    )}
                  </div>
                </Card>

                <Checkbox
                  label="I agree to the terms and conditions and confirm that the information provided is accurate."
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={prevStep}>
                    ← Back
                  </Button>
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={!formData.agreeToTerms}
                  >
                    Submit Request →
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </Container>
      </Section>
    </>
  )
}