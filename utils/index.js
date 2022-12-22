import {
  addMinutes,
  differenceInDays,
  eachHourOfInterval,
  format,
  getHours,
  getMinutes,
} from 'date-fns';

import { timePixelMap } from '../config';

export const epochToTimestamp = (dateObj) => {
  const date = format(dateObj, 'MMMM d, yyyy');
  const hours = getHours(dateObj);
  const minutes = getMinutes(dateObj);

  return { date, hours, minutes };
};

export const getAMPM = (hours) => (hours < 12 ? 'AM' : 'PM');

export const timestampToPixels = (date, startDate) => {
  const days = differenceInDays(date, startDate);
  const hours = getHours(date);
  const minutes = getMinutes(date);

  const daysToPixels = days * timePixelMap['1d'];
  const hoursToPixels = hours * timePixelMap['1h'];
  const minutesToPixels = minutes * timePixelMap['1m'];

  return daysToPixels + hoursToPixels + minutesToPixels;
};

export const pixelsToTimestamp = (pixels, startDate) => {
  const minutes = pixels / timePixelMap['1m'];
  return addMinutes(startDate, minutes);
};

export const getHoursFromStartToEnd = (start, end) =>
  eachHourOfInterval({ start, end });

export const openLinkInNewTab = (url) => window.open(url, '_blank').focus();

export const handleKeyPress = (event, callback) => {
  if (event.code === 'Enter') {
    callback();
  }
};
