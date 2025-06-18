// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Your lowestCommonAncestor function
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
};

// Construct test binary tree
//       3
//      / \
//     5   1
//    / \ / \
//   6  2 0  8
//     / \
//    7   4

const root = new TreeNode(3);
const node5 = new TreeNode(5);
const node1 = new TreeNode(1);
const node6 = new TreeNode(6);
const node2 = new TreeNode(2);
const node0 = new TreeNode(0);
const node8 = new TreeNode(8);
const node7 = new TreeNode(7);
const node4 = new TreeNode(4);

// Build the tree structure
root.left = node5;
root.right = node1;
node5.left = node6;
node5.right = node2;
node1.left = node0;
node1.right = node8;
node2.left = node7;
node2.right = node4;

// Test cases
const p = node5;  // Node 5
const q = node1;  // Node 1

const lca = lowestCommonAncestor(root, p, q);
console.log("LCA of nodes", p.val, "and", q.val, "is:", lca.val); // Expected output: 3

// Test another pair
const p2 = node7; // Node 7
const q2 = node4; // Node 4
const lca2 = lowestCommonAncestor(root, p2, q2);
console.log("LCA of nodes", p2.val, "and", q2.val, "is:", lca2.val); // Expected output: 2
