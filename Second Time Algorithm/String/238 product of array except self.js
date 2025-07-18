var productExceptSelf = function(nums) {
    const answer = new Array(n).fill(1);
    const n = nums.length;
    let left = 1;

    for(let i = 0; i < n; i++) {

        answer[i] = left;

        // away from i;
        left *= nums[i]
    }

    let right = 1;

    // away from i;
    for(let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
    
}