var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    var isPathSum = function(node, aimSum) {
        // caculater all node of value
        aimSum += node.val;
        // judge it end or not
        if(!node.left && !node.right) {
            return aimSum === targetSum;
        }

        return isPathSum(node.left, aimSum) && isPathSum(node.right, aimSum);
    }
    return isPathSum(root, 0);
}