// Brute Force

const countSubstrings = (s: string): number => {
  // initiate result counter at 0
  let result: number = 0;

  // this will get all contiguous substrings within the given string
  // create pointer for the start of the substring
  for (let start = 0; start < s.length; start++) {
    // create pointer for end of the substring
    for (let end = start; end < s.length; end++) {
      // increment result if a substring is a palindrome given a start and end index
      result += isPalindrome(s, start, end) ? 1 : 0;
    }
  }
  return result;
}

const isPalindrome = (s: string, start: number, end: number): boolean => {
  // while start is less than the end pointer
  while (start < end) {
    // if character at index start and character at index end are not the same
    if (s[start] !== s[end]) {
      // return false
      return false;
    }
    // if they are the same, slide window inwards
    start++;
    end--
  }
  return true
}

