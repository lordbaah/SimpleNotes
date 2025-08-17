import NoteCard from './NoteCard';
import { useNotes } from '../hooks/queries/useNotes';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

const NoteList = () => {
  const { isPending, error, data } = useNotes();

  //   console.log(data?.notes);
  const notes = data?.notes;

  if (isPending) {
    return <LoadingState message="Loading notes..." />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!notes || notes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg font-medium">
          No notes found
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          Create your first note to get started
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes?.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
