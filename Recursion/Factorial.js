/**
 *
 * @param {Number} n
 * @return  {number}
 *
 * Time => O(n)
 * Space => O(n) Since function calls take up space on the stack
 */
const recursiveFactorial = (n) => {
  if (n == 1) {
    // Base case
    return 1;
  }

  return n * factorial(n - 1);
};

/**
 *
 * @param {Number} n
 * @return  {number}
 *
 * Time => O(n)
 * Space => O(1)
 */
const iterativeFactorial = (n) => {
  // Iterative Solution
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
};
