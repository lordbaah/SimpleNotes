import NoteCard from './NoteCard';
import { useNotes } from '../hooks/queries/useNotes';

const NoteList = () => {
  const { isPending, error, data } = useNotes();

  //   console.log(data?.notes);
  const notes = data?.notes;

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes?.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
