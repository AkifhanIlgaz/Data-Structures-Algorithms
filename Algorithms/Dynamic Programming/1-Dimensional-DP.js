// Fibonacci

// Recursive Solution

const recursiveFibonacci = (n) => {
  if (n <= 1) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// Memoization - Caching - Top Down Dynamic Programming

const memoizationFibonacci = (n, cache = new Map()) => {
  if (n <= 1) return n;

  if (cache.has(n)) return cache.get(n);

  cache.set(
    n,
    memoizationFibonacci(n - 1, cache) + memoizationFibonacci(n - 2, cache)
  );

  return cache.get(n);
};

/*
    Memoization isn't accounted dynamic programming for some programmers.

    They think that bottom-up dynamic programming is real DP
*/

// Bottom Up Dynamic Programming

const dpFibonacci = (n) => {
  if (n <= 1) return n;

  const dp = [0, 1];
  let i = 2;

  while (i <= n) {
    let temp = dp[1];
    dp[1] += dp[0];
    dp[0] = temp;
    i++;
  }

  return dp[1];
};
