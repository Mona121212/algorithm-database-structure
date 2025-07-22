var gameOfLife = function(board) {
    let n = board.length;
    let m = board[0].length;

    // based on x and y directions
    const directions = [
        [-1, 1], [0, 1], [1, 1],
        [-1, 0],         [0, 1],
        [-1, -1], [0, -1], [1, -1]
    ]

    function liveNeighbor(r, c) {
        let count = 0;
        for(const [dx, dy] of directions) {
            const x = r + dx, y = c + dy;

            if(x >= 0 && x < m && y >= 0 && y < n) {
                // count board[x][y] suitation, it is live but will die, it mean it still live
                if(Math.abs(board[x][y])=== 1) count ++;
            }

        }
        return count;
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // use liveCount from the last function, it return count;
            const liveCount = liveNeighbor(i, j);
            // previous condition is live
            if(board[i][j] === 1) {
                if(liveCount < 2 || liveCount > 3) {
                    board[i][j] = -1; // live to die
                }
                // liveCount === 2 || liveCount === 3;
                // keep origin;

            } else {
                if(liveCount === 3) {
                    board[i][j] = 2; //die to live
                }
            }
        }
    }

    // put 0 or 1 into reult
    for(let  i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === -1) {
                board[i][j] === 0;
            } else if(board[i][j] === 2) {
                board[i][j] = 1;
            }
        }
    }
}