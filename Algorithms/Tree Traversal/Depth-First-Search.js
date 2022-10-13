class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/**
 *
 * @param {TreeNode} root
 */

// Ascending order
const inOrder = (root) => {
  if (root === null) {
    return;
  }

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
};

const preOrder = (root) => {
  if (root === null) {
    return;
  }

  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
};

const postOrder = (root) => {
  if (root === null) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
};

const reverseOrder = (root) => {
  if (root === null) {
    return;
  }

  reverseOrder(root.right);
  console.log(root.value);
  reverseOrder(root.left);
};
