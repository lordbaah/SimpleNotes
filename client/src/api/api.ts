import axiosInstance from './axiosInstance';

export const fetchNotes = async () => {
  const response = await axiosInstance.get('/notes');
  return response.data;
};
