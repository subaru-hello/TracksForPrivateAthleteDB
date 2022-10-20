import { PREFECTURE_CODE } from './constants';

export interface Prefecture {
    id: typeof PREFECTURE_CODE[number];
    name: string;
    color: string;
}

export interface Track {
    id: string;
    name: string;
    prefectureID: typeof PREFECTURE_CODE[number];
    address?: string;
    open_hour: string;
    entrance_fee: number;
    site_url: string;
  }