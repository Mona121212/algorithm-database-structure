var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let k = 2;
    for(let i = 2; i < nums.length; i++){
        if(nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++
        }
    }
}