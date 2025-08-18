# 📝 SimpleNotes

**SimpleNotes** is a modern, full-stack note-taking application built with the **MERN stack**. It features a clean, responsive interface with real-time autosave functionality and robust data validation on both frontend and backend.

---

## ✨ Features

- **📝 Full CRUD Operations** - Create, read, update, and delete notes seamlessly
- **⚡ Real-time Autosave** - Automatic saving with debounced API calls for optimal performance
- **🔒 Unique Title Validation** - Database-level enforcement prevents duplicate note titles
- **📱 Responsive Design** - Clean, modern UI that works across all devices
- **⚙️ Dual Validation** - Frontend validation with Zod + backend validation with Joi
- **🕒 Timestamp Tracking** - Display creation and last modified dates
- **🎨 Modern UI** - Styled with Tailwind CSS for a polished user experience
- **⚡ Optimized Performance** - Efficient data fetching and caching with React Query

---

## 🛠️ Tech Stack

<table>
<tr>
<td><strong>Frontend</strong></td>
<td><strong>Backend</strong></td>
</tr>
<tr>
<td>

- **React 18** + **TypeScript**
- **React Hook Form** + **Zod** validation
- **Tailwind CSS** for styling
- **React Query** for state management
- **Axios** for HTTP requests
- **React Toastify** for notifications

</td>
<td>

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose** ODM
- **Joi** for request validation
- **CORS** enabled
- **Environment-based** configuration

</td>
</tr>
</table>

---

## 📁 Project Structure

```
SimpleNotes/
├── README.md
├── client/                     # Frontend React application
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── api/                # API configuration
│   │   │   ├── api.ts
│   │   │   └── axiosInstance.ts
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/         # React components
│   │   │   ├── DeleteModal.tsx
│   │   │   ├── ErrorState.tsx
│   │   │   ├── LoadingState.tsx
│   │   │   ├── NewNoteForm.tsx
│   │   │   ├── NoteCard.tsx
│   │   │   ├── NoteList.tsx
│   │   │   └── ViewAndEditNote.tsx
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── mutations/
│   │   │   │   └── useNotes.ts
│   │   │   ├── queries/
│   │   │   │   └── useNotes.ts
│   │   │   └── useDebounce.ts
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── NewNote.tsx
│   │   │   ├── NotFound.tsx
│   │   │   └── ViewNotePage.tsx
│   │   ├── schema/             # Zod validation schemas
│   │   │   └── noteSchema.ts
│   │   ├── types/              # TypeScript type definitions
│   │   │   └── notes.ts
│   │   ├── utils/              # Helper utilities
│   │   │   └── formatDate.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── vercel.json
└── server/                     # Backend Express application
    ├── config/                 # Database configuration
    │   └── mongodb.js
    ├── controllers/            # Route controllers
    │   └── note.controller.js
    ├── middlewares/            # Custom middleware
    │   └── error.middleware.js
    ├── models/                 # Mongoose models
    │   └── note.model.js
    ├── routes/                 # API routes
    │   └── note.route.js
    ├── package.json
    └── index.js               # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/simple-notes.git
   cd simple-notes
   ```

2. **Set up the Backend**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server/` directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

   Start the backend server:

   ```bash
   npm run dev
   ```

3. **Set up the Frontend**

   ```bash
   cd ../client
   npm install
   ```

   Create a `.env.local` file in the `client/` directory:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

   Start the frontend development server:

   ```bash
   npm run dev
   ```

4. **Access the Application**

   Open your browser and navigate to: **http://localhost:5173**

---

## 🔧 API Endpoints

| Method   | Endpoint         | Description             |
| -------- | ---------------- | ----------------------- |
| `GET`    | `/api/notes`     | Fetch all notes         |
| `GET`    | `/api/notes/:id` | Fetch single note       |
| `POST`   | `/api/notes`     | Create a new note       |
| `PUT`    | `/api/notes/:id` | Update an existing note |
| `DELETE` | `/api/notes/:id` | Delete a note           |

---

## 🎯 Key Features Explained

### **Autosave Functionality**

- Implements **500ms debounce** to prevent excessive API calls
- **Visual feedback** shows save status to users
- **Optimistic updates** for smooth user experience

### **Validation Strategy**

- **Frontend**: Zod schemas provide type-safe validation and great developer experience
- **Backend**: Joi validation ensures data integrity at the API level
- **Database**: Mongoose schemas with unique constraints for data consistency

### **State Management**

- **React Query** handles server state, caching, and synchronization
- **React Hook Form** manages form state efficiently
- **Custom hooks** encapsulate business logic

---

## 🌐 Demo

- 🔗 **Live Demo**: [SimpleNotes App](https://simple-notes-beta.vercel.app/)

---

## 🏗️ Architecture Highlights

This project demonstrates **production-ready full-stack development practices**:

- **📊 Database Design**: Efficient MongoDB schema with proper indexing
- **🔄 RESTful API**: Clean, consistent API design following REST principles
- **🎨 Component Architecture**: Modular, reusable React components
- **⚡ Performance Optimization**: Debounced requests, efficient re-renders, and smart caching
- **🛡️ Error Handling**: Comprehensive error handling across all application layers
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🔍 Type Safety**: Full TypeScript implementation for better developer experience

---

## 📄 License

This project is created for demonstration purposes as part of a coding challenge.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@your-username](https://github.com/lordbaah)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/lord-baah)

---

**⭐ If you found this project helpful, please give it a star!**
