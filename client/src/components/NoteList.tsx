import NoteCard from './NoteCard';
import { fetchNotes } from '../api/api';
import { useQuery } from '@tanstack/react-query';

const NoteList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });

  //   console.log(data?.notes);
  const notes = data?.notes;

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="grid grid-cols-3 gap-4">
      {notes?.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
