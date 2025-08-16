import NoteList from '../components/NoteList';
import { Link } from 'react-router-dom';
// import DeleteModal from '../components/DeleteModal';

const Home = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* <DeleteModal /> */}
        <h1 className="text-3xl font-light text-gray-900 mb-8">My Notes</h1>
        <Link
          to="/notes/new"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded hover:bg-gray-800"
        >
          Create New Note
        </Link>
        <NoteList />
      </div>
    </section>
  );
};

export default Home;
