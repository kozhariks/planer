import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { init, ready, isVersionAtLeast, setHeaderColor, expand } from '@twa-dev/sdk';
import Tasks from './components/Tasks';
import Analytics from './components/Analytics';
import Habits from './components/Habits';
import Diary from './components/Diary';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import './App.css'; // Кастом стили

function App() {
  useEffect(() => {
    init();
    ready();
    if (isVersionAtLeast('8.0')) {
      setHeaderColor('#0A0A0C');
      expand();
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-white p-side pt-17">
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
