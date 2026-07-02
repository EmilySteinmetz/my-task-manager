// ══════════════════════════════════════════════════════
// COMPONENT: TaskStats
// PURPOSE: Shows live task totals and lets the user clear
// all completed tasks at once.
// TYPE: Client Component — uses a button click event.
// PROPS: total, active, completed, onClearCompleted.
// ══════════════════════════════════════════════════════

'use client';

export default function TaskStats({
  total,
  active,
  completed,
  onClearCompleted,
}) {
  return (
    <div className="flex justify-between items-center gap-4 my-6">
      {/* These counts are passed in from TaskBoard because TaskBoard owns
          the task data and already calculates the derived values. */}
      <div className="flex gap-3 text-white">
        <div className="bg-slate-700 px-3 py-2 rounded-lg">Total: {total}</div>
        <div className="bg-slate-700 px-3 py-2 rounded-lg">Active: {active}</div>
        <div className="bg-slate-700 px-3 py-2 rounded-lg">Done: {completed}</div>
      </div>

      {/* The callback goes back to TaskBoard because only TaskBoard can update
          the tasks state and remove completed items. */}
      <button
        onClick={onClearCompleted}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Clear Completed
      </button>
    </div>
  );
}