var isValidBST = function(root) {
    let isValid = true;
    let prev = -Infinity;

    var validBST = function(node) {
        if(!node || !isValid) return;
        validBST(node.left);


        //prev is min, node.left should less than node;
        if(prev >= node.val) {
            isValid = false;

            return;
        }
        prev = node.val;

        validBST(node.right);
    }

    validBST(root);
    return isValid;
}