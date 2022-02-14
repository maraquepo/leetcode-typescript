// Additional Memory Approach
const setZeroes = (matrix: number[][]): void => {

  const rowSet: Set<number> = new Set()
  const columnSet: Set<number> = new Set()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        columnSet.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rowSet.has(i)) matrix[i][j] = 0;
      if (columnSet.has(j)) matrix[i][j] = 0;
    }
  }
}

// Time compexity: O (M x N)
// Space complexity: O (M + N)

// O(1) Space

const setZeroes2 = (matrix: number[][]): void => {
  let isCol: boolean = false;
  let row: number = matrix.length;
  let col: number = matrix[0].length;

  // iterate through rows
  for (let i = 0; i < row; i++) {
    // if first column has a 0
    if (matrix[i][0] === 0) {
      // reassign isCol to true
      isCol = true;
    }

    // iterate through columns starting from col 1
    for (let j = 1; j < col; j++) {
      // if a position in the matrix has a 0
      if (matrix[i][j] === 0) {
        // set first row at position j to 0
        matrix[0][j] = 0;
        // set first colum at position i to 0
        matrix[i][0] = 0;
      }
    }
  }

  // iterate through the matrix excluding the outer row and column
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // if first column or first row has a 0
      if (matrix[i][0] === 0 || matrix[0][j] == 0) {
        // reassign corresponding point to 0, aka filling in the zeroes
        matrix[i][j] = 0;
      }
    }
  }

  // iterate through matrix excluding the first column
  for (let i = 0; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // if top left corner is 0
      if (matrix[0][0] === 0) {
        // iterate over columns
        for (let j = 0; j < col; j++) {
          // set first row to 0
          matrix[0][j] = 0;
        }
      }
      // first column has zeroes
      if (isCol) {
        // iterate through rows of first column
        for (let i = 0; i < row; i++) {
          // set first column to all zeroes
          matrix[i][0] = 0;
        }
      }
    }
  }
}
