import axiosInstance from './axiosInstance';
import type {
  getNotesResponse,
  createNoteData,
  createNoteResponse,
  fetchNoteByIdResponse,
  updateNoteData,
  updateNoteResponse,
  deleteNoteResponse,
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
  noteData: createNoteData
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

export const fetchNoteById = async (
  id: string
): Promise<fetchNoteByIdResponse> => {
  try {
    const response = await axiosInstance.get(`/notes/${id}`);
    return response.data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || 'An unknown error occurred';
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};

export const updateNoteById = async (
  id: string,
  noteData: updateNoteData
): Promise<updateNoteResponse> => {
  try {
    const response = await axiosInstance.put(`/notes/${id}`, noteData);
    console.log('Note updated successfully:', response.data);
    return response.data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || 'An unknown error occurred';
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};

export const deleteNoteById = async (
  id: string
): Promise<deleteNoteResponse> => {
  try {
    const response = await axiosInstance.delete(`/notes/${id}`);
    return response.data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || 'An unknown error occurred';
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};
