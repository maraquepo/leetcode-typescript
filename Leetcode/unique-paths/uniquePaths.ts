export const uniquePaths = (m: number,n: number): number => {
  // create a matrix with initial values of null
  const dp: number[][] = Array(m).fill(null).map(() => Array(n))

  // initialize the first row with values of 1
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1
  }

  // initialize the first column with values of 1
  for (let j = 0; j < dp[0].length; j++) {
    dp[0][j] = 1
  }

  // iterate through whole array, adding the values of the position to the left and top and setting it to the value of the current position we are in
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  return dp[m-1][n-1]
}
