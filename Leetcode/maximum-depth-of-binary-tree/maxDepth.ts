class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  return DFS(root, 0)
}

function DFS(root: TreeNode | null, count: number): number {
  if (!root) {
    return count;
  }

  count++;
  return Math.max(DFS(root.left, count), DFS(root.right, count))
}