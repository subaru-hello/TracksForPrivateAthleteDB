import axios from 'axios';
import type { Comment } from 'domains';

const commentDataUrl = 'http://localhost:3100';

export const getCommentsData = async (track_id: string) => {
  const response = await axios.get(`${commentDataUrl}/${track_id}/comments`);
  return response.data;
};

export const addCommentData = async (track_id: string, comment: Comment) => {
  const response = await axios.post(`${commentDataUrl}/${track_id}/comments`, comment);
  return response.data;
};

export const deleteCommentData = async (track_id: string, id: string) => {
  await axios.delete(`${commentDataUrl}/${track_id}/${id}`);
  return id;
};

export const updateCommentData = async (track_id: string, id: string, comment: Comment) => {
  const response = await axios.put(`${commentDataUrl}/${track_id}/${id}`, comment);
  return response.data;
};
