import axios from 'axios';
import type { Track } from 'domains';

const trackDataUrl = 'http://localhost:3100/tracks';

// 全trackリスト取得
export const getAllTracksData = async () => {
  const response = await axios.get(trackDataUrl);
  return response.data;
};

// 1件のtrackを追加する
export const addTrackData = async (track: Track) => {
  const response = await axios.post(trackDataUrl, track);
  return response.data;
};

// 1件のtrackを削除する
export const deleteTrackData = async (id: string) => {
  await axios.delete(`${trackDataUrl}/${id}`);
  return id;
};

// 1件のtrackを更新する
export const updateTrackData = async (id: string, track: Track) => {
  const response = await axios.put(`${trackDataUrl}/${id}`, track);
  return response.data;
};
