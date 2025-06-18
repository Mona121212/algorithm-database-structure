

matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

var setZeroes = function(matrix) {
    let m = matrix.length;          // Get the number of rows 行
    let n = matrix[0].length;       // Get the number of columns 列
    let firstRowZero = false;       // Flag to check if the first row needs to be zeroed
    let firstColZero = false;       // Flag to check if the first column needs to be zeroed

    // Step 1: Check if the first column contains any zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;    // If any element in the first column is 0, set the flag
            break;
        }
    }

    // Step 2: Check if the first row contains any zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;    // If any element in the first row is 0, set the flag
            break;
        }
    }

    // Step 3: Use first row and column as markers
    // If matrix[i][j] is 0, mark its row and column by setting matrix[i][0] and matrix[0][j] to 0
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;    // Mark the row
                matrix[0][j] = 0;    // Mark the column
            }
        }
    }

    // Step 4: Update the cells based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;    // Set to 0 if its row or column is marked
            }
        }
    }

    // Step 5: Zero out the first column if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    // Step 6: Zero out the first row if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
};

//let matrix = [[1,1,1],[1,0,1],[1,1,1]];  // Original matrix

setZeroes(matrix);                      // Call the function to modify the matrix

console.log(matrix);                    // Print the modified matrix
