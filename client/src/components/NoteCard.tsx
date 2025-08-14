import type { Note } from '../types/notes';

const NoteCard = ({ note }: { note: Note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <p>Created at: {new Date(note.createdAt).toLocaleDateString()}</p>
      <p>Updated at: {new Date(note.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default NoteCard;
