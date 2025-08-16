//Mutation hooks (POST, PUT, DELETE)
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewNote, updateNoteById, deleteNoteById } from '../../api/api';
import type { updateNoteData } from '../../types/notes';

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewNote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      console.log('Note created:', data);
      // toast.success(data.message);
    },
  });
};

export const useUpdateNote = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateNote', id],
    mutationFn: (data: updateNoteData) => updateNoteById(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      queryClient.invalidateQueries({ queryKey: ['note', id] });
      console.log('Note updated:', data);
    },
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteNoteById(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      console.log('Note deleted successfully:', data.message);
    },
  });
};
