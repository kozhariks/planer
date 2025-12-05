export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 text-center">
        <h2 className="text-5xl font-bold mb-2">0%</h2>
        <p className="text-[#FC9A08]">Есть над чем работать</p>
      </div>
      <div className="glass-card p-5">
        <h3 className="text-lg font-semibold mb-4">Прогресс по дням</h3>
        <div className="h-48 bg-gray-800 rounded-lg flex items-end justify-around px-2">
          {[0,0,0,0,0,0,0].map((_, i) => (
            <div key={i} className="w-8 bg-[#7089FF]/30 rounded-t" style={{height: '20%'}} />
          ))}
        </div>
      </div>
    </div>
  )
}
