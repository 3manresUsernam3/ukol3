import { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="dark-mode">
        <h1>Task Manager</h1>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task description"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="task-list">
          <h2>Tasks:</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <button onClick={() => removeTask(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
