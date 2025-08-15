import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import ViewNotePage from './pages/ViewNotePage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/new" element={<NewNote />} />
          <Route path="/notes/:id" element={<ViewNotePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
