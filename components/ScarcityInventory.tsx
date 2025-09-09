'use client'

import { useEffect, useState } from 'react'

export default function ScarcityInventory() {
  const [inventory, setInventory] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch('/api/inventory')
        const data = await res.json()
        setInventory(data.available)
      } catch (error) {
        console.error('Failed to fetch inventory:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInventory()
    const interval = setInterval(fetchInventory, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  if (loading) return null

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
      <p className="text-sm font-medium text-red-800">
        🔥 Only {inventory} boxes left today!
      </p>
      <p className="text-xs text-red-600 mt-1">
        Limited to 20 boxes daily
      </p>
    </div>
  )
}
