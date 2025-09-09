import Link from 'next/link'

export default function Cancel() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-bold mb-2">Order Cancelled</h1>
        <p className="text-muted mb-6">
          Your order was cancelled. No charges were made.
        </p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            Still interested? Our boxes sell out fast - only 20 available daily!
          </p>
        </div>
        
        <Link 
          href="/"
          className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Try Again
        </Link>
      </div>
    </div>
  )
}
