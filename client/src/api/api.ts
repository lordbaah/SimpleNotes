import axiosInstance from './axiosInstance';
import type { getNotesResponse } from '../types/notes';

export const fetchNotes = async (): Promise<getNotesResponse> => {
  try {
    const response = await axiosInstance.get('/notes');
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch notes');
  }
};
