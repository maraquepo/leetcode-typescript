const lengthOfLongestSubstring = (s: string): number => {
  // create a hash map to store seen characters
  const seen: Map<string, number> = new Map<string, number>();

  // initialize start at 0, keeps track of the starting index of the current substring
  let start: number = 0;

  // initialize max length at 0
  let maxLength: number = 0;

  // iterate through all the letters in the string
  for (let i = 0; i < s.length; i++) {
    // if character exists in the the map, move the start to last index of that character +1
    if (seen.has(s[i])) {
      // the sliding window aspect where we move the start slider if we see a recurring character
      start = Math.max(seen.get(s[i]) +1, start)
    }
    // set character in map with letter as key and it's index as its value/ if it exists, we set character to the current index
    seen.set(s[i], i);
    // maxLength is the max between previous maxLength or the current index - start + 1
    maxLength = Math.max(i - start + 1, maxLength)
  }
  return maxLength
}
