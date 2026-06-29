'use client'

import { forwardRef } from 'react'
import { Container } from './Container'

/**
 * Reusable Section wrapper with consistent styling
 * @component
 */
export const Section = forwardRef(({
  id,
  children,
  className = '',
  bg = 'white',
  padding = 'lg',
  as: Component = 'section',
  ...props
}, ref) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-green-900 text-white',
    green: 'bg-green-50',
    transparent: 'bg-transparent',
  }

  const paddings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-28',
    none: '',
  }

  return (
    <Component
      id={id}
      ref={ref}
      className={`
        ${bgColors[bg]}
        ${paddings[padding]}
        ${className}
      `}
      {...props}
    >
      <Container>{children}</Container>
    </Component>
  )
})

Section.displayName = 'Section'