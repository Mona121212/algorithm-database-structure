/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0,1],
        [1, -1], [1, 0], [1,1]
    ];

    //caculater live cell count

    function liveNeighbors(r, c) {
        let count = 0;
        for(const [dx, dy] of directions) {
            const x = r + dx, y = c + dy;
            if(x >=0 && x<m && y >= 0 && y <n) {
                if (Math.abs(board[x][y]) === 1) count++;
            }
        }
         return count;
    }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j <n; j++) {
                const liveCount = liveNeighbors(i, j);
                if(board[i][j] === 1) {
                    if(liveCount < 2 || liveCount >3) {
                        board[i][j] = -1;
                    }
                } else {
                    if(liveCount === 3) {
                        board[i][j] = 2;
                    }
                }
            }
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][j] === -1) {
                    board[i][j] = 0;
                } else if (board[i][j] === 2) {
                    board[i][j] = 1;
                }
            }
        }
    
};