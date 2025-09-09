'use client'

import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function Partner() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-accent">
            FuelBox
          </Link>
          <p className="text-xs text-muted">Partner Program</p>
        </div>
      </header>
      
      <main className="px-4 py-6 max-w-md mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-6 mb-6">
          <div className="text-4xl mb-3">💪👩</div>
          <h1 className="text-3xl font-bold mb-2">
            Brown Girl Lifts
          </h1>
          <p className="text-white/90">
            Official Launch Partner
          </p>
        </div>
        
        {/* About Section */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">Empowering Women in Strength</h2>
          <p className="text-sm text-gray-700 mb-4">
            Brown Girl Lifts is leading the charge in making strength training accessible and 
            inclusive for women of all backgrounds. As our exclusive launch partner, they're 
            helping us bring premium nutrition to the lifting community.
          </p>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              Exclusive Launch Offer 🎉
            </p>
            <p className="text-xs text-purple-700">
              Use code <span className="font-bold">BGL20</span> for 20% off your first month
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-purple-600">50K+</p>
            <p className="text-xs text-muted">Followers</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-purple-600">1000+</p>
            <p className="text-xs text-muted">Athletes</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-purple-600">5</p>
            <p className="text-xs text-muted">Years Strong</p>
          </div>
        </div>
        
        {/* Why Partner Section */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="font-bold mb-3">Why We Partnered</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-medium text-sm">Shared Mission</p>
                <p className="text-xs text-muted">Making fitness nutrition accessible to all</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">💜</span>
              <div>
                <p className="font-medium text-sm">Community First</p>
                <p className="text-xs text-muted">Building supportive spaces for growth</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-medium text-sm">Results Driven</p>
                <p className="text-xs text-muted">Focused on real transformation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 text-center">
          <h3 className="font-bold mb-2">Want to Partner with FuelBox?</h3>
          <p className="text-sm text-muted mb-4">
            Join our network of fitness influencers and gyms
          </p>
          <button 
            onClick={() => alert('Partner application coming soon!')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Apply to Partner
          </button>
        </div>
        
        {/* Note */}
        <p className="text-xs text-center text-muted mt-6">
          * This page is temporary for our launch campaign
        </p>
      </main>
      
      <BottomNav />
    </div>
  )
}
