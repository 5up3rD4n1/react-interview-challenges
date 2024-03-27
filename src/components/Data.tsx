import {DateTime} from 'luxon';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const daysOfWeek = [
  27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1,
];

export const allEvents = [
  {
    time: (date: any) => DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm'),
    name: 'gym time',
  },
  {
    time: (date: any) => DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm'),
    name: 'luch time',
  },
  {
    time: (date: any) => DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm'),
    name: 'dinner time',
  },
];
