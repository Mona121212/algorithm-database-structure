// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// The function you're testing
var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val;
        dfs(node.right);
    }

    dfs(root);
    return minDiff;
};

// Test case: BST [4, 2, 6, 1， 3]
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
//root.left.left = new TreeNode(1);
//root.left.right = new TreeNode(3);

// Expected output: 1 (minimum difference between 2 and 3 or between 3 and 4)
console.log("Minimum absolute difference:", getMinimumDifference(root));
