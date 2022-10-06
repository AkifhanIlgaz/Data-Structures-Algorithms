/**
 *
 * @param {Number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let rows = matrix.length;
  let columns = matrix[0].length;

  let top = 0;
  let bot = rows - 1;

  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][columns - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }

  if (!(top <= bot)) {
    return false;
  }
  
  let row = Math.floor((top + bot) / 2);

  let left = 0;
  let right = columns - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (target > matrix[row][middle]) {
      left = middle + 1;
    } else if (target < matrix[row][middle]) {
      right = middle - 1;
    } else {
      return true;
    }
  }
  return false;
};
