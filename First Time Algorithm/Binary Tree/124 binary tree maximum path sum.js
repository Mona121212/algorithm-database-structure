function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var maxPathSum = function(root) {
    let res = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        let leftSum = Math.max(0, dfs(node.left));
        let rightSum = Math.max(0, dfs(node.right));

        let currentPathSum = node.val + leftSum + rightSum;
        res = Math.max(res, currentPathSum);

        console.log(`Node: ${node.val}, Left: ${leftSum}, Right: ${rightSum}, CurrentPath: ${currentPathSum}, MaxSoFar: ${res}`);

        return node.val + Math.max(leftSum, rightSum);
    }

    dfs(root);
    return res;
};

//       -3
//      /  \
//    -4    2
//   /
// 10

let root = new TreeNode(-3);
root.left = new TreeNode(-4);
root.right = new TreeNode(2);
root.left.left = new TreeNode(10);

console.log("Max path sum:", maxPathSum(root));
