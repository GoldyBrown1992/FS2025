import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FuelBox - Premium Meal Delivery for Lifters',
  description: '100g protein, 1200 calories daily. Fuel your gains.',
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
