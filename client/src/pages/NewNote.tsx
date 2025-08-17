import NewNoteForm from '../components/NewNoteForm';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const NewNote = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 md:px-4 py-8">
        <div className="mb-4">
          <button onClick={() => navigate(-1)} className="btn-primary">
            <ChevronLeft className="icon-size" />
          </button>
        </div>
        <h1 className="text-xl mb-8">Create New Note</h1>
        <NewNoteForm />
      </div>
    </section>
  );
};

export default NewNote;
