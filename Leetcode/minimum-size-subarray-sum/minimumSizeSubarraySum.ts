const minSubArrayLen  = (target: number, nums: number[]): number => {
  // constraint checking
  if (nums === null || nums.length === 0) {
    return 0;
  }

  // initialize start and end index of the sliding window
  let start: number = 0;
  let end: number = 0;
  let sum: number = 0;
  let minLength: number = Infinity

  // exit out of while loop when end pointer is out of bounds
  while (end < nums.length) {
    // keep a runing sum as the end pointer expands your window
    sum += nums[end];

    // while sum is greater than or equal to target
    // exit out of while loop when sum is less than target
    while (sum >= target) {
      // get length of subarray from start to end
      // find min length comparing last minLength to current minLength
      minLength = Math.min(minLength, end - start + 1)
      // slide start pointer to the right and subtract its value from the running sum
      sum -= nums[start];
      start++
    }
    // if sum is still less than the target, move end pointer to the right, until the end of the nums array
    end++
  }

  return minLength === Infinity ? 0 : minLength;
}

