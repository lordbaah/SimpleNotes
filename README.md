```markdown
# 📝 SimpleNotes

**SimpleNotes** is a full-stack note-taking web application built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to create, view, update, and delete notes with a clean, responsive interface and efficient autosave functionality.

---

## 🚀 Features

- ✍️ Create notes with a **unique title** and body.
- 🔄 Update notes with **real-time autosave** using debounced API calls.
- 📋 View all notes in a list, with **timestamps** for creation and updates.
- ❌ Delete notes seamlessly.
- ✅ Input validation with **Zod (frontend)** and **Joi (backend)**.
- 🎨 Responsive UI styled with **Tailwind CSS**.
- ⚡ Data fetching and caching powered by **React Query**.

---

## 🛠️ Tech Stack

### Frontend

- React + TypeScript
- React Hook Form + Zod
- Tailwind CSS
- Axios
- React Query

### Backend

- Node.js + Express
- MongoDB + Mongoose
- Joi

---

## 📂 Project Structure
```

simple-notes/
│── client/ # Frontend (React + TypeScript)
│── server/ # Backend (Node + Express + MongoDB)
│── README.md

````

---

## ⚙️ Setup Guide

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/simple-notes.git
cd simple-notes
````

### 2. Setup the Backend

```bash
cd server
npm install
```

- Create a `.env` file in the `server/` folder:

  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```

- Start the backend:

  ```bash
  npm run dev
  ```

### 3. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

### 4. Open the App

Visit: **[http://localhost:5173](http://localhost:5173)**

---

## 🖼️ Demo

- 🔗 [Live Demo](https://your-vercel-link.com)
- 🎥 [Video Walkthrough](https://your-video-link.com)

---

## 📖 Project Description

The **SimpleNotes** app demonstrates full-stack engineering proficiency across both frontend and backend.

- **Database-level enforcement** ensures note titles are unique and prevents duplication.
- **Autosave with debounce** provides smooth user experience while avoiding excessive API calls.
- **Validation on both ends**: Zod validates inputs in the frontend, while Joi validates at the backend.
- **Separation of concerns**: clear monorepo structure with independent `client` and `server` folders.
- **Best practices**: RESTful API design, proper error handling, environment-based configuration, and responsive design.

This project reflects production-grade patterns in **API development, state management, and UI/UX implementation**.

---

## 📜 License

This project is for demonstration purposes and submitted as part of a coding challenge.

```

---

```
