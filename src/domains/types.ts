import { TRACK_CODE } from './constants';

export interface Prefecture {
    id: typeof TRACK_CODE[number];
    name: string;
    color: string;
}

export interface Track {
    id: string;
    name: string;
    trackID: typeof TRACK_CODE[number];
    address?: string;
    open_hour: string;
    entrance_fee: number;
    site_url: string;
  }