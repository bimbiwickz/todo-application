import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import { fetchTasks, createTask, markTaskDone } from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const handleDone = async (id) => {
    await markTaskDone(id);
    loadTasks();
  };

  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-gray-50 p-6">
      <div className="flex flex-col md:flex-row w-full bg-white px-100 p-6 rounded shadow">
        {/* Left column: form */}
        <div className="w-1/2 pr-6 border-r border-gray-300">
          <h2 className="text-xl font-bold mb-4">Add a Task</h2>
          <TaskForm onAdd={handleAddTask} />
        </div>

        {/* Right column: tasks */}
        <div className="w-1/2 pl-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDone={handleDone} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
