var buildTree = function(inorder, postorder) {
    return isTree(inorder, postorder);
}

var isTree = function(inorder, postorder) {
    if(inorder.length) {
        //const rootVal = postorder.pop();
        const index = inorder.indexOf(postorder.pop());
        const root = new TreeNode(inorder[index]);

        // postorder traveral is root.left -> root.right -> root;
        //postorder.pop() order is root <- root.right <- root.left
        root.right = isTree (inorder.slice(index + 1), postorder)
        root.left = isTree(inorder.slice(0, index), postorder);
        
        return root;
    }
    return null;
}