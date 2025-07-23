var searchMatrix = function(matrix, target) {
    if(!matrix.length|| !matrix[0].length) return false; // row and column is undefind

    // row and column;
    let m = matrix.length;
    let n = matrix[0].length;

    // left and right
    let left = 0;
    let right = n * m - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        let midValue = matrix[row][col];

        if(midValue === target) return true;
        if(midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;

}