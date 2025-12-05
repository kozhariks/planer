export default function Diary() {
  return (
    <div className="space-y-6">
      <div className="glass-card p-5">
        <h2 className="text-xl font-bold text-[#7089FF] mb-6">Пятница, 5 Декабря</h2>
        
        <div className="space-y-6">
          <div>
            <label className="text-sm text-gray-400">Сон</label>
            <input type="range" className="w-full" defaultValue="7" />
            <div className="flex justify-between text-xs"><span>4ч</span><span>12ч</span></div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Энергия</label>
            <input type="range" className="w-full" defaultValue="6" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Настроение</label>
            <input type="range" className="w-full" defaultValue="7" />
          </div>

          <div>
            <label className="text-sm text-gray-400">Урок дня</label>
            <textarea className="w-full bg-[#212025]/50 rounded-glass p-3 mt-2" placeholder="Что нового вы узнали сегодня?" rows={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
