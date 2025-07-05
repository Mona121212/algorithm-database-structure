var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        let leftNode = maxDepth(root.left);
        let rightNode = maxDepth(root.right);
        return 1 + Math.max(leftNode, rightNode);
    }
}