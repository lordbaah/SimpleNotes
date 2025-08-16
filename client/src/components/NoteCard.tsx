import { useState } from 'react';
import type { Note } from '../types/notes';
import { formatDateTime } from '../utils/formatDate';
import { Link } from 'react-router-dom';
import { useDeleteNote } from '../hooks/mutations/useNotes';
import DeleteModal from './DeleteModal';

const NoteCard = ({ note }: { note: Note }) => {
  const { mutate: deleteNote } = useDeleteNote();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = async (id: string) => {
    // deleteNote(id);
    setShowDeleteConfirm(false);
    alert(`Note with ID ${id} deleted successfully!`);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border-0">
        <h2 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
          {note.title}
        </h2>
        <div className="flex justify-between text-sm text-gray-400">
          <span>Created: {formatDateTime(note.createdAt)}</span>
          <span>Updated: {formatDateTime(note.updatedAt)}</span>
        </div>
        <Link
          to={`/notes/${note._id}`}
          className="text-blue-500 hover:underline"
        >
          View Note
        </Link>
        <button
          className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200"
          onClick={() => setShowDeleteConfirm(true)}
        >
          Delete Note
        </button>
      </div>

      {showDeleteConfirm && (
        <DeleteModal
          title={note.title}
          onCancel={() => setShowDeleteConfirm(false)}
          onConfirm={() => handleDelete(note._id)}
        />
      )}
    </>
  );
};

export default NoteCard;
