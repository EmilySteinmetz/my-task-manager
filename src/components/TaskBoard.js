// ══════════════════════════════════════════════════════
// COMPONENT: TaskBoard
// PURPOSE: Main "brain" of the app. This component owns
// the task data, filter choice, localStorage syncing, and
// sends props/callbacks to the smaller child components.
// TYPE: Client Component — needs useState, useEffect, and
// browser-only localStorage.
// PROPS: None.
// ══════════════════════════════════════════════════════

'use client';

import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";

export default function TaskBoard() {
  // tasks belongs in state because it changes whenever the user adds,
  // deletes, toggles, or clears tasks. React re-renders when this state changes.
  const [tasks, setTasks] = useState(() => {
    // Next.js can render before the browser exists, and localStorage only
    // exists in the browser. This guard prevents a server-side error.
    if (typeof window === "undefined") return [];

    // The lazy initializer runs only on the first render, so localStorage
    // is not read again on every re-render.
    const saved = localStorage.getItem("tasks");

    // If saved tasks exist, turn the JSON string back into an array.
    // If not, start with an empty task list.
    return saved ? JSON.parse(saved) : [];
  });

  // filter is state because the user can switch between All, Active, and Done.
  // It is separate from tasks because changing the view should not change task data.
  const [filter, setFilter] = useState("all");

  // This effect syncs React state with localStorage, which is outside React.
  // The dependency array is [tasks] because saving only needs to happen
  // when the actual task list changes.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd(title) {
    // AddTaskForm sends the title up through onAdd because TaskBoard owns the list.
    // The spread operator creates a new array instead of mutating the old one.
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title,
        done: false,
      },
    ]);
  }

  function handleToggle(id) {
    // map() creates a new array, which helps React detect the state change.
    // The matching task is copied and updated; the other tasks stay unchanged.
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDelete(id) {
    // filter() creates a new array that excludes the deleted task.
    // Directly removing from the original array would be mutation.
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleClearCompleted() {
    // This keeps only tasks that are not done, so every completed task is removed.
    // It is still immutable because filter() returns a new array.
    setTasks(tasks.filter((task) => !task.done));
  }

  // These counts are derived from tasks, so they are intentionally not state.
  // If they were separate state, they could accidentally get out of sync.
  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const active = total - completed;

  // visibleTasks is derived from the current filter and task list.
  // It is recalculated during render instead of stored separately.
  const visibleTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((task) => !task.done)
      : tasks.filter((task) => task.done);

  return (
    <main className="min-h-screen bg-slate-950 flex justify-center p-6">
      <section className="w-full max-w-2xl bg-slate-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          My Task Manager
        </h1>

        <p className="text-center text-slate-400 mb-8">
          Keep track of what needs to get done.
        </p>

        {/* TaskBoard owns handleAdd, but AddTaskForm owns the typing input.
            This keeps data flow one-way: child sends the final title upward. */}
        <AddTaskForm onAdd={handleAdd} />

        <div className="flex gap-3 mb-6">
          {/* map() avoids repeating the same button code three times.
              Each button updates the filter state when clicked. */}
          {["all", "active", "done"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={
                // This conditional class highlights the currently selected filter.
                filter === item
                  ? "bg-blue-600 text-white px-4 py-2 rounded-lg"
                  : "bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg"
              }
            >
              {item === "all" ? "All" : item === "active" ? "Active" : "Done"}
            </button>
          ))}
        </div>

        {/* The stats component receives derived numbers, not the whole task list,
            because it only needs counts and the clear-completed callback. */}
        <TaskStats
          total={total}
          active={active}
          completed={completed}
          onClearCompleted={handleClearCompleted}
        />

        {/* TaskList receives already-filtered tasks. Toggle and delete callbacks
            stay in TaskBoard because this component owns the tasks state. */}
        <TaskList
          tasks={visibleTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </section>
    </main>
  );
}