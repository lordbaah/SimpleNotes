import { useParams } from 'react-router-dom';
import ViewAndEditNote from '../components/ViewAndEditNote';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ViewNotePage = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  // console.log(useParams());

  if (!noteId) {
    return (
      <div className="flex items-center justify-center">
        <p>Error: Note ID not found in URL.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 md:px-4 py-8">
        <div className="mb-4">
          <button onClick={() => navigate(-1)} className="btn-primary">
            <ChevronLeft className="icon-size" />
          </button>
        </div>
        <ViewAndEditNote NoteId={noteId} />
      </div>
    </section>
  );
};

export default ViewNotePage;
