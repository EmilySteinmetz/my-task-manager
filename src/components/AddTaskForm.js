// ══════════════════════════════════════════════════════
// COMPONENT: AddTaskForm
// PURPOSE: Provides a controlled input where the user types
// a new task and submits it to TaskBoard.
// TYPE: Client Component — uses useState and form events.
// PROPS: onAdd — callback passed from TaskBoard.
// ══════════════════════════════════════════════════════

'use client';

import { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  // title is state because the input changes on every keystroke.
  // It stays local because no other component needs the unfinished text.
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    // Forms normally refresh the page when submitted.
    // preventDefault keeps the React app running without losing state.
    e.preventDefault();

    // trim() blocks blank tasks made of spaces.
    if (!title.trim()) return;

    // The task list lives in TaskBoard, so this callback sends the clean title upward.
    onAdd(title.trim());

    // Reset the form after a successful add.
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      {/* This is a controlled input because its value comes from React state.
          onChange keeps the displayed input and title state in sync. */}
      <input
        type="text"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 rounded-xl p-3 bg-slate-700 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl text-white font-medium"
      >
        Add
      </button>
    </form>
  );
}