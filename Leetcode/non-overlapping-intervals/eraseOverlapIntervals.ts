export const eraseOverlapIntervals = (intervals: number[][]): number => {
  intervals.sort((n1, n2) => n1[0] - n2[0]);

  let count: number = 0;
  let prevEnd: number = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (prevEnd > intervals[i][0]) count++;
    else prevEnd = intervals[i][1];
  }
  return count;
}
