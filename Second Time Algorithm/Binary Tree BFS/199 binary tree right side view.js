var rightSideView = function(root) {
    if(!root) return [];
    let queue = [root];
    let result = [];

    // trigger condition
    while(queue.length > 0) {
        let levelSize = queue.length;

        for(let i = 0; i <= levelSize - 1; i++) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

            if(i=== levelSize - 1) result.push(node.val)
        }
    }
    return result;
}