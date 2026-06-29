'use client'

import { forwardRef } from 'react'

const Checkbox = forwardRef(({
  label,
  name,
  value,
  checked,
  onChange,
  required = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          ref={ref}
          id={`${name}-${value}`}
          name={name}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`
            w-4 h-4 rounded border-gray-300 text-green-600
            focus:ring-green-500 focus:ring-2
            disabled:bg-gray-100 disabled:cursor-not-allowed
          `}
          {...props}
        />
      </div>
      <label 
        htmlFor={`${name}-${value}`}
        className="ml-2 text-sm text-gray-700 cursor-pointer"
      >
        {label}
      </label>
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox