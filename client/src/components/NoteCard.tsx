import type { Note } from '../types/notes';
import { formatDateTime } from '../utils/formatDate';

const NoteCard = ({ note }: { note: Note }) => {
  // let formattedDate = formatDateTime(note.createdAt);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border-0">
      <h2 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
        {note.title}
      </h2>
      <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
        {note.body}
      </p>
      <div className="flex justify-between text-sm text-gray-400">
        <span>Created: {formatDateTime(note.createdAt)}</span>
        <span>Updated: {formatDateTime(note.updatedAt)}</span>
      </div>
    </div>
  );
};

export default NoteCard;
