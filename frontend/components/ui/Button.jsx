'use client'

import { forwardRef } from 'react'

/**
 * Reusable Button component with variants and sizes
 * @component
 */
export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  as: Component = 'button',
  ...props
}, ref) => {
  const variants = {
    primary: 'bg-green-700 hover:bg-green-800 text-white',
    secondary: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    outline: 'border-2 border-green-700 text-green-700 hover:bg-green-50',
    ghost: 'text-green-700 hover:bg-green-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-full
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  return (
    <Component
      ref={ref}
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </Component>
  )
})

Button.displayName = 'Button'