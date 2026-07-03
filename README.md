# My Task Manager

## Project Description

My Task Manager is a productivity application built with Next.js, React, and Tailwind CSS. It allows users to create, organize, and manage daily tasks through an interactive interface. Tasks are automatically saved using localStorage, so they remain available even after refreshing the browser.

---

## Features

- Add new tasks with input validation
- Mark tasks as complete or incomplete
- Delete individual tasks
- Filter tasks by All, Active, or Done
- View live task statistics
- Clear all completed tasks with one click
- Persist tasks using localStorage

---

## Technologies Used

- Next.js 16
- React 19
- Tailwind CSS v4
- JavaScript
- HTML
- CSS

---

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
└── components/
    ├── AddTaskForm.js
    ├── TaskBoard.js
    ├── TaskCard.js
    ├── TaskList.js
    └── TaskStats.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/EmilySteinmetz/my-task-manager.git
```

Navigate into the project:

```bash
cd my-task-manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser to:

```
http://localhost:3000
```

---

## Design Decisions

I chose a dark productivity dashboard design with rounded cards, blue accent buttons, and a clean layout. The interface is intentionally different from the workshop example by using a darker color palette, larger spacing, customized buttons, and a modern card-based layout.

---

## React Concepts Demonstrated

- React Components
- Props
- useState
- useEffect
- Controlled Forms
- Conditional Rendering
- Event Handling
- Immutable State Updates
- Array map()
- Array filter()
- Local Storage
- Derived State
- Component Composition

---

## AI Usage Log

AI was used as a learning and debugging tool throughout this project.

- Used AI to better understand the project requirements and break the assignment into manageable steps.
- Used AI to explain React concepts such as state, props, controlled components, localStorage, and immutable updates.
- Used AI to troubleshoot coding errors and understand why they occurred instead of simply replacing the code.
- Used AI to improve the visual design with Tailwind CSS while keeping the project different from the workshop example.
- Used AI to review and improve code comments so they explain why the code works rather than only describing what it does.

---

## Author

Emily Steinmetz

University of South Florida

Summer 2026
