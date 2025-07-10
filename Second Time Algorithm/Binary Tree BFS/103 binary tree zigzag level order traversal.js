var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let result = [];
    let queue = [root];

    let leftToRight = true;
    while(queue.length > 0) {
        let levelSize = queue.length;
        let level = [];

        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

            if(leftToRight) {
                level.push();
            } else {
                level.unshift();
            }
        }
        result.push(level);
        leftToRight = !leftToRight;
    }


}