import type { Note } from '../types/notes';
import { formatDateTime } from '../utils/formatDate';
import { Link } from 'react-router-dom';
import { deleteNoteById } from '../api/api';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

const NoteCard = ({ note }: { note: Note }) => {
  // let formattedDate = formatDateTime(note.createdAt);

  const queryClient = useQueryClient();

  const { mutate: deleteNote } = useMutation({
    mutationFn: (id: string) => deleteNoteById(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      console.log('Note deleted successfully:', data.message);
    },
  });

  const handleDelete = async (id: string) => {
    deleteNote(id);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border-0">
      <h2 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
        {note.title}
      </h2>
      {/* <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
        {note.body}
      </p> */}
      <div className="flex justify-between text-sm text-gray-400">
        <span>Created: {formatDateTime(note.createdAt)}</span>
        <span>Updated: {formatDateTime(note.updatedAt)}</span>
      </div>
      <Link to={`/notes/${note._id}`} className="text-blue-500 hover:underline">
        View Note
      </Link>
      <button
        className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200"
        onClick={() => handleDelete(note._id)}
      >
        Delete Note
      </button>
    </div>
  );
};

export default NoteCard;
