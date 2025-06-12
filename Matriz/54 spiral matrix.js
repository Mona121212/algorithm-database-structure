<<<<<<< HEAD
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let result = [];
    if(!matrix.length || !matrix[0].length) return result;

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length;

    while(top <= bottom && left <= right) {
        for(let col = left; col <= right; col++) {
            result.push(matrix[top][col])
        }
        top++;

        for(let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        if(top <= bottom) {
            for(let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }
        if(left <= right) {
            for(let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left;
        }
    }
    return result;
    
=======
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let result = [];
    if(!matrix.length || !matrix[0].length) return result;

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length;

    while(top <= bottom && left <= right) {
        for(let col = left; col <= right; col++) {
            result.push(matrix[top][col])
        }
        top++;

        for(let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        if(top <= bottom) {
            for(let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }
        if(left <= right) {
            for(let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left;
        }
    }
    return result;
    
>>>>>>> c91bac25d36a903ddf3d098805b7d404b7b7311a
};