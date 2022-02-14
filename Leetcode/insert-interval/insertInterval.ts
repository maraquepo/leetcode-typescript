const insert = (intervals: number[][], newInterval: number[]): number[][]=> {

  const result: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval: number[] = intervals[i];


    // for overlaps
    // compare if the max between the first numbers is less than the min of the second numbers
    if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
      // reassign newInterval to min of the firsts number and max of the second numbers
      newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];

      // skips insertion of [1,3] into the results array
      continue;
      //[[1,3],[1,5],[6,9]]
    }

    // if lower value
    // if current interval's first value is greater than the new intervals second number
    if (interval[0] > newInterval[1]) {
      // push new interval first as well as the rest of the intervals
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    // else push interval into results array
    result.push(interval)
  }
  // push new interval to end of the result array
  result.push(newInterval)
  return result;
}
