// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
// Example
// Given binary tree A = {3,9,20,#,#,15,7}, B = {3,#,20,15,7}
//
// A)  3            B)    3
//    / \                  \
//   9  20                 20
//     /  \                / \
//    15   7              15  7
// The binary tree A is a height-balanced binary tree, but B is not.

class ResultType {
  constructor(depth, isBalanced) {
    this.depth = depth;
    this.isBalanced = inBalanced;
  }
}

const isBalanced = function(root) {
  return helper(root).isBalanced;
}
const helper = function(root) {
  if (root === null) {
    return new ResultType(0, true);
  }

  let left = helper(root.left);
  let right = helper(root.right);
  if ( !left.isBalanced || !right.isBalanced ) {
    return new ResultType(-1, false);
  }
  if (Math.abs(left.depth - right.depth) > 1) {
    return new ResultType(-1, false);
  }

  return new ResultType(Math.max(left.depth, right.depth) + 1, true);
}

// 8.22
const isBalanced = function(root) {
  if (root === null) {
    return true;
  }
  return height(root) !== -1;
}
const height = function(node) {
  if (node === null) {
    return 0;
  }
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  if (leftHeight == -1) {
    return -1;
  }

  if (rightheight === -1) {
    return -1;
  }

  if (leftHeight - rightHeight < -1 || leftHeight - rightHeight > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}


const isBalanced = function(root) {
  if (root === null) {
    return true;
  }

  return Math.abs(height(root.left) - height(root.right) <= 1) &&
    isBalanced(root.left) && isBalanced(root.right);
}

const height = function(root) {
  if (root === null) {
    return 0;
  }

  return Math.max(height(root.left), height(root.right)) + 1;
}
