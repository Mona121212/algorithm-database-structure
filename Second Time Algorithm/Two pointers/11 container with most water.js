var maxArea = function(height){
    let result = 0;
    let i = 0;
    let j = height.length - 1;

    while(i < j) {
        result = Math.max(result, Math.min(height[i], height[j]) * (j - i));
        height[i] < height[j] ? i++ : j--;
    }

    return result;
}