var jumpGame = function(nums) {
    let goal = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] + i >= goal) {
            goal = i;
        }
    }
    return goal === 0;
}