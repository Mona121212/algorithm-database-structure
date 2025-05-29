class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var buildTree = function(preorder, inorder) {

    
    return isTree(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1)
}

function isTree(preorder, inorder, preStart, preEnd, inStart, inEnd){
        if(preStart > preEnd || inStart > inEnd) return null;

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        const rootIndex = inorder.indexOf(rootVal);
        const leftLength = rootIndex - inStart;

        root.left = isTree(preorder, inorder, preStart + 1, preStart + leftLength, inStart, rootIndex - 1);
        root.right = isTree(preorder, inorder, preStart + leftLength + 1,  preEnd, rootIndex + 1, inEnd);

        return root;
    }

// sample
const preorder = ['1', '3', '4', '2', '6', '5'];
const inorder = ['4', '3', '2', '1', '5', '6'];
//print tree
const tree = buildTree(preorder, inorder);


function printTree(node, prefix = '') {
  if (!node) return;
  console.log(prefix + node.val);
  printTree(node.left, prefix + '  ');
  printTree(node.right, prefix + '  ');
}

printTree(tree);
