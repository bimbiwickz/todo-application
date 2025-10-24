import TaskCard from './TaskCard'

export default function TaskList({ tasks, onDone }) {
  if (!tasks.length) return <p>No pending tasks 🎉</p>
  return (
    <div className="w-full max-w-md space-y-3">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onDone={onDone} />
      ))}
    </div>
  )
}
