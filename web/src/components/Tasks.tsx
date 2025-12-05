import { useState } from 'react';
import { postTasks } from '../api'; // API call

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // Твои задачи из localStorage или бэка

  const addTask = async (task: string) => {
    // Логика добавления
    await postTasks({ task });
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
  };

  return (
    <div className="p-inner space-y-4">
      <h1 className="text-primary font-bold">Задачи</h1>
      {/* Чекбоксы, прогресс-бар по скрину */}
      <div className="grid grid-cols-7 gap-2">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
          <button key={day} className="bg-cards/50 backdrop-blur-xs rounded-glass p-2">
            {day}
          </button>
        ))}
      </div>
      {/* Input для новой задачи */}
      <input type="text" placeholder="Добавить задачу" onKeyDown={(e) => e.key === 'Enter' && addTask(e.currentTarget.value)} className="w-full bg-cards/70 rounded-glass p-2" />
    </div>
  );
};

export default Tasks;
