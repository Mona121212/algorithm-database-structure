var trap = function(height) {
    let left = 0;
    let right = height.length - 1;

    // initialization
    let maxLeft = height[left];
    let maxRight = height[right];
    let water = 0;

    while(left < right) {
        if(lefMax < rightMax) {
            left++;
            leftMax = Math.max(height[left], leftMax);
            //leftMax ensure boundry

            water += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(height[right], rightMax);

            water += rightMax - height[right];
        }
    }

    return water;
}