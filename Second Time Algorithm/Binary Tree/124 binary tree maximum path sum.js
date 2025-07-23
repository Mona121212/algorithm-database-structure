var maxPathSum = function(root) {
    let result = [root.val];

    var maxSum = function(node) {
        if(!node) return 0;

        let leftSum = Math.max(0, maxSum(node.left));
        let rightSum = Math.max(0, maxSum(node.right));
        // local node is mid node;
        let  currentSum = node.val + leftSum + rightSum;
        result = Math.max(result, currentSum);
        
        // transfor to the higher node, only select on side;
        return node.val + Math.max(leftSum, rightSum)
    }
    maxSum(root);
    return result;
}