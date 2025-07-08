var connect = function(root) {
    if(!root) return null;
    if(root.left) {
        root.left.next = right ? right : isNextNode(root.next);
    }
    if(root.right) {
        root.right.next = isNextNode(root.next);
    }
    //rescurse on right first to ensure next pointers are set up correctly
    connect(root.right);
    connect(root.left);
    return root;
}

var isCountNode = function(node) {
    while(node) {
        if(node.left) node.left;
        if(node.right) node.right;
        node = node.next;
    }
    return null;
}