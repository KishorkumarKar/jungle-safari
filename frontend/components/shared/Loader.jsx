'use client'

import { forwardRef } from 'react'

/**
 * Reusable Loader/Spinner component with variants
 * @component
 */
export const Loader = forwardRef(({
  size = 'md',
  variant = 'primary',
  className = '',
  fullScreen = false,
  text = '',
  ...props
}, ref) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  }

  const variants = {
    primary: 'border-green-600 border-t-transparent',
    white: 'border-white border-t-transparent',
    dark: 'border-gray-600 border-t-transparent',
    yellow: 'border-yellow-500 border-t-transparent',
  }

  const spinner = (
    <div
      ref={ref}
      className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-full animate-spin
        ${className}
      `}
      {...props}
    />
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
        {text && <p className="mt-4 text-gray-600 font-medium">{text}</p>}
      </div>
    )
  }

  if (text) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        {spinner}
        <p className="mt-3 text-gray-600">{text}</p>
      </div>
    )
  }

  return spinner
})

Loader.displayName = 'Loader'

/**
 * Section-level loader for suspense fallback
 */
export const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <Loader size="md" />
  </div>
)