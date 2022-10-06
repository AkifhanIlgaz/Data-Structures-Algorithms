/**
 *
 * @param {Number[]} arr
 * @param {Number} target
 * @return {Number}
 */
const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (target < arr[middle]) {
      right = middle - 1;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

/**
 * Time-Complexity
 *
 * How many times did we divide our search range ?
 *
 * n = number of elements
 *
 * We divide it by 2 every iteration until we have only one element to check. If it is our target return it, otherwise return -1
 *
 * n * (1/2) * (1/2) * (1/2) .... = 1
 *
 * n / (2^x) = 1
 * n = 2^x
 * log(n) = log(2^x)  (log base 2)
 * x = logn
 * O(logn)
 */

/**
 * Space- Complexity
 *
 * We don't use any extra memory
 *
 * O(1)
 */
