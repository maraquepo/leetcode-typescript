const countSubstrings = (s: string): number => {
  let result: number = 0;

  for (let start = 0; start < s.length; start++) {
    for (let end = start; end < s.length; end++) {
      result += isPalindrome(s, start, end) ? 1 : 0;
    }
  }
  return result;
}

const isPalindrome = (s: string, start: number, end: number): boolean => {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--
  }
  return true
}