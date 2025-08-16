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
    console.log(`Note with ID ${id} deleted successfully!`);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="font-semibold text-xl">{note.title}</h2>
          <p>{note.body.slice(0, 20)}.....</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Created On: {formatDateTime(note.createdAt)}
          </p>
          <p className="text-sm">
            Updated On: {formatDateTime(note.updatedAt)}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/notes/${note._id}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/link"
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
