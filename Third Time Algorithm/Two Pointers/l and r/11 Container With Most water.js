var maxArea = function(height) {
    let l = 0, r = height.length - 1;
    let maxWater = 0;
    while(l < r) {
        let water = Math.min(height[l], height[r]) * (r - l);
        maxWater = Math.max(maxWater, water);

        if(height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxWater;
}