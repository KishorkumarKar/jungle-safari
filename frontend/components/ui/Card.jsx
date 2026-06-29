'use client'

import { forwardRef } from 'react'

/**
 * Reusable Card component with variants
 * @component
 */
export const Card = forwardRef(({
  children,
  variant = 'default',
  className = '',
  padding = true,
  hover = false,
  as: Component = 'div',
  ...props
}, ref) => {
  const variants = {
    default: 'bg-white shadow-md',
    light: 'bg-gray-50 shadow-sm',
    colored: 'bg-green-50 shadow-md',
    dark: 'bg-green-900 text-white shadow-lg',
  }

  const baseClasses = `
    rounded-xl transition-all duration-300
    ${variants[variant]}
    ${padding ? 'p-6 md:p-8' : ''}
    ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
    ${className}
  `

  return (
    <Component
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {children}
    </Component>
  )
})

Card.displayName = 'Card'