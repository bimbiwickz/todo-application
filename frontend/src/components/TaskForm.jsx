import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-4 rounded shadow mb-6">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Task</button>
    </form>
  )
}
