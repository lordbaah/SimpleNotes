import { useParams } from 'react-router-dom';
import ViewAndEditNote from '../components/ViewAndEditNote';

const ViewNotePage = () => {
  const { noteId } = useParams();
  // console.log(useParams());

  if (!noteId) {
    return <div>Error: Note ID not found in URL.</div>;
  }

  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 md:px-4 py-8">
        <ViewAndEditNote NoteId={noteId} />
      </div>
    </section>
  );
};

export default ViewNotePage;
