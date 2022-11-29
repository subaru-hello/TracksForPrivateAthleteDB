import { PREFECTURE_CODE } from './constants';

export interface Prefecture {
  id: typeof PREFECTURE_CODE[number];
  name: string;
  color: string;
}

export interface Track {
  id: string;
  name: string;
  furigana: string;
  prefectureID: typeof PREFECTURE_CODE[number];
  address?: string;
  open_hour: string;
  entrance_fee: number;
  site_url: string;
}

export interface User {
  id: number;
  uuid: string;
  name: string;
  email?: string;
}

export interface Comment {
  id: number;
  title: string;
  body: string;
  userID: number;
  trackID: string;
}

export interface AvailableDate {
  id: number;
  day: number;
  day_of_week: string;
  event: string;
  availability_am: boolean;
  availability_pm: boolean;
}
