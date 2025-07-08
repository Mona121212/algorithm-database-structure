var flatten = function(root) {
    let prev = null;
    var isFlatten = function(node) {
        if(!root) return;
        //postorder rescursively order;
        isFlatten(root.right);
        isFlatten(root.left);

        // after both subtree are flattened
        node.right = prev;
        node.left = null;
        prev = node;
        
    }
    return isFlatten(root);
}