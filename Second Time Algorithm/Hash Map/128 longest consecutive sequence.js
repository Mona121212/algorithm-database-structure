var longestConsecutive = function(nums) {
    if(nums === 0) return 0;
    nums.sort((a, b) => a - b);
    let length = 1;
    let maxLength = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            if(nums[i] === nums[i - 1] + 1) {
                length++;
            } else {
                maxLength = Math.max(maxLength, length);
                length = 1;
            }
        }
    }
    return Math.max(maxLength, length)
}