var trap = function(height)  {
    let l = 0, r = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    while(l < r) {
        if(height[l] < heigth[r]) {
            l++;
            leftMax = Math.max(leftMax, height[l]);
            water += leftMax - height[l];
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            water += rightMax - height[r];
        }
    }
    return water;
}