export default function Profile({ user }: any) {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 text-center">
        <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold">{user?.first_name || 'Гость'}</h2>
        <p className="text-gray-400">ID: {user?.id || '—'}</p>
      </div>

      <div className="glass-card p-5 space-y-4">
        <h3 className="font-semibold">Личные данные</h3>
        <div className="text-gray-400 space-y-3">
          <div>Телефон: Не указан</div>
          <div>Возраст: Не указан</div>
          <div>Вес: Не указан</div>
          <div>Рост: Не указан</div>
        </div>
        <button className="w-full glass-button py-3 mt-4">Редактировать</button>
      </div>

      <div className="glass-card p-5">
        <h3 className="font-semibold mb-3">Пригласить друзей</h3>
        <p className="text-sm text-gray-400 mb-4">Поделитесь ссылкой и помогите друзьям стать продуктивнее!</p>
        <button className="w-full glass-button py-3">Поделиться</button>
      </div>
    </div>
  )
}
