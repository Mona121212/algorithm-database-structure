/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [2,3,1,1,4]
var jump = function(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};
var a = jump(nums);
console.log(a);