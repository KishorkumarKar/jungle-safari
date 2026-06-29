'use client'

import { forwardRef } from 'react'

/**
 * Responsive container with max-width and padding
 * @component
 */
export const Container = forwardRef(({
  children,
  className = '',
  as: Component = 'div',
  maxWidth = '7xl',
  ...props
}, ref) => {
  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <Component
      ref={ref}
      className={`
        mx-auto px-4 sm:px-6 lg:px-8
        ${maxWidths[maxWidth]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  )
})

Container.displayName = 'Container'