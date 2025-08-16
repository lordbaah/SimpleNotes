import { useParams } from 'react-router-dom';
import ViewNote from '../components/ViewNote';

const ViewNotePage = () => {
  const { noteId } = useParams();
  // console.log(useParams());

  if (!noteId) {
    return <div>Error: Note ID not found in URL.</div>;
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ViewNote NoteId={noteId} />
      </div>
    </section>
  );
};

export default ViewNotePage;
