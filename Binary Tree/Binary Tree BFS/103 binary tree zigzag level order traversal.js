// 定义二叉树节点
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var zigzagLevelOrder = function(root) {
    if(!root) return null;
    let result = [];
    let queue = [root];
    let leftToright = true;
    while(queue.length > 0) {
        let levelSize = queue.length
        let level = [];
        for (let i = 0; i <= levelSize - 1; i ++){
            const node = queue.shift();
            if(leftToright) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        result.push(level);
        leftToright = !leftToright;

    }
    return result;
    
};

// TreeNode
// ：
//     1
//    / \
//   2   3
//  / \   \
// 4   5   6

let root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6))
);

// 调用 zigzagLevelOrder
console.log(zigzagLevelOrder(root));
