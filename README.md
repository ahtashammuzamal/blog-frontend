# 📰 Blog Application – Frontend

Frontend of a **full-stack blog application** built with **React** and modern UI & data-fetching libraries.
This project focuses on **clean architecture, scalable patterns, and professional UI practices**.

---

## 🚀 Tech Stack

* **React** (Vite)
* **Tailwind CSS v4.1**
* **shadcn/ui**
* **TanStack Query (React Query)**
* **Axios**
* **React Hook Form**
* **React Router DOM**

---

## ✨ Key Features

### 🔐 Authentication (Frontend)

* Login & registration forms
* JWT-based auth flow
* Protected routes
* Role-aware UI (admin / author)
* Logout & session handling

### ⚡ Data Management

* Server state handled with **TanStack Query**
* Automatic caching & background refetching
* Mutations for create / update / delete operations
* Centralized API layer using Axios

---

## 📂 Folder Structure

```
src/
├── api/              # Axios instance & API calls
├── assets/           # Static images & assets
├── components/       # Reusable UI components & shadcn
├── constants/        # App-wide constants
├── context/          # Global state (Auth)
├── hooks/            # Custom hooks (queries, mutations)
├── lib/              # Utils & helper functions
├── pages/            # Application pages
├── schemas/          # Zod validation schemas
├── styles/           # Global styles & Tailwind
└── main.jsx          # Entry point & Routing definitions
```

---

## 🔗 API Integration

All API calls are handled through a **central Axios instance**.

### Axios setup

* Base URL from environment variables
* Authorization header attached via interceptor
* Clean separation between API logic and UI

```js
Authorization: Bearer <JWT_TOKEN>
```

### 🎨 UI / UX

* Modern, minimal UI using **shadcn/ui**
* Consistent typography & spacing system
* Reusable and composable components

---

## 🧠 Architecture Highlights

* **Feature-based structure** (scales well for large apps)
* **TanStack Query** for server state (no unnecessary global state)
* **Auth Context** for client-side auth state
* **Reusable UI primitives** instead of page-specific styles
* **shadcn token-based theming** (no random colors)

---

## ⚙️ Environment Variables

Create a `.env` file in the frontend root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🏃‍♂️ Getting Started

```bash
npm install
npm run dev
```

The app will start at:

```
http://localhost:5173
```

---

## 📈 Possible Improvements

* Pagination & search
* Skeleton loaders
* Optimistic updates
* Refresh token handling
* TypeScript migration
* Unit & component testing

---

## 🎯 Purpose of This Project

This frontend was built to demonstrate:

* Professional React architecture
* Modern UI patterns
* Clean separation of concerns
* Production-style code organization

---

## 👨‍💻 Author
Muhammad Ahtasham (https://github.com/ahtashammuzamal)
