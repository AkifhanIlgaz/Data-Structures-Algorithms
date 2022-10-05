/**
 *
 * @param {Number[]} nums
 */
const mergeSort = (nums) => {
  let size = nums.length;
  // Base case
  // If array has only one element, it is considered sorted
  // There is nothing to compare with
  if (size == 1) {
    return nums;
  }

  // Split up into two parts
  let middle = Math.floor(size / 2);
  let leftArray = nums.slice(0, middle);
  let rightArray = nums.slice(middle);

  // Split up each part by recursively calling mergeSort()
  mergeSort(leftArray);
  mergeSort(rightArray);

  // After mergeSort() functions are finished, merge them
  merge(leftArray, rightArray, nums);

  return nums;
};

/**
 *
 * @param {Number[]} leftArray
 * @param {Number[]} rightArray
 * @param {Number[]} array
 */
const merge = (leftArray, rightArray, array) => {
  let index = 0;

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      array[index++] = leftArray.shift();
    } else {
      array[index++] = rightArray.shift();
    }
  }

  while (leftArray.length) {
    array[index++] = leftArray.shift();
  }
  while (rightArray.length) {
    array[index++] = rightArray.shift();
  }
};
