var averageOfLevels = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    while(queue.length > 0) {
        let levelSize = queue.length;
        let sumNode = 0;

        for(let i = 0; i <= levelSize - 1; i++) {
            const node = queue.shift();
            sumNode += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

            result.push(sumNode / levelSize);
        }
    }
    return result;
}