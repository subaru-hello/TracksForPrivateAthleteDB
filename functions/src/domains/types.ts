import { PREFECTURE_CODE } from './constants';

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
