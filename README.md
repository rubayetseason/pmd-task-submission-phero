# Project Management Dashboard by Season

This is a project management web application built with Next.js, Zustand, React Query, Ant Design, and Tailwind CSS. It allows users to create, manage, and collaborate on projects and tasks.

## Features

- **Project Management:**
  - Create, view, edit, and delete projects.
  - Assign names and descriptions to projects.
  - View project members and recent activities.
- **Task Management:**
  - Create, read, edit, and delete tasks within each project.
  - Search and filter tasks by name, status, and due date.
  - Utilize a drag-and-drop Kanban board to manage tasks across "Incomplete," "In Progress," and "Done" stages (implemented with pure TypeScript, no external libraries are used).
- **User Accounts (Demo):**
  - Login with sample credentials: username: "sampleuser", password: "password123".
  - Mock data is fetched from: [https://mockserver-44khbl9gi-rubayetseasons-projects.vercel.app/projects](https://mockserver-44khbl9gi-rubayetseasons-projects.vercel.app/projects)

## Technologies Used

- **Framework:** Next.js: Provides routing and server-side rendering functionalities.
- **State Management:** Zustand: Manages global application state.
- **Data Fetching:** React Query: Handles asynchronous data fetching, state management, and cache management for tasks.
- **UI Components:** Ant Design: A comprehensive library of pre-built UI components for a user-friendly experience.
- **Styling:** Tailwind CSS: Enables rapid, responsive design and customization.

## Installation and Running

**Installation:**

1. Clone the repository:

   ```bash
   git clone https://github.com/rubayetseason/pmd-task-submission-phero.git
   ```

2. Install all dependencies:

```bash
  npm install
```

3. Start project:

```bash
  npm run dev
```
