import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import ViewNotePage from './pages/ViewNotePage';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes/new" element={<NewNote />} />
            <Route path="/notes/:noteId" element={<ViewNotePage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
