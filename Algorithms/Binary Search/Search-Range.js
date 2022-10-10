/**
 *
 * @param {number} low
 * @param {number} high
 * Binary search on some range of values
 */

const binarySearch = (low, high) => {
  let middle;
  while (low <= high) {
    middle = Math.floor((low + high) / 2);

    if (isCorrect(middle) > 0) {
      high = middle - 1;
    } else if (isCorrect(middle) < 0) {
      low = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
};

// Let's say our secret number is 10
// Return 1 if n is too big, -1 if too small, 0 if correct
const isCorrect = (n) => {
  if (n > 10) {
    return 1;
  } else if (n < 10) {
    return -1;
  } else {
    return 0;
  }
};
