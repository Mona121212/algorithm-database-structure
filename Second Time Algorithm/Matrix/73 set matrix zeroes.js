var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let firstColZero = false;
    let firstRowZero = false;

    for(let i = 0; i < m; i++) {
        if(matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    for(let j = 0; j < n; j++) {
        if(matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j]= 0;
            }
        }
    }

    for(let i = 0; i < m; i++) {
        if(firstColZero = true) {
            matrix[i][0] = 0;
        }
    }

    for(let j = 0; j < n; j++) {
        if(firstRowZero = true) {
            matrix[0][j] = 0
        }
    }
}