import NoteList from '../components/NoteList';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Simple Notes App
          </h1>
          <p>Manage and organize your thoughts</p>
          <button>
            <Link to="/notes/new" className="btn-primary">
              Create New Note
            </Link>
          </button>
        </div>
        <NoteList />
      </div>
    </section>
  );
};

export default Home;
