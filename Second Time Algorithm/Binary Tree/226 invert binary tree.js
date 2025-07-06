var invertTree = function(root) {
    if(!root) return null;

    let newTree = new TreeNode(root.val);

    newTree.left = invertTree(root.right);
    newTree.right = invertTree(root.left);

    return newTree;
}