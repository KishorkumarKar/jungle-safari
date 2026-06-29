'use client'

import { forwardRef } from 'react'

/**
 * Reusable Section Header with title, subtitle, and decorative line
 * @component
 */
export const SectionHeader = forwardRef(({
  title,
  subtitle,
  centered = true,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={`
        ${centered ? 'text-center' : 'text-left'}
        mb-8 md:mb-12
        ${className}
      `}
      {...props}
    >
      {subtitle && (
        <p className="text-green-600 font-semibold uppercase tracking-wide text-sm mb-2">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold text-green-800">
        {title}
      </h2>
      
      <div className={`
        h-1 w-20 bg-yellow-500 rounded-full mt-4
        ${centered ? 'mx-auto' : ''}
      `} />
      
      {props.children && (
        <div className={`mt-4 ${centered ? 'text-center' : 'text-left'}`}>
          {props.children}
        </div>
      )}
    </div>
  )
})

SectionHeader.displayName = 'SectionHeader'