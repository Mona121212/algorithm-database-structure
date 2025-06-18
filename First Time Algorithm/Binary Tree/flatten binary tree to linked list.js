function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

let prev = null;

function flatten(root) {
  if (!root) return;
  flatten(root.right);
  flatten(root.left);
  root.right = prev;
  root.left = null;
  prev = root;
}


const root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(3),
    new TreeNode(4)
  ),
  new TreeNode(5,
    null,
    new TreeNode(6)
  )
);

flatten(root);


let node = root;
while (node) {
  console.log(node.val);  // print 1 2 3 4 5 6
  node = node.right;
}
