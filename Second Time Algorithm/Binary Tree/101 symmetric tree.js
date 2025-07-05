var isSymmetric = function(root) {
    if(!root) return true;
    return isMirror(root.left, root.right);
}

var isMirror = function(rootLeft, rootRight) {
    if(!rootLeft && !rootRight) return true;
    if(!rootLeft || !rootRight) return false;
    if(rootLeft.value !== rootRight.value) return false;

    return isMirror(rootLeft.left, rootRight.right) && isMirror(rootLeft.right, rootRight.left);
 }