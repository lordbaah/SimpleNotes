import { useState } from 'react';
import type { Note } from '../types/notes';
import { formatDateTime } from '../utils/formatDate';
import { Link } from 'react-router-dom';
import { useDeleteNote } from '../hooks/mutations/useNotes';
import DeleteModal from './DeleteModal';
import { Trash2, ChevronRight } from 'lucide-react';

const NoteCard = ({ note }: { note: Note }) => {
  const { mutate: deleteNote } = useDeleteNote();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = async (id: string) => {
    deleteNote(id);
    setShowDeleteConfirm(false);
    // console.log(`Note with ID ${id} deleted successfully!`);
  };

  return (
    <>
      <div className="card">
        <div className="flex flex-col gap-3 mb-5">
          <h2 className="font-bold text-xl text-gray-900 line-clamp-2">
            {note.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3">
            {/* {note.body.slice(0, 50)}..... */}
            {note.body
              ? `${note.body.slice(0, 70)}${note.body.length > 70 ? '...' : ''}`
              : 'No content available'}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 mb-5  text-gray-500 bg-gray-50/50 rounded-lg p-3 border border-gray-100">
          <p className="text-xs">Created: {formatDateTime(note.createdAt)}</p>
          <p className="text-xs">Updated: {formatDateTime(note.updatedAt)}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/notes/${note._id}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            <span>View Note</span>
            <ChevronRight className="icon-size" />
          </Link>

          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="btn-delete"
          >
            <Trash2 className="icon-size" />
            Delete
          </button>
        </div>
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
