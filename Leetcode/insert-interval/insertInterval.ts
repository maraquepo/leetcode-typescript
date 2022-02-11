const insert = (intervals: number[][], newInterval: number[]): number[][]=> {
  if (intervals.length === 0) {
    return [newInterval]
  }

  const result: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval: number[] = intervals[i];


    // for overlaps
    if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
      newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
      continue;
    }

    // if lower value
    if (interval[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }

    result.push(interval)
  }

  result.push(newInterval);
  return result;
}