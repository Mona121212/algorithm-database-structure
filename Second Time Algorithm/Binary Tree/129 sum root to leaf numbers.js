var sumNumbers = function(root) {
    var isSumNumbers = function(node, sumRoot) {
        if(!node) return 0;

        sumRoot = sumRoot*10 + node.val;

        let nodeLeft = isSumNumbers(root.left);
        let nodeRight = isSumNumbers(root.right);

        return nodeLeft + nodeRight;
    }
    return isSumNumbers(root, 0);
}