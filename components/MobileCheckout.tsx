'use client'

import { useState } from 'react'

interface CheckoutProps {
  type: 'single' | 'subscription'
}

export default function MobileCheckout({ type }: CheckoutProps) {
  const [loading, setLoading] = useState(false)
  
  const handleCheckout = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      })
      
      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  const price = type === 'single' ? '$20' : '$499.99/mo'
  const label = type === 'single' ? 'Buy One Box' : 'Subscribe & Save'
  
  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
        type === 'subscription' 
          ? 'bg-accent hover:bg-green-600' 
          : 'bg-gray-800 hover:bg-gray-900'
      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? 'Processing...' : `${label} - ${price}`}
    </button>
  )
}
