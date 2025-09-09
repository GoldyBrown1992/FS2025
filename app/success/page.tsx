import Link from 'next/link'

export default function Success() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted mb-6">
          Your FuelBox order has been received. Check your email for confirmation and pickup details.
        </p>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-green-800">
            <strong>Next Steps:</strong><br />
            1. You'll receive an email confirmation<br />
            2. Pick up your FuelBox at selected location<br />
            3. Enjoy your gains! 💪
          </p>
        </div>
        
        <Link 
          href="/"
          className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
