export default function TaskCard({ task, onDone }) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-gray-600 text-sm">{task.description}</p>
      </div>
      <button
        onClick={() => onDone(task.id)}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Done
      </button>
    </div>
  )
}
