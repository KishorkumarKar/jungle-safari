'use client'

// Core imports
import { lazy, Suspense } from 'react'

// UI Components
import { SectionLoader } from '@/components/shared/Loader'
import { SectionErrorBoundary } from '@/components/shared/ErrorBoundary'

// Lazy-loaded components
const Header = lazy(() => import('@/components/layout/Header'))
const Footer = lazy(() => import('@/components/layout/Footer'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const Features = lazy(() => import('@/components/sections/Features'))
const About = lazy(() => import('@/components/sections/About'))
const Stats = lazy(() => import('@/components/sections/Stats'))
const Excursions = lazy(() => import('@/components/sections/Excursions'))
const WhyUs = lazy(() => import('@/components/sections/WhyUs'))
const Accommodations = lazy(() => import('@/components/sections/Accommodations'))
const Reviews = lazy(() => import('@/components/sections/Reviews'))

/**
 * Homepage with lazy loading and error boundaries
 */
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Header - Critical for navigation */}
      <Suspense fallback={null}>
        <SectionErrorBoundary>
          <Header />
        </SectionErrorBoundary>
      </Suspense>

      {/* Hero Section - Above the fold */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <Hero />
        </SectionErrorBoundary>
      </Suspense>

      {/* Features Section */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <Features />
        </SectionErrorBoundary>
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <About />
        </SectionErrorBoundary>
      </Suspense>

      {/* Stats Section */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <Stats />
        </SectionErrorBoundary>
      </Suspense>

      {/* Excursions Section */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <Excursions />
        </SectionErrorBoundary>
      </Suspense>

      {/* Why Us Section */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <WhyUs />
        </SectionErrorBoundary>
      </Suspense>

      {/* Accommodations Section */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <Accommodations />
        </SectionErrorBoundary>
      </Suspense>

      {/* Reviews Section */}
      <Suspense fallback={<SectionLoader />}>
        <SectionErrorBoundary>
          <Reviews />
        </SectionErrorBoundary>
      </Suspense>

      {/* Footer */}
      <Suspense fallback={null}>
        <SectionErrorBoundary>
          <Footer />
        </SectionErrorBoundary>
      </Suspense>
    </main>
  )
}