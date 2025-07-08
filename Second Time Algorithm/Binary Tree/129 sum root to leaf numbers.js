var sumNumbers = function(root) {
    var isSumNumbers = function(node, sumRoot) {
        if(!node) return 0;

        sumRoot = sumRoot*10 + node.val;

        // terminate condition
        if(!node.left && ! node.right) {
            return sumRoot;
        }

        let nodeLeft = isSumNumbers(root.left, sumRoot);
        let nodeRight = isSumNumbers(root.right, sumRoot);

        return nodeLeft + nodeRight;
    }
    return isSumNumbers(root, 0);
}