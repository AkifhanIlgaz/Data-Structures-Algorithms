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
const levelOrder = (root) => {
  const queue = [];
  const values = [];

  root ? queue.push(root) : values;

  while (queue.length > 0) {
    let levelLength = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelLength; i++) {
      let curr = queue.shift();
      levelNodes.push(curr.val);
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }
    }
    values.push(levelNodes);
  }
  return values;
};
