export const exist = (board: string[][], word: string): boolean => {
  const height: number = board.length;
  const width: number = board[0].length;

  const dfs = (row: number, col: number, i: number): boolean => {
    if (row >= height || row < 0 || col >= width || col < 0 || board[row][col] !== word[i]) return false;
    if (i === word.length - 1) return true

    board[row][col] = null;

    const found: boolean =
    dfs(row + 1, col, i + 1) ||
    dfs(row - 1, col, i + 1) ||
    dfs(row, col + 1, i + 1) ||
    dfs(row, col - 1, i + 1);

    board[row][col] = word[i]
    return found;
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === word[0]) {
        if(dfs(i, j, 0)) return true;
      }
    }
  }
  return false;
}
