var buildTree = function (preorder, inorder) {
    return isTree(preorder, inorder)
}

var isTree = function(preorder, inorder) {
    if(inorder.length) {
        const index = inorder.indexOf(preorder.shift());
        const root = new TreeNode(inorder[index]);

        root.left = isTree(preorder, inorder(0, index));
        root.right = isTree(preorder, inorder(index + 1));
    }

    return null;
}