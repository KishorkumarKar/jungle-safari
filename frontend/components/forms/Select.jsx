'use client'

import { forwardRef } from 'react'

const Select = forwardRef(({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  error = '',
  ...props
}, ref) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-2 rounded-lg border transition
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}
          focus:outline-none focus:ring-2 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          appearance-none
        `}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>{placeholder}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
})

Select.displayName = 'Select'

export default Select