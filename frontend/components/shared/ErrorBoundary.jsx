'use client'

import { Component } from 'react'

/**
 * Error Boundary for catching and handling component errors
 * @component
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      error,
    }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to your monitoring service
    console.error('Error Boundary caught:', error, errorInfo)
    
    // Optional: Send to Sentry, LogRocket, etc.
    // sendToErrorTracking(error, errorInfo)
  }

  handleReset = () => {
    this.setState({ 
      hasError: false,
      error: null,
    })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center max-w-md mx-auto">
          <div className="text-6xl mb-4">😅</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600 mb-4">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={this.handleReset}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Try Again
            </button>
            <button
              onClick={this.handleReload}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * Section-specific error boundary with fallback UI
 */
export const SectionErrorBoundary = ({ children }) => (
  <ErrorBoundary
    fallback={({ error, reset }) => (
      <div className="p-6 text-center bg-red-50 rounded-xl border border-red-200">
        <p className="text-red-600 font-medium">⚠️ Failed to load this section</p>
        <p className="text-sm text-red-500 mt-1">{error?.message}</p>
        <button
          onClick={reset}
          className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
        >
          Retry
        </button>
      </div>
    )}
  >
    {children}
  </ErrorBoundary>
)