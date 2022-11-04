/*
    Count Paths

    Count the number of unique paths from the top left to the bottom right. You are only allowed to move down or to the right.
*/

// Brute Force - Time & Space: O(2^(n+m))
const bruteForce = (r, c, rows, cols) => {
  if (r == rows || c == cols) return 0;

  if (r == rows - 1 && c == cols - 1) return 1;

  return bruteForce(r + 1, c, rows, cols) + bruteForce(r, c + 1, rows, cols);
};

// Memoization - Time & Space: O(n * m)
const memoization = (r, c, rows, cols, cache) => {
  if (r == rows || c == cols) return 0;

  if (cache[r][c] > 0) return cache[r][c];

  if (r == rows - 1 && c == cols - 1) return 1;

  cache[r][c] =
    memoization(r + 1, c, rows, cols, cache) +
    memoization(r, c + 1, rows, cols, cache);

  return cache[r][c];
};

console.log(
  memoization(
    0,
    0,
    4,
    4,
    new Array(4).fill(0).map((arr) => new Array(4).fill(0))
  )
);

// Dynamic Programming - Time: O(n * m), Space: O(m)

const dp = (rows, cols) => {
  let prevRow = new Array(cols).fill(0);

  for (let i = rows - 1; i >= 0; i--) {
    let currentRow = new Array(cols).fill(0);
    currentRow[cols - 1] = 1;

    for (let j = cols - 2; j >= 0; j--) {
      currentRow[j] = currentRow[j + 1] + prevRow[j];
    }

    prevRow = currentRow;
  }

  return prevRow[0];
};

console.log(dp(4, 4));
