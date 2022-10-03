@@ -1,61 +0,0 @@
/**
 *
 * @param {Number[]} array
 * @return {Number[]}
 *
 * Stable
 * Time-Complexity => Best-case O(n) || Worst-case O(n^2)
 * Space-Complexity => O(1)
 */
const insertionSort = (array) => {
  // We start from index 1 since no matter what the index 0 is

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    // If index is valid and the arr[i] < arr[j], replace them until !(arr[i] < arr[j])

    // array[j + 1] < array[j] => Stable
    // array[j + 1] <= array[j] => Unstable
    while (j >= 0 && array[j + 1] < array[j]) {
      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j--;
    }
  }

  return array;
};

/*
    Time Complexity

    Best-Case => Array is sorted
    Even if the array is sorted we have to check all values starting from index 1, so:
        (n - 1) comparisons   0 swaps    ===>  O(n-1) => O(n)

    Worst-Case => Array is reverse-ordered

    To insert the last element, we need
        (n - 1) comparisons   (n - 1) swaps => 2(n - 1)
    To insert the last second element, we need
        (n - 2) comparisons   (n - 2) swaps => 2(n - 2)
        .
        .
        .
    2 x (1 + 2 + ..... + n - 2, n - 1)
    = 2(n - 1)(n - 1 + 1) / 2
    = (n - 1)(n)
    = n^2 - n
    = O(n^2)    

*/

/*
    Stable Sorting Algorithm
        Guarantees that the order of the same values is preserved

    Unstable Sorting Algorithm
        The order of the same values might be preserved but cannot guarantee that

*/