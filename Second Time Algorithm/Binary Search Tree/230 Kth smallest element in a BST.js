var kthSmallest = function(root, k) {
    const inorder = [];

    var isKthSmallest = function(node) {
        if(!node) return;

        isKthSmallest(node.left);

        inorder.push[node.val];

        isKthSmallest(node.right);
    }

    isKthSmallest(root);

    return inorder[k - 1];
}