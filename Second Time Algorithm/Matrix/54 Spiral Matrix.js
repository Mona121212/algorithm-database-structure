var spiralOrder = function(matrix) {
    let result = [];
    if(!matrix || matrix.length === 0) {
        return result;
    }

    let row = matrix.length;
    let col = matrix[0].length;

    let top = 0, bottom = row - 1;
    let left = 0, right = col - 1;
    
    while(left <= right && top <= bottom) {
        //left to right
        for(let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        //top to bottom
        for(let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;


        // ensure all of them top bottom left right
        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        //same;
        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++;
        }
    }
    return result;
    
};