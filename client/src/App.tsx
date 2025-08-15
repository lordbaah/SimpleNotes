import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewNote from './pages/NewNote';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/new" element={<NewNote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
