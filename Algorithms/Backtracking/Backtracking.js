class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.rigth = null;
  }
}

/**
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const canReachLeaf = (root) => {
  if (root == null || root.value == 0) return false;

  if (root.left == null && root.right == null) return true;

  if (canReachLeaf(root.left)) return true;

  if (canReachLeaf(root.right)) return true;

  return false;
};

/**
 *
 * @param {TreeNode} root
 * @param {Number[]} path
 */
const leafPath = (root, path = []) => {
  if (root == null || root.value == 0) return false;

  path.push(root.value);

  if (root.left == null && root.right == null) return true;

  if (leafPath(root.left, path)) return true;

  if (leafPath(root.right, path)) return true;

  path.pop();
  return false;
};
