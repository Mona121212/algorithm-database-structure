var getMinimumDifference = function(root) {
    // minDiff = node.val - prev; traversal order is left root right, first prev is null

    let prev = null;
    let minDiff = Infinity;

    var isMin = function(node) {
        if(!root) return;
        isMin(node.left);


        if(prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val; // the first node.val is left
    }
    isMin(root);
    return minDiff;
}