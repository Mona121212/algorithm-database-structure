var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    for(let i = 0; i < n; i++) {
        if(matrix[i][0] === 0) {
            firstRowZero = true;
            break;
        }
    }

    for(let j = 0; j < m; j++) {
        if(matrix[0][j] === 0) {
            firstColZero = true;
            break;
        }
    }

    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            if(matrix[i][0]=== 0 || matrix[0][j]=== 0) {
                matrix[i][j]=0;
            }
        }
    }
     if(firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    if(firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
}