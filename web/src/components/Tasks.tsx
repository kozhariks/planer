export default function Tasks() {
  return (
    <div className="space-y-6">
      <div className="glass-card p-5">
        <h2 className="text-xl font-bold text-[#7089FF] mb-4">Цели недели</h2>
        <div className="text-center text-3xl">0/0</div>
        <button className="w-full mt-4 glass-button py-3">+ Добавить цель</button>
      </div>

      <div className="glass-card p-5">
        <h2 className="text-xl font-bold text-[#7089FF] mb-4">Задачи дня</h2>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d, i) => (
            <div key={i} className={`text-center py-2 rounded-lg ${i === 4 ? 'bg-[#7089FF] text-white' : 'bg-[#212025]'}`}>
              {d}
            </div>
          ))}
        </div>
        <button className="w-full glass-button py-3">+ Добавить задачу</button>
      </div>
    </div>
  )
}
