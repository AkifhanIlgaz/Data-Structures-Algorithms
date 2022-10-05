/**
 *
 * @param {Number[]} arr
 * @return {Number[]}
 * Time-Complexity => O(n^2)
 * Space-Complexity => O(1)
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;

    for (j = i + 1; j < arr.length; j++) {
      console.log(`Comparing ${arr[indexMin]} and ${arr[j]}`);
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    // If they are same no need to swap
    if (indexMin !== i) {
      let temp = arr[i];
      console.log(`Swapping ${arr[indexMin]} for the number ${arr[i]}`);
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }

  return arr;
};
selectionSort([33, 2, 52, 106, 73]);
/**
 * Time-Complexity
 *
 * Length of array is n
 *
 * For 0th index we have to traverse all indexes starting from <starting index + 1>
 *
 * Comparisons
 * 0th => n - 1 operations
 * 1th => n - 2 operations
 * .
 * .
 * (n - 1) + (n - 2) + ..... + 1
 *
 * (n - 1)(n - 1 + 1) / 2
 *
 * Swap
 *
 * For worst-case => n
 *
 * ((n-1)(n) / 2) + n
 *
 * = (n^2 + n) / 2
 *
 * = O(n^2)
 *
 *
 * Space-Complexity
 *
 * We are not using any extra memory, so space-complexity is O(1)
 * In-place sorting algorithm.
 *
 * If we want to use extra memory for sorted array, when you move one element from unsorted array to sorted array you should change its value to Number.MAX
 *
 * This is way faster than removing it from unsorted array.
 * There is no number that is greater than Number.MAX, so it is like ignoring it
 */
