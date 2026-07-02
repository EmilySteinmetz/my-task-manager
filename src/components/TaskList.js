// ══════════════════════════════════════════════════════
// COMPONENT: TaskList
// PURPOSE: Renders the filtered task array as TaskCard
// components, or shows an empty message.
// TYPE: Client Component.
// PROPS: tasks, onToggle, onDelete.
// ══════════════════════════════════════════════════════

'use client';

import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle, onDelete }) {
  // This conditional render appears when the current filter has no tasks.
  // It gives the user feedback instead of showing an empty blank area.
  if (tasks.length === 0) {
    return <p className="text-slate-400 mt-6">No tasks to show.</p>;
  }

  return (
    <div className="space-y-4 mt-4">
      {/* map() turns each task object into a TaskCard.
          key helps React track each item efficiently when the list changes. */}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}