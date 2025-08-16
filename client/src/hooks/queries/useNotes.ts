// Query hooks (GET)
import { useQuery } from '@tanstack/react-query';
import { fetchNotes, fetchNoteById } from '../../api/api';

export const useNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });
};

export const useNote = (noteId: string) => {
  return useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
    enabled: !!noteId, // Only fetch if noteId is provided
  });
};
