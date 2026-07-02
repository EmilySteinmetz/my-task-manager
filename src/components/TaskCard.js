// ══════════════════════════════════════════════════════
// COMPONENT: TaskCard
// PURPOSE: Displays one task and gives the user controls
// to mark it done/undone or delete it.
// TYPE: Client Component — uses click events.
// PROPS: task, onToggle, onDelete.
// ══════════════════════════════════════════════════════

'use client';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center gap-4 bg-slate-700 rounded-xl p-4">
      <p
        className={
          // This conditional style visually separates completed tasks
          // from active tasks using a line-through and faded color.
          task.done ? "line-through text-slate-400" : "text-white"
        }
      >
        {task.title}
      </p>

      <div className="flex gap-2">
        <button
          // The id is passed back up so TaskBoard knows which task to update.
          onClick={() => onToggle(task.id)}
          className={
            // The button changes label and color depending on task.done,
            // giving the user a clear action: Done or Undo.
            task.done
              ? "bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-lg"
              : "bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg"
          }
        >
          {task.done ? "Undo" : "Done"}
        </button>

        <button
          // Delete also sends only the id upward because TaskBoard owns the array.
          onClick={() => onDelete(task.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}