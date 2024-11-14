import { AvailableTerm } from './domains';
const baseArray: AvailableTerm[] = [];
const todoroki: AvailableTerm[] = [
  {
    title: '等々力',
    start: '2024-01-15',
  },
  {
    title: '等々力',
    start: '2024-01-14',
  },
  {
    title: '等々力',
    start: '2023-12-14',
  },
  {
    title: '等々力',
    start: '2022-12-15',
    end: '2022-12-17',
  },
  {
    title: '等々力',
    start: '2023-01-08',
    end: '2023-01-09',
  },
  {
    title: '等々力',
    start: '2023-01-11',
    end: '2023-01-13',
  },
  {
    title: '等々力',
    start: '2023-01-17',
    end: '2023-01-21',
  },
  {
    title: '等々力',
    start: '2023-01-15',
    end: '2023-01-17',
  },
  {
    title: '等々力',
    start: '2023-01-24',
    end: '2023-01-29',
  },
];

export const yumenoshima: AvailableTerm[] = [
  {
    title: '夢の島',
    start: '2023-01-19',
  },
  {
    title: '夢の島',
    start: '2022-01-20',
  },
  {
    title: '夢の島',
    start: '2023-01-25',
  },
  {
    title: '夢の島',
    start: '2023-01-27',
  },
  {
    title: '夢の島',
    start: '2023-01-30',
  },
  {
    title: '夢の島',
    start: '2023-01-31',
  },
  {
    title: '夢の島',
    start: '2023-02-01',
  },
];

export const allAvailableDates = baseArray.concat(todoroki, yumenoshima);
