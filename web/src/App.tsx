import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import WebApp from '@twa-dev/sdk'
import Tasks from './components/Tasks'
import Analytics from './components/Analytics'
import Habits from './components/Habits'
import Diary from './components/Diary'
import Profile from './components/Profile'

function App() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    WebApp.ready()
    WebApp.expand()
    WebApp.setHeaderColor('#0A0A0C')
    WebApp.setBackgroundColor('#0A0A0C')

    if (WebApp.initDataUnsafe.user) {
      setUser(WebApp.initDataUnsafe.user)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A0A0C] text-white pb-20 pt-16 px-4">
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>

        {/* Нижняя навигация */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0C]/80 backdrop-blur-xl border-t border-white/10">
          <div className="flex justify-around py-3">
            <NavLink to="/" className={({ isActive }) => `p-3 ${isActive ? 'text-[#7089FF]' : 'text-gray-400'}`}>
              Задачи
            </NavLink>
            <NavLink to="/analytics" className={({ isActive }) => `p-3 ${isActive ? 'text-[#7089FF]' : 'text-gray-400'}`}>
              Аналитика
            </NavLink>
            <NavLink to="/habits" className={({ isActive }) => `p-3 ${isActive ? 'text-[#7089FF]' : 'text-gray-400'}`}>
              Привычки
            </NavLink>
            <NavLink to="/diary" className={({ isActive }) => `p-3 ${isActive ? 'text-[#7089FF]' : 'text-gray-400'}`}>
              Дневник
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => `p-3 ${isActive ? 'text-[#7089FF]' : 'text-gray-400'}`}>
              Профиль
            </NavLink>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
