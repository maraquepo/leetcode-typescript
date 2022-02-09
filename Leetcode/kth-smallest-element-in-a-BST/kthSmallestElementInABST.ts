import { number } from "yargs";

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Recursive solution

let count: number = 0;
let number: number = 0;

const  kthSmallest = (root: TreeNode | null, k: number): number => {
  // intialize count as k, 2 for example 2nd smallest
  count = k;
  // do a dfs on the root node
  dfs(root);
  return number;
}

const dfs = (node: TreeNode): void => {
  // if left child is not null, do dfs on left child's left child
  if (node.left !== null) dfs(node.left);

  // decrement count
  count--;

  // if we reach count 0, we have found our answer
  if (count === 0) {
    number = node.val;
    return
  }

  // if right child is not null, do dfs on right child
  if (node.right !== null) dfs(node.right)
}

// Iterative

const kthSmallest2 = (root: TreeNode, k: number): number => {
  let stack: TreeNode[] = []

  while (true) {
    // while current root has a value
    while (root !== null) {
      // push that value into the stack
      stack.push(root);
      // assign that root's left child as the current node
      root = root.left
    }
    // if root is null, pop stack, and assign the popped item as root
    root = stack.pop();
    // decrement k
    k--
    // if k equals 0, we could our answer as the root's val
    if (k === 0) return root.val;
    // if k is greater than 0, assign the root's right child as the new current root
    root = root.right;
  }
}
