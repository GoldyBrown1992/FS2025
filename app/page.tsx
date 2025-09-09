import ScarcityInventory from '@/components/ScarcityInventory'
import MobileCheckout from '@/components/MobileCheckout'
import ProductCard from '@/components/ProductCard'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-accent">FuelBox</h1>
          <p className="text-xs text-muted">Premium Nutrition for Lifters</p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="px-4 py-6 max-w-md mx-auto">
        {/* Hero Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            One Box.<br />
            Complete Nutrition.
          </h2>
          <p className="text-muted">
            100g protein. 1200 calories. Daily gains guaranteed.
          </p>
        </div>
        
        {/* Scarcity */}
        <ScarcityInventory />
        
        {/* Product Card */}
        <ProductCard />
        
        {/* Pricing */}
        <div className="mt-6 space-y-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="font-semibold">Single Box</h3>
                <p className="text-sm text-muted">One-time purchase</p>
              </div>
              <p className="text-2xl font-bold">$20</p>
            </div>
            <MobileCheckout type="single" />
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-accent relative">
            <div className="absolute -top-3 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              BEST VALUE
            </div>
            <div className="flex justify-between items-center mb-3 mt-2">
              <div>
                <h3 className="font-semibold">Monthly Plan</h3>
                <p className="text-sm text-muted">25 boxes/month</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">$499.99</p>
                <p className="text-xs text-accent font-medium">Save $100</p>
              </div>
            </div>
            <MobileCheckout type="subscription" />
          </div>
        </div>
        
        {/* Pickup Locations */}
        <div className="mt-8 bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold mb-3">📍 Pickup Locations</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <div>
                <p className="font-medium text-sm">Newton Location</p>
                <p className="text-xs text-muted">123 King George Blvd</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <div>
                <p className="font-medium text-sm">Whalley Location</p>
                <p className="text-xs text-muted">456 108 Ave</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4">What Lifters Say</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex gap-1 mb-2">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm">"Perfect macros, amazing taste. My recovery has never been better."</p>
              <p className="text-xs text-muted mt-2">- Sarah K., Powerlifter</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex gap-1 mb-2">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm">"100g protein in one meal? Game changer for my bulk."</p>
              <p className="text-xs text-muted mt-2">- Mike R., Bodybuilder</p>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  )
}
