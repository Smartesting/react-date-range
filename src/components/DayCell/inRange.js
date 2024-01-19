import { isAfter, isBefore } from 'date-fns';

export function inRange(day, startDate, endDate, highlightAllOnEmptySelection) {
  console.log({ day, startDate, endDate, highlightAllOnEmptySelection })
  if (!startDate && !endDate) return highlightAllOnEmptySelection;

  return (!startDate || isAfter(day, startDate)) && (!endDate || isBefore(day, endDate));
}
