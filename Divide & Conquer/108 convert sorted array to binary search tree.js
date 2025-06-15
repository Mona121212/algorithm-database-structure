// Definition of a tree node
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// Main function: convert sorted array to balanced BST
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) return null;

    function buildBST(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = buildBST(left, mid - 1);
        node.right = buildBST(mid + 1, right);

        return node;
    }

    return buildBST(0, nums.length - 1);
};

// Helper function: preorder traversal to print the tree
function printTreePreorder(root) {
    if (!root) return;
    console.log(root.val);
    printTreePreorder(root.left);
    printTreePreorder(root.right);
}

// Test
const nums = [-10, -3, 0, 5, 9];
const bstRoot = sortedArrayToBST(nums);
console.log("Preorder Traversal of BST:");
printTreePreorder(bstRoot);
