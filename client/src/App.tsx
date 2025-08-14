import Header from './components/Header';
import { fetchNotes } from './api/api';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const getNotes = async () => {
      const notes = await fetchNotes();
      console.log(notes);
    };
    getNotes();
  }, []);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
