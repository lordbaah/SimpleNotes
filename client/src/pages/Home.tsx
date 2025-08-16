import NoteList from '../components/NoteList';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-8">
            Welcome to Simple Notes App
          </h1>
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
