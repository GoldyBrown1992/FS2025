export default function ProductCard() {
  const macros = [
    { label: 'Protein', value: '100g', emoji: '💪' },
    { label: 'Calories', value: '1200', emoji: '🔥' },
    { label: 'Carbs', value: '85g', emoji: '🌾' },
    { label: 'Fats', value: '35g', emoji: '🥑' },
  ]
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-2">🍱</div>
          <p className="text-sm font-medium text-gray-700">Daily FuelBox</p>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-3">Complete Daily Nutrition</h3>
        
        <div className="grid grid-cols-2 gap-3">
          {macros.map((macro) => (
            <div key={macro.label} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span>{macro.emoji}</span>
                <span className="text-xs text-muted">{macro.label}</span>
              </div>
              <p className="font-bold text-lg">{macro.value}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            ✓ Chef-prepared daily
            <br />
            ✓ Premium ingredients
            <br />
            ✓ Perfect for strength training
          </p>
        </div>
      </div>
    </div>
  )
}
