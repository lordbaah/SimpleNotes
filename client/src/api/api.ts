import axiosInstance from './axiosInstance';
import type {
  getNotesResponse,
  createNote,
  createNoteResponse,
} from '../types/notes';

export const fetchNotes = async (): Promise<getNotesResponse> => {
  try {
    const response = await axiosInstance.get('/notes');
    return response.data;
  } catch (error: any) {
    const errorMessage = error?.message;
    console.log(error);
    throw new Error(errorMessage);
  }
};

export const createNewNote = async (
  noteData: createNote
): Promise<createNoteResponse> => {
  try {
    const response = await axiosInstance.post('/notes', noteData);
    console.log('Note created successfully:', response.data);
    return response.data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || 'An unknown error occurred';
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};
