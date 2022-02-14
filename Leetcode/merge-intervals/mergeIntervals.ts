const merge = (intervals: number[][]): number[][] => {
  intervals.sort((n1, n2) => n1[0] - n2[0]);

  for (let i = 0; i < intervals.length; i++) {
    // last merge can only be possible from 2nd to last interval within intervals
    if (i < intervals.length - 2) {
      // checks if the first number of the next interval from current is between the interval of the current interval
      if (intervals[i + 1][0] >= intervals[i][0] && intervals[i+1][0] <= intervals[i][1]) {
        // create a merged which takes the first number of the current interval and the greater number between the 2nd number of the current interval and the next interval
        let mergedInterval = [intervals[i][0], Math.max(intervals[i][1], intervals[i +1][1])]
        // reassign next current interval to the merged interval
        intervals[i + 1] = mergedInterval;
        // splice out the current interval;
        intervals.splice(i, 1);
        // decrement i to account for spliced interval
        i--
      }
    }
  }
  return intervals;
}
