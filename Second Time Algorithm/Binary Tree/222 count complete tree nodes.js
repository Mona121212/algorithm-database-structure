var countNodes = function(root) {
    var isCountNode = function(node) {
        if(!node) return 0;
        let left = isCountNode(node.left);
        let right = isCountNode(node.right);
        // return current node, node.left, node.right;
        return 1 + left + right;
    }
    return isCountNode(root)
}