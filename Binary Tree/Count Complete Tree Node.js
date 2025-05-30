/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root) return 0;
    var helper = function(node) {
        if(!node) return 0;
        //if(!node.left && !node.right){
        //    return 1;
        //}

        return 1 + helper(node.left) + helper(node.right);
    }
    return helper(root);
    
};

// === 测试用例 ===
// 构造一棵树，结构如下：
//       1
//      / \
//     2   3
//    /
//   4

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

let root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        null
    ),
    new TreeNode(3)
);

console.log("countNodes result:", countNodes(root));
