var rotate = function(matrix) {
    n = matrix.length;

    // column equle to row;
    // rotate 90 degree clockwise about the origin and reverse all of them;

    for(let i = 0; i < n; i++) {
        // they don't  need diagonals
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for(let i = 0; i < n; i++) {
        matrix[i].reserver();
    }
}